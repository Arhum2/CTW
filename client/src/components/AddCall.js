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
  // Give dateValue an actual Date as the starting value
  const [dateValue, setDateValue] = useState(Date.now());
  // Give timeValue an actual Time as the starting value
  const [timeValue, setTimeValue] = useState(Date.now());
  const [phoneNumber, setPhoneNumber] = useState("");

  const onSubmit = (e) => {
    console.log(timeValue);
    e.preventDefault();

    onAdd({
      volunteerName,
      seniorName,
      // We have to format the dateValue before POSTing to Flask Backend
      // Also changed the name of the JSON key to match what the backend and frontend
      // expects (Date instead of dateValue)
      Date: format(dateValue, "yyyy/MM/dd"),
      // We also have to format the timeValue before POSTing to Flask Backend
      // Also changed the name of the JSON key to match what the backend and frontend
      // expects (Time instead of timeValue)
      Time: format(timeValue, "hh:mm a"),
      phoneNumber,
    });
    setVolunteerName("");
    setSeniorName("");
    setDateValue("");
    setTimeValue("");
    setPhoneNumber("");
  };

  // Removing both of these functions since they aren't necessary
  // const onDateChange = (e) => {
  //   setDateValue(e);
  // };

  // const onTimeChange = (e) => {
  //   setTimeValue(e);
  //   let dtFormat = new Intl.DateTimeFormat('en-US', {
  //       hour: 'numeric',
  //       minute: 'numeric',
  //   });
  //   setTimeValue(dtFormat.format(timeValue))
  // };

  // console.log(dateValue)

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
      <br />
      <TextField
        name="seniorName"
        id="outlined-basic"
        label="Senior Name"
        variant="outlined"
        value={seniorName}
        onChange={(e) => setSeniorName(e.target.value)}
      />
      <br />
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
          // Shortened the onChange to call setDateValue with anonymous function
          onChange={(e) => setDateValue(e)}
          renderInput={(params) => <TextField {...params} />}
        />
      </LocalizationProvider>
      <br />
      <LocalizationProvider dateAdapter={AdapterDateFns}>
        <TimePicker
          variant="outlined"
          name="timeValue"
          label="Time"
          type="date"
          value={timeValue}
          // Shortened the onChange to call setTimeValue with anonymous function
          onChange={(e) => setTimeValue(e)}
          renderInput={(params) => <TextField {...params} />}
        />
      </LocalizationProvider>
      <br />
      <TextField
        name="phoneNumber"
        id="outlined-basic"
        label="Phone Number"
        variant="outlined"
        value={phoneNumber}
        onChange={(e) => setPhoneNumber(e.target.value)}
      />
      <br />
      <input
        type="submit"
        onSubmit={onSubmit}
        value="Save Call"
        className="btn"
      ></input>
    </form>
  );
};

export default AddCall;

// class Form extends React.Component {

//     state={
//         volunteerName: '',
//         seniorName: '',
//         dateValue: '',
//         timeValue: '',
//         phoneNumber: ''
//     };

//     onChange = (e) => {
//         this.setState({
//             [e.target.name]: e.target.value
//         })
//     };

//     onDateChange = (e) => {
//         console.log(e)
//         this.setState({dateValue: e})
//     }

//     onTimeChange = (e) => {
//         console.log(e)
//         this.setState({timeValue: e})
//     }

//     render() {
//         return(
// <form align='center' style={{marginTop: 45}}>
//  <TextField name='volunteerName' id="outlined-basic" label="Volunteer Name" variant="outlined" value={this.state.volunteerName} onChange={e => this.onChange(e)} />
//  <br/>
//  <TextField name='seniorName' id="outlined-basic" label="Senior Name" variant="outlined" value={this.state.seniorName} onChange={e => this.onChange(e)} />
//  <br/>
//  <LocalizationProvider dateAdapter={AdapterDateFns} name='date' id="outlined-basic" label="Date" variant="outlined">
//  <DatePicker
//     name='dateValue'
//     inputFormat= 'yyyy/MM/dd'
//     label="Date"
//     type="date"
//     mask = '____/__/__'
//     value={this.state.dateValue}
//     onChange={e => this.onDateChange(moment(e).format('YYYY/MM/DD'))}
//     renderInput={(params) => <TextField {...params} />}
// />
//  </LocalizationProvider>
//  <br/>
//  <LocalizationProvider dateAdapter={AdapterDateFns}>
//     <TimePicker
//         name='timeValue'
//         label="Time"
//         type="time"
//         value={this.state.timeValue}
//         onChange={e => this.onTimeChange(moment(e).format('hh:mm'))}
//         renderInput={(params) => <TextField {...params} />}
//     />
// </LocalizationProvider>
// <br/>
//  <TextField name='phoneNumber' id="outlined-basic" label="Phone Number" variant="outlined" value={this.state.phoneNumber} onChange={e => this.onChange(e)} />
//  <br/>
//  <Button variant="contained" onClick={async () => {
//     const response = await fetch('/add_calls', {
//         method: 'POST',
//         mode: 'cors',
//         headers: {
//             'Content-type': 'application/json'
//         },
//         body: JSON.stringify(this.state)
//     })

//     if (response.ok) {
//         this.setState({
//             volunteerName: '',
//             seniorName: '',
//             dateValue: '',
//             timeValue: '',
//             phoneNumber: ''
//         })
//         console.log('response worked')
//     }
//  }}>Send</Button>
// </form>
//         );
//     }
// }

// export default Form
