import React, { useState } from "react";

function App() {
  const [data, setData] = useState("");
  const [items, setItems] = useState([]);

  function handleChange(event) {
    const newData = event.target.value;
    setData(newData);
  }
  function addItem() {
    setItems((prevData) => {
      return [...prevData, data];
    });
    setData("");
  }

  return (
    <div className="container">
      <div className="heading">
        <h1>To-Do List</h1>
      </div>
      <div className="form">
        <input name="fData" value={data} onChange={handleChange} type="text" />
        <button onClick={addItem} value={data}>
          <span>Add</span>
        </button>
      </div>
      <div>
        <ul>
          {items.map((todoItems) => {
            return <li>{todoItems}</li>;
          })}
        </ul>
      </div>
    </div>
  );
}

export default App;
