import axios from "axios";

const baseUrl = "https://to-do-check-list.onrender.com";

const fetchAllToDo = async (setToDo) => {
  const response = await axios.get(baseUrl);
  const toDo = response?.data || [];
  setToDo(toDo);
};

const addToDo = async (text, setText, setToDo) => {
  await axios.post(baseUrl + "/", { text });
  setText("");
  fetchAllToDo(setToDo);
};

const deleteToDo = async (_id, setToDo) => {
  await axios.delete(`${baseUrl}/${_id}`);
  fetchAllToDo(setToDo);
};

const updateToDo = async (_id, setToDo) => {
  await axios.put(`${baseUrl}/${_id}`);
  fetchAllToDo(setToDo);
};

export { fetchAllToDo, addToDo, deleteToDo, updateToDo };
