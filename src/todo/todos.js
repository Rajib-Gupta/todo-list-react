import React from 'react';
import Todolist from './Todo-list';

export default function Todos(props) {
  return (<div className='container'>
      <h1 className='text-center'>Todo List</h1>
      {props.todos.length===0?"No todos to display":
      props.todos.map((todo)=>{
          return  (<>
          <Todolist todo={todo} key={todo.id} onDelete={props.onDelete} />
          </>)
      })}
      
     
  </div>);
}
