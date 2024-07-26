import { useEffect, useState } from "react"
import axios from "axios"
function App() {
  const [jokes, setJokes] = useState([]);
  useEffect(()=>{
    axios.get("http://localhost:3000/api/v1/jokes").then((response)=>{
      setJokes(response.data)
      console.log(response.data);
    })
    .catch((error)=>{
      console.log(error);
    })
  },[])

  return (
    <>
      <div>
       <h1>Fetch Jokes from Backend</h1>
       <p>JOKES: {jokes.length}</p>
       {Array.isArray(jokes) ? (
        jokes.map(joke => (
          <div key={joke.id}>
            <h2>{joke.title}</h2>
            <span>{joke.content}</span>
          </div>
        ))
      ) : (
        <p>No jokes available.</p>
      )}

      </div>
    </>
  )
}

export default App
