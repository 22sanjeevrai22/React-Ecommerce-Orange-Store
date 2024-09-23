import { useState } from "react";
import { GoPlus } from "react-icons/go";
import { IoCloseCircleOutline } from "react-icons/io5";

function Todos() {
  const [todoList, setTodoList] = useState([]);

  const addTodo = (todo) => {
    setTodoList((prevList) => [todo, ...prevList]);
  };

  const handleDeleteTodo = (index) => {
    const newTodoList = todoList.filter((_, id) => id !== index);
    setTodoList(newTodoList);
    console.log("this is new todo list", newTodoList);

    //Another Approach
    // const reducedTodoList = [...todoList];
    // reducedTodoList.splice(index, 1);
    // setTodoList(reducedTodoList);
  };

  return (
    <>
      <Title />
      <div className="w-96 mx-auto my-8">
        <InputTodo addTodo={addTodo} />
        <TodoList handleDeleteTodo={handleDeleteTodo} todoList={todoList} />
      </div>
    </>
  );
}

function Title() {
  return (
    <div className="w-96 h-20 m-auto rounded-lg bg-red-200 text-xl flex justify-center items-center">
      TO-DO
    </div>
  );
}

function InputTodo({ addTodo }) {
  const [todo, setTodo] = useState("");

  const handleTodo = (event) => {
    const inputTodo = event.target.value;
    setTodo((_) => inputTodo);
  };

  const handleAddTodo = () => {
    if (todo.trim()) {
      addTodo(todo);
      setTodo("");
    }
  };

  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
      handleAddTodo();
    }
  };

  return (
    <span className="flex justify-between items-center">
      <input
        type="text"
        value={todo}
        onKeyDown={handleKeyDown}
        onChange={handleTodo}
        placeholder="Enter your to-do activity"
        className="w-5/6 border border-2 px-4 py-1 rounded-lg my-1 bg-green-200 focus:border-red-200"
      />
      <GoPlus
        onClick={handleAddTodo}
        className="border-2 text-xl text-green-800 hover:text-black cursor-pointer bg-blue-100 mr-4"
      />
    </span>
  );
}

function TodoList({ todoList, handleDeleteTodo }) {
  return (
    <div className="h-40 border-2 rounded shadow-lg p-1  overflow-y-auto">
      {todoList.map((todo, index) => (
        <div
          key={index}
          className="px-4 py-1 rounded-lg my-1 bg-blue-200 shadow-sm flex justify-between items-center"
        >
          {todo}
          <IoCloseCircleOutline
            onClick={() => handleDeleteTodo(index)}
            className="hover:text-red-600"
          />
        </div>
      ))}
    </div>
  );
}

export default Todos;
