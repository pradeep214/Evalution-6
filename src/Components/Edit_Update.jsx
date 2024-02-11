import React, { useEffect, useState } from "react";

import './edit.css'

function Edit_Update() {
  const [todos, setTodos] = useState([]);
  const [list, setList] = useState("");
  const [editTodo, seteditTodo] = useState([]);
  const [editText, seteditText] = useState("");

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  function addTodo() {
    const store = [...todos, list];
    if (list.trim() !== "") {
      setTodos(store);
    }
    setList("");
  }

  function deleteTodo(index) {
    const update = [...todos];
    update.splice(index, 1);
    setTodos(update);
  }

  function handleUpdate() {
    const data = [...todos];
    data[editTodo] = editText;
    setTodos(data);
    seteditTodo(null);
  }

  function handleEdit(index, el) {
    seteditText(el);
    seteditTodo(index);
  }
  return (
    <div>
        <div className="next">
      <h1>Todo List</h1>

      <input
        type="text"
        value={list}
        onChange={(e) => setList(e.target.value)}
      />

      <button onClick={addTodo}>Add</button>
      </div>
      <ul>
        <h4>
          {todos.map((el, index) => {
            return (
              <li key={index}>
                {editTodo === index ? (
                  <>
                    <input
                      type="text"
                      value={editText}
                      onChange={(e) => seteditText(e.target.value)}
                    />
                    <button onClick={handleUpdate}>Update</button>
                  </>
                ) : (
                  <>
                    {el}
                    <button onClick={() => handleEdit(index, el)}>Edit</button>
                  </>
                )}

                <button onClick={() => deleteTodo(index)}>Delete</button>
              </li>
            );
          })}
        </h4>
      </ul>
    </div>
  );
}

export default Edit_Update;
