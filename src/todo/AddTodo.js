import React, { useState } from 'react';

export default function AddTodo(props) {
    const [title,setTitle]=useState("")
    const [desc,setdesc]=useState("")
    const submit=(e)=>{
        e.preventDefault()
       if(!title || !desc){
           alert("Please enter a Title and Description!")
       }
       props.addTodo(title,desc)
    }
    return (<div className='container mt-3'>
        <h1>Add a Todo</h1>
        <form onSubmit={submit}>
            <div className="mb-3">
                <label for="exampleInputEmail1" className="form-label">Title</label>
                <input type="text" value={title} onChange={(e)=>setTitle(e.target.value)} className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
            </div>
            <div className="mb-3">
                <label for="exampleInputPassword1" className="form-label">Description</label>
                <input type="text" value={desc} onChange={(e)=>setdesc(e.target.value)} className="form-control" id="exampleInputPassword1" />
            </div>
            <button type="submit" className="btn btn-primary">Submit</button>
        </form>
    </div>);
}
