import TableUi from "./components/table";
import Form from "./components/form";
import React, {useState, useEffect} from "react";
import { Button } from "@mui/material";


function App() {

  // Fetching and handling Flask data
  const [calls, setCalls] = useState([]);

  useEffect(() => {
   fetch('/call').then(response => response.json().then(data => {
     setCalls(data.calls)
   })); 
  }, []);

  const [state, setState] = useState(false);
  
  return (
    <div className="App">
      <h1>Hello World!</h1>
      <TableUi calls={calls} />

      <Button style={{marginTop: 45, margin: '0 auto', display: 'flex'}} variant='contained' onClick={() => setState(!state)}>Add Call</Button>

      { state && <Form/>}
    </div>
  );
}

export default App;