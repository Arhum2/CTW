import React from 'react';
import { TextField, Button } from '@mui/material';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';

class Form extends React.Component {
    
    state={
        volunteerName: '',
        seniorName: '',
        Date: '',
        Time: '',
        phoneNumber: ''
    };

    change = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        });
    };

    onSubmit = e => {
        e.preventDefault();
        console.log(this.state);
        this.setState({
            volunteerName: '',
            seniorName: '',
            Date: '',
            Time: '',
            phoneNumber: ''
        })
    }

    render() {
        return(
            <form align='center' style={{marginTop: 45}}>
             <TextField name='volunteerName' id="outlined-basic" label="Volunteer Name" variant="outlined" value={this.state.volunteerName} onChange={e => this.change(e)} />
             <br/>
             <TextField name='seniorName' id="outlined-basic" label="Senior Name" variant="outlined" value={this.state.seniorName} onChange={e => this.change(e)} />
             <br/>   
             <LocalizationProvider dateAdapter={AdapterDateFns} name='date' id="outlined-basic" label="Date" variant="outlined">
             <DatePicker
                name='Date'
                label="Date"
                value={this.state.Date}
                onChange={e => this.change(e)}
                renderInput={(params) => <TextField {...params} />}
            />   
             </LocalizationProvider>   
             <br/>
             <TextField name='Time' id="outlined-basic" label="Time" variant="outlined" value={this.state.Time} onChange={e => this.change(e)} />
             <br/>   
             <TextField name='phoneNumber' id="outlined-basic" label="Phone Number" variant="outlined" value={this.state.phoneNumber} onChange={e => this.change(e)} />  
             <br/> 
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