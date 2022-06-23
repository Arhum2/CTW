import React from 'react';
import { TextField, Button } from '@mui/material';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';

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
        this.setState({dateValue: e})
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
                label="Date"
                type="date"
                value={this.state.dateValue}
                onChange={e => this.onDateChange(e)}
                renderInput={(params) => <TextField {...params} />}
            />   
             </LocalizationProvider>   
             <br/>
             <TextField name='timeValue' id="outlined-basic" label="Time" variant="outlined" value={this.state.Time} onChange={e => this.onChange(e)} />
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
