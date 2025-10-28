import axios from "axios";
import { useEffect, useState } from "react";

function App() {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios.get("/api/v1/user/test")
      .then(res => {
        setData(res.data.data);
        console.log(res.data.data); // ✅ log actual response
      })
      .catch(err => console.log(err));
  }, []);

  return (
    <>
    <ol>
      <li className="list-decimal list-inside pl-6 text-amber-600">hello</li>
    </ol>
    <ul className="list-disc list-inside text-amber-600">{
        data.map((item)=>(<li key={item.id}>{item.joke}</li>))
      }
    </ul>

      
    </>
  );
}

export default App;

