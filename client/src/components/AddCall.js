import { useState } from "react";
import React from "react";
import { TextField } from "@mui/material";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import FormControl from '@mui/material/FormControl';
import { TimePicker } from "@mui/x-date-pickers/TimePicker";
import { format } from "date-fns";
import InputLabel from '@mui/material/InputLabel';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import { Box } from "@mui/system";


const AddCall = ({ onAdd }) => {
  const [volunteerName, setVolunteerName] = useState("");
  const [volunteerPhoneNumber, setVolunteerPhoneNumber] = useState("")
  const [seniorName, setSeniorName] = useState("");
  const [seniorPhoneNumber, setSeniorPhoneNumber] = useState("");
  const [timeValue, setTimeValue] = useState(Date.now());
  const [day, setDay] = useState();
  const [phoneNumber, setPhoneNumber] = useState("");


  const onSubmit = (e) => {
    e.preventDefault();
    var x = parseInt(phoneNumber)
    console.log(day)
    
    if(isNaN(x)) {
      alert("Please add a Phone Number")
      console.log("NAN")
    }
    
    else {

      onAdd({
        volunteerName,
        volunteerPhoneNumber,
        seniorName,
        seniorPhoneNumber,
        Time: format(timeValue, "hh:mm a"),
        day,
        phoneNumber,
      });
      setVolunteerName("");
      setVolunteerPhoneNumber('');
      setSeniorName("");
      setSeniorPhoneNumber("");
      setTimeValue("");
      setDay("");
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
        name="volunteerPhoneNumber"
        id="outlined-basic"
        label="Volunteer Phone Number"
        variant="outlined"
        value={volunteerPhoneNumber}
        onChange={(e) => setVolunteerPhoneNumber(e.target.value)}
      />

      <></>
      <TextField
        name="SeniorName"
        id="outlined-basic"
        label="Senior Name"
        variant="outlined"
        value={seniorName}
        onChange={(e) => setSeniorName(e.target.value)}
      />

      <></>
      <TextField
        name="seniorPhoneNumber"
        id="outlined-basic"
        label="Senior Phone Number"
        variant="outlined"
        value={seniorPhoneNumber}
        onChange={(e) => setSeniorPhoneNumber(e.target.value)}
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
      <FormControl sx={{ m: 1, minWidth: 80 }}>
        <InputLabel>Day</InputLabel>
        <Select
          defaultValue=""
          label="Day"
          onChange={(e) => setDay(e.target.value)}
        >
          <MenuItem value='Monday'>Monday</MenuItem>
          <MenuItem value='Tuesday'>Tuesday</MenuItem>
          <MenuItem value='Wednesday'>Wednesday</MenuItem>
          <MenuItem value='Thursday'>Thursday</MenuItem>
          <MenuItem value='Friday'>Friday</MenuItem>
        </Select>
      </FormControl>


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