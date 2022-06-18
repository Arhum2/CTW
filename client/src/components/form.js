import React, { Component } from 'react'
import { TextField, Button } from '@mui/material'

class Form extends React.Component {
    state={
        volunteerName: '',
        seniorName: '',
        Date: '',
        Time: '',
        phoneNumber: ''
    };

    change = e => {
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
            <form>
             <TextField name='volunteerName' id="outlined-basic" label="Volunteer Name" variant="outlined" value={this.state.volunteerName} onChange={e => this.change(e)} />
             <br/>
             <TextField name='seniorName' id="outlined-basic" label="Senior Name" variant="outlined" value={this.state.seniorName} onChange={e => this.change(e)} />
             <br/>   
             <TextField name='Date' id="outlined-basic" label="Date" variant="outlined" value={this.state.Date} onChange={e => this.change(e)} />   
             <br/>
             <TextField name='Time' id="outlined-basic" label="Time" variant="outlined" value={this.state.Time} onChange={e => this.change(e)} />
             <br/>   
             <TextField name='phoneNumber' id="outlined-basic" label="Phone Number" variant="outlined" value={this.state.phoneNumber} onChange={e => this.change(e)} />  
             <br/> 
             <Button variant="contained" onClick={e => this.onSubmit(e)} >Send</Button>            
            </form>
        );
    }
}

export default Form