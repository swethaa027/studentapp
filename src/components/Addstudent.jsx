import { Button, TextField, Typography,data } from '@mui/material'
import React ,{useState} from 'react'
import axios from 'axios';


const Addstudent = () => {
    var[data,setData]=useState();
    const inputHandler =(e)=>{
        setData({...data,[e.target.name]:e.target.value})
            console.log(data);
    } 
    const submit=()=>{
      axios.post("http://localhost:4000/students",{
        name:data.name,
        age:data.age,
        department:data.department
      })
      .then(()=>{
        alert("new entry created successfully");
      })
      .catch(()=>{
        alert("error saving data");
      });
    }
  return (
    <div>
        <Typography>
            <br />
            <h1>Student Details</h1>
            <br />
            <TextField variant="filled" label="name"  name="name" onChange={inputHandler} ></TextField>
            <br /><br />
            <TextField variant="filled" label="age"  name="age" onChange={inputHandler} ></TextField>
            <br /><br />
            <TextField variant='filled' label="department" name="department" onChange={inputHandler}></TextField>
            <br /><br />
            <Button variant='contained' onClick={submit}>Submit</Button>
        </Typography>
    </div>
  )
}

export default Addstudent