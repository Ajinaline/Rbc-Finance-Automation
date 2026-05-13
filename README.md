# 📊 Automated Financial Data Pipeline & Dashboard

A full-stack banking application designed to automate the ingestion, categorization, and visualization of raw financial transaction data. Built with a focus on high-performance API design and modern frontend state management.

![Dashboard Preview](https://github.com/Ajinaline/Rbc-Finance-Automation/raw/main/Screenshot%202026-05-13%20004523.png)

## 🚀 The Mission
This project simulates a core banking internal tool. It demonstrates the ability to take unstructured "dirty" transaction strings (e.g., "STARBUCKS COFFEE TORONTO") and use a Python-based automation engine to categorize them into structured financial data for real-time monitoring.

## 🛠️ Technical Stack
* **Backend:** Python 3.x, **FastAPI** (High-performance REST API)
* **Frontend:** React 18, **Vite**, **Tailwind CSS v4**
* **Automation:** Python-based string parsing and data normalization logic
* **State Management:** React Hooks (`useState`, `useEffect`) for asynchronous data fetching

## 🌟 Key Features
* **Automated Categorization:** Backend logic automatically sorts transactions into categories (Food, Shopping, Transport, Income) based on description patterns.
* **RESTful Architecture:** Clean separation of concerns between the data processing layer (FastAPI) and the presentation layer (React).
* **Dynamic UI:** Conditional rendering for transaction states and color-coded financial indicators (Green/Red) for instant data readability.
* **Responsive Design:** Fully styled with Tailwind CSS, following modern "FinTech" design principles.

## ⚙️ Installation & Setup

### Backend (Python)
1. Navigate to `/backend`
2. Create virtual environment: `python -m venv venv`
3. Activate: `.\venv\Scripts\activate` (Windows) or `source venv/bin/activate` (Mac)
4. Install dependencies: `pip install fastapi uvicorn`
5. Run server: `uvicorn main:app --reload`

### Frontend (React)
1. Navigate to `/frontend`
2. Install dependencies: `npm install`
3. Start dev server: `npm run dev`

## 👨‍💻 RBC Application Context
This project was developed to showcase core competencies for **Full Stack**, **API**, and **Automation Developer** roles at RBC. It highlights the bridge between raw data processing and user-facing financial insights.
