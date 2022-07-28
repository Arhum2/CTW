import { useState } from "react";
import React from "react";
import { TextField } from "@mui/material";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { TimePicker } from "@mui/x-date-pickers/TimePicker";
import { format } from "date-fns";

const AddTime = ({ onAdd }) => {
  const [volunteerName, setVolunteerName] = useState("");
  const [timeValue, setTimeValue] = useState(Date.now());


  const onSubmit = (e) => {
    e.preventDefault();
    
      onAdd({
        volunteerName,
        Time: format(timeValue, "hh:mm a"),
      });
      setVolunteerName("");
      setTimeValue("");

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
      <input
        type="submit"
        onSubmit={onSubmit}
        value="Add Availability"
        className="btn"
      ></input>
    </form>
  );
};

export default AddTime;