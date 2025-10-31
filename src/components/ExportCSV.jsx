import React from "react";
import { CSVLink } from "react-csv";

function ExpenseFilter({ category, setCategory, from, setFrom, to, setTo, onReset, data }) {
  return (
    <section className="filter-section">
      <h2>Filter Expenses 🔍</h2>

      <div className="filters">
        <select value={category} onChange={(e) => setCategory(e.target.value)}>
          <option value="">All Categories</option>
          <option>Food</option>
          <option>Travel</option>
          <option>Shopping</option>
          <option>Bills</option>
          <option>Entertainment</option>
          <option>Other</option>
        </select>

        <input
          type="date"
          value={from}
          onChange={(e) => setFrom(e.target.value)}
        />
        <input
          type="date"
          value={to}
          onChange={(e) => setTo(e.target.value)}
        />

        <button className="reset-button" onClick={onReset}>
          Reset
        </button>
        <CSVLink
          data={data}
          headers={[
            { label: "Title", key: "title" },
            { label: "Amount", key: "amount" },
            { label: "Category", key: "category" },
            { label: "Date", key: "date" },
          ]}
          filename="Expense_Report.csv"
          className="export-button"
        >
          Export
        </CSVLink>
      </div>
    </section>
  );
}

export default ExpenseFilter;
