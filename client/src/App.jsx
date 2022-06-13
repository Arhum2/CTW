import TableUi from "./components/table";
import React, {useState, useEffect} from "react";

function App() {
  const [Calls, setCalls] = useState([]);

  useEffect(() => {
   fetch('/call').then(response => response.json().then(data => {
     setCalls(data.Calls);
   })) 
  }, [])

  return (
    <div className="App">
      <h1>Hello World!</h1>
      <TableUi Calls={Calls} />
    </div>
  );
}

export default App;