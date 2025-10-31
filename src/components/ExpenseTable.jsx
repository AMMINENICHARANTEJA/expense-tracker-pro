import React from "react";

function ExpenseTable({ list, onEdit, onDelete }) {
  return (
    <div className="table-section">
      <table>
        <thead>
          <tr>
            <th>Title</th>
            <th>Amount</th>
            <th>Category</th>
            <th>Date</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {list.length === 0 ? (
            <tr>
              <td colSpan="5" className="no-data">No expenses found.</td>
            </tr>
          ) : (
            list.map((item) => (
              <tr key={item.id}>
                <td>{item.title}</td>
                <td>₹{item.amount}</td>
                <td>{item.category}</td>
                <td>{item.date}</td>
                <td>
                  <button className="edit-button" onClick={() => onEdit(item)}>
                    Edit
                  </button> 
                  <button
                    className="delete-button"
                    onClick={() => onDelete(item.id)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))
          )}
        </tbody>
      </table>
    </div>
  );
}

export default ExpenseTable;
