import './App.css';
import {Header} from './header/header';
import Todos from "./todo/todos";
import { useState } from 'react';
import AddTodo from './todo/AddTodo';


function App() {
  const onDelete=(todo)=>{
    console.log("on delete",todo)
    setTodos(todos.filter((e)=>{
      return e!==todo
    }))
  }
  const addTodo=(title,desc)=>{
    let id=(todos.length-1)+1

    const myTodo={
      id:id,
      title:title,
      desc:desc
    }
    setTodos([...todos,myTodo])
  }
  const [todos,setTodos]=useState([])
  return (
    <>
     <Header title="My Todo"/>
     <AddTodo addTodo={addTodo} />
     <Todos todos={todos} onDelete={onDelete}/>
    </>
  );
}

export default App;
