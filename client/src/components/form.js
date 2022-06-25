import React from 'react';
import { TextField, Button } from '@mui/material';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { TimePicker } from  '@mui/x-date-pickers/TimePicker';
import moment from 'moment';

class Form extends React.Component {
    
    state={
        volunteerName: '',
        seniorName: '',
        dateValue: '',
        timeValue: '',
        phoneNumber: ''
    };

    onChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    };

    onDateChange = (e) => {
        console.log(e)
        this.setState({dateValue: e})
    }

    onTimeChange = (e) => {
        console.log(e)
        this.setState({timeValue: e})
    }

    onSubmit = e => {
        e.preventDefault();
        console.log(this.state);
        this.setState({
            volunteerName: '',
            seniorName: '',
            dateValue: '',
            timeValue: '',
            phoneNumber: ''
        })
    }

    render() {
        return(
            <form align='center' style={{marginTop: 45}}>
             <TextField name='volunteerName' id="outlined-basic" label="Volunteer Name" variant="outlined" value={this.state.volunteerName} onChange={e => this.onChange(e)} />
             <br/>
             <TextField name='seniorName' id="outlined-basic" label="Senior Name" variant="outlined" value={this.state.seniorName} onChange={e => this.onChange(e)} />
             <br/>   
             <LocalizationProvider dateAdapter={AdapterDateFns} name='date' id="outlined-basic" label="Date" variant="outlined">
             <DatePicker
                name='dateValue'
                inputFormat= 'yyyy/MM/dd'
                label="Date"
                type="date"
                mask = '____/__/__'
                value={this.state.dateValue}
                onChange={e => this.onDateChange(moment(e).format('YYYY/MM/DD'))}
                renderInput={(params) => <TextField {...params} />}
            />   
             </LocalizationProvider>   
             <br/>
             <LocalizationProvider dateAdapter={AdapterDateFns}>
                <TimePicker
                    name='timeValue'
                    label="Time"
                    type="time"
                    value={this.state.timeValue}
                    onChange={e => this.onTimeChange(moment(e).format('hh:mm'))}
                    renderInput={(params) => <TextField {...params} />}
                />
            </LocalizationProvider>
            <br/>
             <TextField name='phoneNumber' id="outlined-basic" label="Phone Number" variant="outlined" value={this.state.phoneNumber} onChange={e => this.onChange(e)} />  
             <br/>
             {/* <Button variant="contained" onClick={e => this.onSubmit(e)}>Send</Button> */}
             <Button variant="contained" onClick={async () => {
                const response = await fetch('/add_calls', {
                    method: 'POST',
                    mode: 'cors',
                    headers: {
                        'Content-type': 'application/json'
                    },
                    body: JSON.stringify(this.state)
                })

                if (response.ok) {
                    console.log('response worked')
                }
             }}>Send</Button>           
            </form>
        );
    }
}

export default Form