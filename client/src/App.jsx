import TableUi from "./components/table";
import React, {useState, useEffect} from "react";

function App() {
  const [calls, setCalls] = useState([]);

  useEffect(() => {
   fetch('/call').then(response => response.json().then(data => {
     setCalls(data.calls)
   })); 
  }, []);

  return (
    <div className="App">
      <h1>Hello World!</h1>
      <TableUi calls={calls} />
    </div>
  );
}

export default App;