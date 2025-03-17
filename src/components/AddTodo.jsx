import { useState } from "react";

function AddTodo({onNewitem}) {
  const [name,setname]=useState();
  const [date,setdate]=useState();
 
  const handlenamechange=(e)=>{
    setname(e.target.value);
  }
  const handledatechange=(e)=>{
    setdate(e.target.value);
  }

const handleclick=()=>{
onNewitem(name,date);
setdate("")
setname("")
}

  return (
    <div className="container text-center">
      <div className="row kg-row">
        <div className="col-6">
          <input type="text" placeholder="Enter Todo Here" value={name} onChange={handlenamechange} />
        </div>
        <div className="col-4">
          <input type="date"  value={date} onChange={handledatechange}/>
        </div>
        <div className="col-2">
          <button type="button" className="btn btn-success kg-button" onClick={handleclick}>
            Add
          </button>
        </div>
      </div>
    </div>
  );
}

export default AddTodo;
