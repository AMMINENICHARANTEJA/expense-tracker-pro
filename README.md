# 💰 Expense Tracker Pro

**Expense Tracker Pro** is a modern web application built with **React.js** that helps users manage and analyze daily expenses effectively.  
It includes full **CRUD operations**, **category/date filters**, **CSV export**, and a **visual summary chart**, all inside a clean, responsive interface.

---

## 🚀 Features

- ➕ Add, ✏️ Edit, and ❌ Delete expenses  
- 🗂️ Categorize expenses (Food, Travel, Bills, etc.)  
- 📅 Filter by category or date range  
- 📊 Visualize spending with interactive Chart.js charts  
- 📤 Export filtered data as CSV  
- 📱 Fully responsive and user-friendly interface  

---

## 🧩 Tech Stack

| Technology | Purpose |
|-------------|----------|
| **React (Vite)** | Frontend framework |
| **Chart.js / react-chartjs-2** | Data visualization |
| **JSON Server** | Mock REST API for local data |
| **React CSV** | Exporting data as CSV |
| **React Icons** | UI icons for buttons and labels |
| **CSS3** | Custom, responsive styling |

---

## ⚙️ Installation & Setup

### 1️⃣ Clone the Repository
```bash
git clone https://github.com/your-username/expense-tracker-pro.git
cd expense-tracker-pro
2️⃣ Install Dependencies
npm install

3️⃣ Start the JSON Server

Make sure a db.json file exists in your project root.

npx json-server --watch db.json --port 5000

4️⃣ Run the React App
npm run dev


Now open http://localhost:5173
 in your browser 🚀

 finance-tracker/
│
├── src/
│   ├── components/
│   │   ├── ExpenseForm.jsx
│   │   ├── ExpenseFilter.jsx
│   │   ├── ExpenseTable.jsx
│   │   ├── ExpenseChart.jsx
│   │   └── ExportButton.jsx
│   │
│   ├── App.jsx
│   ├── App.css
│   ├── api.js
│   └── main.jsx
│
├── db.json
├── package.json
└── README.md
