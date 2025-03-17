import AppName from "./components/AppName";
import AddTodo from "./components/AddTodo";
import TodoItems from "./components/TodoItems";
import "./App.css";
import { useState } from "react";

function App() {
  const [item,setitem]=useState([]);

  const onNewitem=(name,date)=>{
    let a=[...item,
      {name:name,date:date},
    ]
    setitem(a);
  }

  const ondelete=(i)=>{
    let a=item.filter((item,index)=>index !=i)
    setitem(a)
  }
  return (
    <center className="todo-container">
      <AppName />
      <AddTodo onNewitem={onNewitem} />
      <TodoItems item={item} ondel={ondelete}></TodoItems>
    </center>
  );
}

export default App;