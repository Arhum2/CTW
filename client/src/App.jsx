import TableUi from "./components/table";
import React, {useState, useEffect} from "react";

function App() {
  const [call, setCalls] = useState([]);

  useEffect(() => {
   fetch('/call').then(response => response.json().then(data => {
     setCalls(data.call);
   })); 
  }, []);

  console.log(call);

  return (
    <div className="App">
      <h1>Hello World!</h1>
      <TableUi call={call} />
    </div>
  );
}

export default App;