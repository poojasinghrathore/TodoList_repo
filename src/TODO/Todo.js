import React from "react";
import ListElement from "./ListElement";

function Todo() {
  const [todoList, setTodoList] = React.useState([]);
  const [subject, setSubject] = React.useState("");

  const handleInputChange = event => {
    // console.log(event.target);
    setSubject(event.target.value);
  };

  const handleAdd = () => {
    let currentTodoList = todoList;
    currentTodoList.push(subject);
    setTodoList(currentTodoList);
    setSubject("");
  };

  const handleEdit = (index, newItem) => {};

  const handleDelete = index => {
    console.log("delete");
    let currentTodoList = todoList;
    currentTodoList.splice(index, 1);
    console.log(currentTodoList);
    setTodoList(currentTodoList);
  };

  return (
    <>
      <input onChange={handleInputChange} value={subject} />
      <button onClick={handleAdd}> Add !!!</button>
      <div>
        {todoList.map((item, index) => (
          <ListElement
            key={item}
            title={item}
            edit={newItemValue => {
              handleEdit(index, newItemValue);
            }}
            delete={() => {
              handleDelete(index);
            }}
          />
        ))}
      </div>
    </>
  );
}

export default Todo;
