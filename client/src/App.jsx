import TableUI from "./components/TableUI";
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

  //Adds Call
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

    // Commenting this out because the response from the Flask Server
    // is "done". it does NOT return the formatted call object.
    // const data = await res.json();

    setCalls([...calls, newCall]);
  };

  return (
    <div>
      <h1>CTW Call Planner</h1>

      {/*Table component*/}
      <TableUI calls={calls} />
      {/* {calls.length > 0 ? <TableUi calls={calls}  addCall={addCall} /> : 'No Calls'} */}

      {/*Form & Button component*/}
      <button className="btn" onClick={() => setShowAddCall(!showAddCall)}>
        Add Call
      </button>
      {showAddCall && <AddCall onAdd={addCall} />}
    </div>
  );
}

export default App;
