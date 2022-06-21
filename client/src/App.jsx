import TableUi from "./components/table";
import Form from "./components/form";
import React, {useState, useEffect} from "react";
import { MuiPicker } from "./components/MuiPicker";

function App() {

  // Fetching and handling Flask data
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
      <Form />
      <MuiPicker/>
    </div>
  );
}

export default App;