import { useEffect, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import axios from "axios";
import "./App.css";

function App() {
  // axios.defaults.baseURL = "http://localhost:5000"
  const [jokes, setJokes] = useState([]);

 useEffect(()=>{
   axios.get("/api/jokes")
   .then((res)=>{
    setJokes(res.data)
   })
   .catch((error)=>{
    console.log(error);
   })
 })

  return (
    <>
       <h1> Hello Welcome!...</h1>
        <p>JOKES:{jokes.length}</p>
        {
          jokes.map((joke)=>(
            <div key={joke.id}>
              <h3>{joke.title}</h3>
              <p>{joke.content}</p>
            </div>
          ))
        }
    </>
  );
}

export default App;
