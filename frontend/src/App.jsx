import { useState } from 'react'
import { useEffect } from 'react'
import './App.css'

function App() {
  const [msg, setMsg] = useState("");
  useEffect(() => {
    fetch('http://localhost:3000/api/hello')
      .then(response => response.json())
      .then(data => setMsg(data.message));
  }, []);
  return (
    <div>
      msg here:
      <p>{msg}</p>
    </div>
  )
}

export default App
