import TableUi from "./components/table";
import AddCall from "./components/AddCall";
import React, {useState, useEffect} from "react";
import './index.css'


function App() {

  const [calls, setCalls] = useState([]);
  const [showAddCall, setShowAddCall] = useState(false);


  // Sets state with data
  useEffect(() => {
    const getCalls = async () => {
      const callsFromServer = await fetchCalls()
      setCalls(callsFromServer)
      console.log(calls)
    }
   getCalls()
  }, [])

  //Fetch Call data
  const fetchCalls = async () => {
    const res = await fetch('/call')
    const data = await res.json()

    return(data)
   }

  const addCall = async (calls) => {
    const res = await fetch ('/add_calls', {
      method: 'POST',
      mode: 'cors',
      headers: {
          'Content-type': 'application/json'
      },
      body: JSON.stringify(calls)
  })}
  
  return (
    <div className="container">
      <h1>CTW Call Planner</h1>
      
      {/*Table component*/}
      {calls.length > 0 ? <TableUi calls={calls} onAdd={addCall} /> : 'No Calls'}

      {/*Button component*/}      
      <button className='btn'
        onClick={() => setShowAddCall(!showAddCall)}>Add Call</button>
      { showAddCall && <AddCall/>}
    </div>
  );
}

export default App;