import { useState } from "react";
import React from "react";
import { TextField } from "@mui/material";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { TimePicker } from "@mui/x-date-pickers/TimePicker";
import { format } from "date-fns";

const AddTime = ({ onAdd }) => {
  const [volunteerName, setVolunteerName] = useState("");
  const [mondayValue, setMondayValue] = useState(Date.now());
  const [tuesdayValue, setTuesdayValue] = useState(Date.now());
  const [wednesdayValue, setWednesdayValue] = useState(Date.now());
  const [thursdayValue, setThursdayValue] = useState(Date.now());
  const [fridayValue, setFridayValue] = useState(Date.now());
  const [VphoneNumber, setVPhoneNumber] = useState("");

  const onSubmit = (e) => {
    e.preventDefault();

    onAdd({
      volunteerName,
      Monday: format(mondayValue, "hh:mm a"),
      Tuesday: format(tuesdayValue, "hh:mm a"),
      Wednesday: format(wednesdayValue, "hh:mm a"),
      Thursday: format(thursdayValue, "hh:mm a"),
      Friday: format(fridayValue, "hh:mm a"),
      VphoneNumber,
    });
    setVolunteerName("");
    setMondayValue("");
    setTuesdayValue("");
    setWednesdayValue("");
    setThursdayValue("");
    setFridayValue("");
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
          name="mondayValue"
          label="Monday"
          type="date"
          value={mondayValue}
          onChange={(e) => setMondayValue(e)}
          renderInput={(params) => <TextField {...params} />}
        />
      </LocalizationProvider>
      <LocalizationProvider dateAdapter={AdapterDateFns}>
        <TimePicker
          variant="outlined"
          name="tuesdayValue"
          label="Tuesday"
          type="date"
          value={tuesdayValue}
          onChange={(e) => setTuesdayValue(e)}
          renderInput={(params) => <TextField {...params} />}
        />
      </LocalizationProvider>
      <LocalizationProvider dateAdapter={AdapterDateFns}>
        <TimePicker
          variant="outlined"
          name="wednesdayValue"
          label="Wednesday"
          type="date"
          value={wednesdayValue}
          onChange={(e) => setWednesdayValue(e)}
          renderInput={(params) => <TextField {...params} />}
        />
      </LocalizationProvider>
      <LocalizationProvider dateAdapter={AdapterDateFns}>
        <TimePicker
          variant="outlined"
          name="thursdayValue"
          label="Thursday"
          type="date"
          value={thursdayValue}
          onChange={(e) => setThursdayValue(e)}
          renderInput={(params) => <TextField {...params} />}
        />
      </LocalizationProvider>
      <LocalizationProvider dateAdapter={AdapterDateFns}>
        <TimePicker
          variant="outlined"
          name="fridayValue"
          label="Friday"
          type="date"
          value={fridayValue}
          onChange={(e) => setFridayValue(e)}
          renderInput={(params) => <TextField {...params} />}
        />
      </LocalizationProvider>
      <></>
      <TextField
        name="phoneNumber"
        id="outlined-basic"
        label="Volunteer Phone Number"
        variant="outlined"
        value={VphoneNumber}
        onChange={(e) => setVPhoneNumber(e.target.value)}
      />
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
