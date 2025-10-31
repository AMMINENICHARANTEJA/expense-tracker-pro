import React from "react";

function ExpenseForm({ data, onChange, onSubmit, editing, onCancel }) {
  return (
    <section className="form-section">
      <form onSubmit={onSubmit} className="expense-form">
        <input
          name="title"
          value={data.title}
          onChange={onChange}
          placeholder="Title"
        />
        <input
          name="amount"
          type="number"
          value={data.amount}
          onChange={onChange}
          placeholder="Amount"
        />
        <select name="category" value={data.category} onChange={onChange}>
          <option value="">Select Category</option>
          <option>Food</option>
          <option>Travel</option>
          <option>Shopping</option>
          <option>Bills</option>
          <option>Entertainment</option>
          <option>Other</option>
        </select>
        <input
          name="date"
          type="date"
          value={data.date}
          onChange={onChange}
        />

        <button type="submit" className="add-button">
          {editing ? "Update" : "Add"}
        </button>

        {editing && (
          <button type="button" className="cancel-button" onClick={onCancel}>
            Cancel
          </button>
        )}
      </form>
    </section>
  );
}

export default ExpenseForm;
