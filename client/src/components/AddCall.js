import { useState } from "react";
import React from 'react';
import { TextField} from '@mui/material';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { TimePicker } from  '@mui/x-date-pickers/TimePicker';
import moment from 'moment';

const AddCall = ({ onAdd }) => {
    const [volunteerName, setVolunteerName] = useState('')
    const [seniorName, setSeniorName] = useState('')
    const [dateValue, setDateValue] = useState('')
    const [timeValue, setTimeValue] = useState('')
    const [phoneNumber, setPhoneNumber] = useState('')

    const onSubmit = (e) => {
        e.preventDefault()

        onAdd({ volunteerName, seniorName, dateValue, timeValue, phoneNumber })
        setVolunteerName('')
        setSeniorName('')
        setDateValue('')
        setTimeValue('')
        setPhoneNumber('')
    }

    const onDateChange = (e) => {
        setDateValue({dateValue: e})
    }

    const onTimeChange = (e) => {
        setTimeValue({timeValue: e})
    }

    console.log(dateValue)
    console.log(timeValue)

    return (
        <form align='center' className='add=form' onSubmit={onSubmit}>
             <TextField name='volunteerName' id="outlined-basic" label="Volunteer Name" variant="outlined" value={volunteerName} onChange={e => setVolunteerName(e.target.value)} />
             <br/>
             <TextField name='seniorName' id="outlined-basic" label="Senior Name" variant="outlined" value={seniorName} onChange={e => setSeniorName(e.target.value)} />
             <br/>   
             <LocalizationProvider dateAdapter={AdapterDateFns} name='dateValue' id="outlined-basic" label="Date" variant="outlined">
             <DatePicker
                name='dateValue'
                inputFormat= 'yyyy/MM/dd'
                label="Date"
                type="date"
                mask = '____/__/__'
                value={dateValue}
                onChange={e => onDateChange(moment(e).format('yyyy/MM/DD'))}
                renderInput={(params) => <TextField {...params} />}
            />   
             </LocalizationProvider>   
             <br/>
             <LocalizationProvider dateAdapter={AdapterDateFns}>
                <TimePicker
                    name='timeValue'
                    label="Time"
                    type="time"
                    value={timeValue}
                    onChange={e => onTimeChange(moment(e).format('hh:mm'))}
                    renderInput={(params) => <TextField {...params} />}
                />
            </LocalizationProvider>
            <br/>
             <TextField name='phoneNumber' id="outlined-basic" label="Phone Number" variant="outlined" value={phoneNumber} onChange={e => setPhoneNumber(e.target.value)} />  
             <br/>
             <input type='submit' value='Save Task' className="btn"></input>   
            </form>
    )



}

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