type GreetingProps = {
   name : string;
}
export default function Greetings({name}:GreetingProps){
   return(
    <div>
      <h2 className="text-xl font-bold">Hello {name}</h2>
    </div>
   )
}