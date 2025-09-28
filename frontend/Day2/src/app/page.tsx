"use client"
import Greetings from "./Greetings"
import Counter from "./Counter"
import Todo from "./Todo"

export default function Home(){
    const name = "Full Stack Learner"
    return(
      <div>
        <h1>Hello {name}</h1>
        <p>Welcome to Day 2 of React + Next.js learning!</p>
        <h1 className="text-2xl"> Welcome to my Next js App</h1>
        <Greetings name="Nishu"></Greetings>
        <Counter></Counter>
        <Todo></Todo>
       
      </div>
    )   
    
}