import React, { useState, useEffect } from 'react';

function App() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Connect to your FastAPI Backend
    fetch('http://127.0.0.1:8000/api/transactions')
      .then((res) => res.json())
      .then((json) => {
        setData(json);
        setLoading(false);
      })
      .catch((err) => console.error("Error fetching data: ", err));
  }, []);

  return (
    <div className="min-h-screen bg-gray-50 p-8 text-gray-900">
      <div className="max-w-4xl mx-auto">
        <header className="mb-10">
          <h1 className="text-3xl font-extrabold text-blue-700">Financial Dashboard</h1>
          <p className="text-gray-600">Automated Transaction Analysis Pipeline</p>
        </header>

        {loading ? (
          <div className="text-center py-10">Loading encrypted data...</div>
        ) : (
          <div className="bg-white shadow-xl rounded-lg overflow-hidden border border-gray-200">
            <table className="w-full text-left border-collapse">
              <thead className="bg-gray-100 border-b">
                <tr>
                  <th className="p-4 font-semibold text-gray-700">Transaction Description</th>
                  <th className="p-4 font-semibold text-gray-700">Category</th>
                  <th className="p-4 font-semibold text-gray-700 text-right">Amount</th>
                </tr>
              </thead>
              <tbody>
                {data.map((tx) => (
                  <tr key={tx.id} className="border-b hover:bg-gray-50 transition-colors">
                    <td className="p-4 text-sm font-medium">{tx.desc}</td>
                    <td className="p-4">
                      <span className="px-3 py-1 rounded-full text-xs font-bold bg-blue-100 text-blue-700">
                        {tx.category}
                      </span>
                    </td>
                    <td className={`p-4 text-right font-mono font-bold ${tx.amount > 0 ? 'text-green-600' : 'text-red-600'}`}>
                      {tx.amount > 0 ? `+` : ``}${Math.abs(tx.amount).toFixed(2)}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}

        <footer className="mt-8 text-center text-gray-400 text-xs">
          Internal Systems Node: Fast API (Python) + React (Vite) Stack
        </footer>
      </div>
    </div>
  );
}

export default App;