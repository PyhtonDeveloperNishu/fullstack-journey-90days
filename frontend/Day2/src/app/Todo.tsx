import { useState } from "react";

export default function Todo(){
   const [input,setInput]=useState("")
   const [tasks,setTasks]= useState<string[]>([])

   function add (){
    if(input.trim()==="") return
      setTasks([...tasks,input]);
      setInput("");
   }

   return(
    <div>
      <h1>Todo List</h1>
      <input  value={input} onChange={(e)=> setInput(e.target.value)}/>
      <button onClick={add}>Add</button>
      <ul>
        {
          tasks.map((task,index)=>(
            <li key={index}>{task}</li>
          ))
        }
      </ul>
    </div>
   )
}