import React, { useEffect } from "react";
import { useState } from "react";
import Table from "./component/Table";

function Todo() {
  const [todos, setTodos] = useState([]);
  // const [content, setContent] = useState();
  // const [date, setDate] = useState();
  const [todo, setTodo] = useState({
    content: null,
    date: null,
    state: false,
  });
  // const onChangeContent = (e) => {
  //   setContent(e.target.value);
  // };
  // const onChangeDate = (e) => {
  //   setDate(e.target.value);
  // };
useEffect(() => console.log('Her renderda çalışır'));
useEffect(() => {console.log('Sayfa ilk yüklendiğinde çalışır')}, []);

  const onChangeTodo = (e) => {
    const {name, value} = e.target;
    setTodo((t) => ({...t, [name]: value, state: false}));
  }
  // const addTodo = (e) => {
  //   setTodos([
  //     ...todos,
  //     {
  //       content: content,
  //       date: date,
  //     },
  //   ]);
  // };
  const addTodo = (e) => {
    // setTodo((t) => ({...t, state: false}));
    setTodos([...todos, todo]);
  };  
  const deleteTodo = (e) => {
    let index = e.target.value;
    let list = [...todos];
    list.splice(index, 1);
    setTodos(list);
  };
  const editTodo = (e) => {
    let index = e.target.value
    let list = [...todos];
    let newTodo = list[index];
    newTodo.state = true;
    setTodos(list);
  }

  return (
    <div className="w-full h-full container flex-col justify-center items-center">
      <h1 className="text-center text-slate-500 font-bold"> Todo App</h1>
      <div>
        <form className="row flex-col mx-auto justify-center w-50 mt-5">
          <input
            type="text"
            id="content"
            name="content"
            placeholder="Lütfen Bir Todo Giriniz"
            className="w-50 rounded-md border px-2 my-3 "
            onChange={onChangeTodo}
          ></input>
          <input
            type="date"
            id="date"
            name="date"
            className="w-auto border rounded-md"
            onChange={onChangeTodo}
          ></input>

          <button
            type="button"
            className="hover:bg-blue-800 w-50 m-auto mt-4 p-1 
          rounded font-medium cursor-pointer bg-blue-600 text-white"
            onClick={addTodo}
          >
            Todo ekle
          </button>
        </form>
      </div>

      <div>
        <Table head = {['Sıra No', 'Todo', 'Tarih', 'Durum', 'İşlemler']} todos = {todos} editTodo = {editTodo} deleteTodo = {deleteTodo}></Table>
      </div>
    </div>
  );
}

export default Todo;
