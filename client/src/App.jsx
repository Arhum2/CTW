import Availabletable from "./components/Availabletable";
import AddTime from "./components/AddTime";
import AddCall from "./components/AddCall";
import React, { useState, useEffect } from "react";
import "./index.css";
import CollapsibleTable from "./components/CollapsibleTable";

function App() {
  const [calls, setCalls] = useState([]);
  const [availability, setAvailability] = useState([]);
  const [showAddCall, setShowAddCall] = useState(false);
  const [showAddTime, setShowAddTime] = useState(false);

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

  const mon = calls.filter((r) => r.day.toLowerCase() === "monday");
  const tue = calls.filter((r) => r.day.toLowerCase() === "tuesday");
  const wen = calls.filter((r) => r.day.toLowerCase() === "wednesday");
  const thu = calls.filter((r) => r.day.toLowerCase() === "thursday");
  const fri = calls.filter((r) => r.day.toLowerCase() === "friday");

  const rowGroups = [
    { day: "Monday", data: mon },
    { day: "Tuesday", data: tue },
    { day: "Wednesday", data: wen },
    { day: "Thursday", data: thu },
    { day: "Friday", data: fri }
  ];
  
  return (
    <div>
      <h1 align='center'>CTW Call Planner</h1>
      
      <h2>
      
      {calls.length > 0 && (
          <>
            {" "}
            <CollapsibleTable onDelete={deleteCall} rowGroups={rowGroups} />{" "}
          </>
        )}


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
