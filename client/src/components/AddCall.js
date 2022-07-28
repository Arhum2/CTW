import { useState } from "react";
import React from "react";
import { TextField } from "@mui/material";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { TimePicker } from "@mui/x-date-pickers/TimePicker";
import { format } from "date-fns";

const AddCall = ({ onAdd }) => {
  const [volunteerName, setVolunteerName] = useState("");
  const [seniorName, setSeniorName] = useState("");
  const [dateValue, setDateValue] = useState(Date.now());
  const [timeValue, setTimeValue] = useState(Date.now());
  const [phoneNumber, setPhoneNumber] = useState("");


  const onSubmit = (e) => {
    e.preventDefault();
    var x = parseInt(phoneNumber)
    
    if(isNaN(x)) {
      alert("Please add a Phone Number")
      console.log("NAN")
    }
    
    else {

      onAdd({
        volunteerName,
        seniorName,
        Date: format(dateValue, "dd/MMM/yyyy"),
        Time: format(timeValue, "hh:mm a"),
        phoneNumber,
      });
      setVolunteerName("");
      setSeniorName("");
      setDateValue("");
      setTimeValue("");
      setPhoneNumber("");
    }
  };


  return (
    <form align="center" className="add=form" onSubmit={onSubmit}>
      <TextField
        name="volunteerName"
        id="outlined-basic"
        label="Volunteer Name"
        variant="outlined"
        value={volunteerName}
        onChange={(e) => setVolunteerName(e.target.value)}
      />
      <></>
      <TextField
        name="seniorName"
        id="outlined-basic"
        label="Senior Name"
        variant="outlined"
        value={seniorName}
        onChange={(e) => setSeniorName(e.target.value)}
      />
      <></>
      <LocalizationProvider
        dateAdapter={AdapterDateFns}
        name="dateValue"
        id="outlined-basic"
        label="Date"
        variant="outlined"
      >
        <DatePicker
          name="dateValue"
          inputFormat="yyyy/MM/dd"
          label="Date"
          type="date"
          mask="____/__/__"
          value={dateValue}
          onChange={(e) => setDateValue(e)}
          renderInput={(params) => <TextField {...params} />}
        />
      </LocalizationProvider>
      <></>
      <LocalizationProvider dateAdapter={AdapterDateFns}>
        <TimePicker
          variant="outlined"
          name="timeValue"
          label="Time"
          type="date"
          value={timeValue}
          onChange={(e) => setTimeValue(e)}
          renderInput={(params) => <TextField {...params} />}
        />
      </LocalizationProvider>
      <></>
      <TextField
        name="phoneNumber"
        id="outlined-basic"
        label="Phone Number"
        variant="outlined"
        value={phoneNumber}
        onChange={(e) => setPhoneNumber(e.target.value)}
      />
      <></>
      <input
        type="submit"
        onSubmit={onSubmit}
        value="Add New Call"
        className="btn"
      ></input>
    </form>
  );
};

export default AddCall;