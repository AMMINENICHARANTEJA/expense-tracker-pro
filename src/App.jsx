import React, { useState, useEffect } from "react";
import { getExpenses, addExpense, updateExpense, deleteExpense } from "./api";
import ExpenseForm from "./components/ExpenseForm";
import ExpenseFilter from "./components/ExpenseFilter";
import ExpenseTable from "./components/ExpenseTable";
import ExpenseChart from "./components/ExpenseChart";
import "./App.css";

function App() {
  const [expenses, setExpenses] = useState([]);
  const [data, setData] = useState({ title: "", amount: "", category: "", date: "" });
  const [editId, setEditId] = useState(null);
  const [category, setCategory] = useState("");
  const [from, setFrom] = useState("");
  const [to, setTo] = useState("");

  // Fetch data from JSON server
  useEffect(() => {
    fetchAll();
  }, []);

  const fetchAll = async () => {
    try {
      const res = await getExpenses();
      setExpenses(res.data);
    } catch {
      alert("Error loading data");
    }
  };

  // Handle input changes
  const handleChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  // Add or update expense
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!data.title || !data.amount || !data.category) {
      alert("Please fill all fields");
      return;
    }

    const newData = {
      ...data,
      amount: parseFloat(data.amount),
      date: data.date || new Date().toISOString().slice(0, 10),
    };

    try {
      if (editId) {
        await updateExpense(editId, newData);
        alert("Expense updated");
      } else {
        await addExpense(newData);
        alert("Expense added");
      }
      setData({ title: "", amount: "", category: "", date: "" });
      setEditId(null);
      fetchAll();
    } catch {
      alert("Error saving data");
    }
  };

  // Edit expense
  const handleEdit = (item) => {
    setData(item);
    setEditId(item.id);
  };

  // Delete expense
  const handleDelete = async (id) => {
    if (!window.confirm("Delete this expense?")) return;
    await deleteExpense(id);
    fetchAll();
  };

  // Reset filters
  const handleReset = () => {
    setCategory("");
    setFrom("");
    setTo("");
  };

  // Filter expenses
  const filtered = expenses.filter((e) => {
    const byCat = category ? e.category === category : true;
    const byFrom = from ? e.date >= from : true;
    const byTo = to ? e.date <= to : true;
    return byCat && byFrom && byTo;
  });

  return (
    <div className="app">
      <header className="app-header">
        <h1>Expense Tracker</h1>
        <p>Manage and analyze your daily spending easily.</p>
      </header>

      <main className="content">
        {/* Form Section */}
        <ExpenseForm
          data={data}
          onChange={handleChange}
          onSubmit={handleSubmit}
          editing={editId}
          onCancel={() => {
            setEditId(null);
            setData({ title: "", amount: "", category: "", date: "" });
          }}
        />

        {/* Filter + Export Section */}
        <ExpenseFilter
          category={category}
          setCategory={setCategory}
          from={from}
          setFrom={setFrom}
          to={to}
          setTo={setTo}
          onReset={handleReset}
          data={filtered}
        />

        {/* Table + Chart */}
        <section className="data-section">
          <div className="table-container">
            <ExpenseTable list={filtered} onEdit={handleEdit} onDelete={handleDelete} />
          </div>

          <div className="chart-container">
            <div className="chart-section">
              <ExpenseChart expenses={filtered} />
            </div>
          </div>
        </section>
      </main>
    </div>  
  );
}

export default App;
