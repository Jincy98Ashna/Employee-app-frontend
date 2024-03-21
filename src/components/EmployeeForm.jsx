import React, { useState } from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import './EmployeeForm.css';

// Define custom teal color


const EmployeeForm = () => {
  const [form,setForm] = useState({
    name:'',
    designation:'',
    location:'',
    salary:''
  })

  function capvalue(){
    console.log(form);
  }
  return (
    
    <div className='text-box'>
      <br /><br />
      <Typography variant="h5" gutterBottom>
    Employee Data Form
  </Typography>
      <br />
       <TextField 
       id="standard-basic"
        label="NAME"
       variant="standard"
       value={form.name} 
       onChange={(e)=>{
        setForm({...form,name:e.target.value})
       }}/>
       <br /><br />
       <TextField 
       id="standard-basic"
        label="DESIGNATION" 
        variant="standard" 
        value={form.designation}
        onChange={(e)=>{
          setForm({...form,designation:e.target.value})
         }}/>
       <br /><br />
       <TextField
        id="standard-basic"
         label="LOCATION"
          variant="standard" 
          value={form.location}
          onChange={(e)=>{
            setForm({...form,location:e.target.value})
           }}/>
       <br /><br />
       <TextField
        id="standard-basic"
         label="SALARY" 
         variant="standard"
         value={form.salary} 
         onChange={(e)=>{
          setForm({...form,salary:e.target.value})
         }}/>
       <br /><br />
       <Button variant="outlined" style={{ color: 'white', backgroundColor: 'teal' }}>Submit</Button>
       <br /><br />
    </div>
  )
}

export default EmployeeForm