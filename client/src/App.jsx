import TableUI from "./components/Table";
import Availabletable from "./components/Availabletable";
import AddCall from "./components/AddCall";
import React, { useState, useEffect } from "react";
import "./index.css";

function App() {
  const [calls, setCalls] = useState([]);
  const [showAddCall, setShowAddCall] = useState(false);

  // Sets state with data
  useEffect(() => {
    const getCalls = async () => {
      const callsFromServer = await fetchCalls();
      setCalls(callsFromServer);
    };
    getCalls();
  }, []);

  //Fetch Call data
  const fetchCalls = async () => {
    const res = await fetch("/call");
    const data = await res.json();

    return data.calls;
  };

  // Adds Call
  // Changed the parameter's name from "calls" to "newCall" due to a name conflict
  // with the existing "call" attribute
  const addCall = async (newCall) => {
    const res = await fetch("/add_calls", {
      method: "POST",
      mode: "cors",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newCall),
    }); 

    setCalls([...calls, newCall]);
  };

  // Deletes calls
  const deleteCall = async (id) => {
    await fetch(`http://localhost:5000/delete_call/${id}`, {
      method: "POST",
    });
    setCalls(calls.filter((calls) => calls.id !== id));
  };

  return (
    <div>
      <h1>CTW Call Planner</h1>

      {/*Table component*/}
      <TableUI calls={calls} onDelete={deleteCall}/>

      {/*Form & Button component*/}
      <button className="btn" onClick={() => setShowAddCall(!showAddCall)}>
        Add Call
      </button>
      {showAddCall && <AddCall onAdd={addCall}  />}
      <Availabletable calls={calls} onDelete={deleteCall}/>
    </div>
  );
}

export default App;
