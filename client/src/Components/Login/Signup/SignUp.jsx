import React, {useState} from 'react';
import {useNavigate } from "react-router-dom";
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

export default function FormPropsTextFields() {
    const[loading, setLoading]=useState(null);
    const[success, setSuccess]=useState(null);
    const[user, setUser]=useState(null);
    const[password, setPassword]=useState(null);
    const navigate = useNavigate();

    const signUpHandler = (event) =>{
        event.preventDefault()
        const data={
            user:user,
            password:password
        }
        fetch('http://localhost:3001/signup',{
            method:'post',
            headers:{'Content-Type':'application/json'},
            body:JSON.stringify(data)
        })
        navigate('/productos')
    }
    return (
      <Box
        component="form"
        sx={{
          '& .MuiTextField-root': { m: 1, width: '25ch' },
        }}
        autoComplete="off"
        onSubmit={signUpHandler}
      >
        <span>INGRESE SUS DATOS:</span>
        <div>
          <TextField
            required
            id="outlined-required"
            label="Usuario"
            required
            onChange={(x)=>setUser(x.target.value)}
          />
         
          <TextField
            id="outlined-password-input"
            label="Password"
            type="password"
            autoComplete="current-password"
            required
            onChange={(x)=>setPassword(x.target.value)}
          />
     <button type='submit'>SIGN UP</button>
        </div>
      </Box>
    );
  }