import { useState, useEffect } from "react";

function App() {

  const [affs, setAffs] = useState([]);

  useEffect(()=>{
    const getAffirmations = async() => {
      const response = await fetch (`http://localhost:3000/api/v1/list`);
      const result = await response.json()
      setAffs(result);
    }
    getAffirmations();
  },[])

  return (
    <>
     <h1>Frontend connected</h1>

    <ul>
      {
        affs.map((aff) => {
          return <li>{aff}</li>
        })
      }
    </ul>

    </>
  )
}

export default App