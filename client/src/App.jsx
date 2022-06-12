import MuiTable from "./table";
import React, {useState, useEffect} from "react";

function App() {
  useEffect(() => {
   fetch('/call').then(response => response.json().then(data => {
     console.log(data);
   })) 
  }, [])

  return (
    <div className="App">
      <h1>Hello World!</h1>
      <MuiTable></MuiTable>
    </div>
  );
}

export default App;