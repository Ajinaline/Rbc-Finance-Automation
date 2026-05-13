# Save as main.py
from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

app = FastAPI()

# Enable CORS so React can talk to Python
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_methods=["*"],
    allow_headers=["*"],
)

# Mock "Bank Data" - Simulate raw data from a database
raw_transactions = [
    {"id": 1, "desc": "STARBUCKS COFFEE TORONTO", "amount": -7.50},
    {"id": 2, "desc": "AMAZON.CA*MARKETPLACE", "amount": -45.00},
    {"id": 3, "desc": "RBC SALARY DEPOSIT", "amount": 2500.00},
    {"id": 4, "desc": "UBER* TRIP MONDAY", "amount": -15.20},
]

@app.get("/api/transactions")
def get_transactions():
    # AUTOMATION LOGIC: Categorize the descriptions
    processed_data = []
    for tx in raw_transactions:
        desc = tx["desc"].lower()
        category = "Other"
        if "starbucks" in desc or "coffee" in desc: category = "Food & Drink"
        elif "amazon" in desc: category = "Shopping"
        elif "uber" in desc: category = "Transport"
        elif "salary" in desc: category = "Income"
        
        tx["category"] = category
        processed_data.append(tx)
        
    return processed_data
