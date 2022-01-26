import React from 'react';

export default function Todolist({todo, onDelete}) {
    return (<div className='container'>
      <h3>{todo.title}</h3>
      <p>{todo.desc}</p>
      <button className='btn btn-danger' onClick={()=>{onDelete(todo)}}>Delete</button>
    </div>)
}
