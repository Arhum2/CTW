import TableUI from "./components/Table";
import Availabletable from "./components/Availabletable";
import AddTime from "./components/AddTime";
import AddCall from "./components/AddCall";
import React, { useState, useEffect } from "react";
import "./index.css";
import CollapsibleTable from "./components/text";

function App() {
  const [calls, setCalls] = useState([]);
  const [availability, setAvailability] = useState([]);
  const [showAddCall, setShowAddCall] = useState(false);
  const [showAddTime, setShowAddTime] = useState(false);
  const [showMonday, setShowMonday] = useState(false);
  const [showTuesday, setShowTuesday] = useState(false);
  const [showWednesday, setShowWednesday] = useState(false);
  const [showThursday, setShowThursday] = useState(false);
  const [showFriday, setShowFriday] = useState(false);

 // Fetching and Setting Call and Availability Data
  useEffect(() => {
    const getCalls = async () => {
      const callsFromServer = await fetchCalls();
      setCalls(callsFromServer);
    };
    getCalls();
  }, []);

  useEffect(() => {
    const getAvailability = async () => {
      const availabilityFromServer = await fetchAvailability();
      setAvailability(availabilityFromServer);
    };
    getAvailability();
  }, []);

 
  const fetchCalls = async () => {
    const res = await fetch("/call");
    const data = await res.json();

    return data.calls;
  };


  const fetchAvailability = async () => {
    const res = await fetch("/Availability");
    const data = await res.json();

    return data.availability;
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
  const addAvailability = async (newAvailability) => {
    const res = await fetch("/add_availability", {
      method: "POST",
      mode: "cors",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newAvailability),
    });

    setAvailability([...availability, newAvailability]);
  };

  // Delete
  const deleteCall = async (id) => {
    await fetch(`http://localhost:5000/delete_call/${id}`, {
      method: "POST",
    });
    setCalls(calls.filter((calls) => calls.id !== id));
  };

  const deleteAvailability = async (id) => {
     await fetch(`http://localhost:5000/delete_availability/${id}`, {
      method: "POST",
     });
     setAvailability(availability.filter((availability) => availability.id !== id));
  };

  console.log(calls)

  function createData(rowGroup, day) {
    const arr = [];
    if(!rowGroup) return [];
    for(let i = 0; i < rowGroup.day[day].length; i++) {
        arr.push({
            day,
            data: rowGroup.day[day],
        })
    }
    return arr;
  }

  return (
    <div>
      <h1>CTW Call Planner</h1>
      
      <h2>
      {/*Calls Table component*/}
      <div className="topnav">
        <button className="btn" onClick={() => setShowMonday(!showMonday)}>Monday</button>
        {showMonday && <TableUI dayOfWeek='Monday' calls={calls} onDelete={deleteCall} />}
        
        <button className="btn" onClick={() => setShowTuesday(!showTuesday)}>Tuesday</button>
        {showTuesday && <TableUI dayOfWeek='Tuesday' calls={calls} onDelete={deleteCall} />}
        
        <button className="btn" onClick={() => setShowWednesday(!showWednesday)}>Wednesday</button>
        {showWednesday && <TableUI dayOfWeek='Wednesday' calls={calls} onDelete={deleteCall} />}
        
        <button className="btn" onClick={() => setShowThursday(!showThursday)}>Thursday</button>
        {showThursday && <TableUI dayOfWeek='Thursday' calls={calls} onDelete={deleteCall} />}
        
        <button className="btn" onClick={() => setShowFriday(!showFriday)}>Friday</button>
        {showFriday && <TableUI dayOfWeek='Friday' calls={calls} onDelete={deleteCall} />}
      </div>
      
      {calls.length > 0 && ( <> <CollapsibleTable rowGroups={calls} /> </> )}


      {/*Calls Form & Button component*/}
      <button className="btn" onClick={() => setShowAddCall(!showAddCall)}>
        Add Call
      </button>
      {showAddCall && <AddCall onAdd={addCall} />}
      </h2>
      {/*Availability Form & Button component*/}
      <Availabletable availability={availability} onDelete={deleteAvailability} />
      <button className="btn" onClick={() => setShowAddTime(!showAddTime)}>
        Add Availability
      </button>
      {showAddTime && <AddTime onAdd={addAvailability} />}
    </div>
  );
}

export default App;
