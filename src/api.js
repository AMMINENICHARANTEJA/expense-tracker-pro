import axios from "axios";

const api = "http://localhost:5000/expenses";

export const getExpenses = () => axios.get(api);
export const addExpense = (data) => axios.post(api, data);
export const updateExpense = (id, data) => axios.put(`${api}/${id}`, data);
export const deleteExpense = (id) => axios.delete(`${api}/${id}`);
//json-server --watch db.json --port 5000