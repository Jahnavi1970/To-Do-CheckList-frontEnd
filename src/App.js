import { useEffect, useState } from "react";
import { ToDo } from "./components/ToDo";
import {
  fetchAllToDo,
  addToDo,
  deleteToDo,
  updateToDo,
} from "./utils/HandleApi";
// import { updateToDo } from "../../server/controllers/ToDoController";
function App() {
  const [toDo, setToDo] = useState([]);
  const [text, setText] = useState("");

  useEffect(() => {
    fetchAllToDo(setToDo);
  }, []);

  return (
    <div className="App">
      <div className="container">
        <h1>To Do Check List</h1>
        <div className="top">
          <input
            type="text"
            placeholder="Add Tasks"
            value={text}
            onChange={(e) => setText(e.target.value)}
          ></input>
          <div className="add" onClick={() => addToDo(text, setText, setToDo)}>
            Add
          </div>
        </div>
        <div className="list">
          {toDo.map((item) => (
            <ToDo
              key={item._id}
              text={item.text}
              updateMode={() => updateToDo(item._id, setToDo)}
              deleteToDo={() => deleteToDo(item._id, setToDo)}
              isValid={item.isValid}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
