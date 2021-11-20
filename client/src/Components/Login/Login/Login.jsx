import React, {useState} from 'react';
import {useNavigate } from "react-router-dom";
import { useLogin } from '../../../Contexts/LoginContext';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
const Login = () => {
    const[user, setUser]=useState(null);
    const[password, setPassword]=useState(null);
    const navigate = useNavigate();
    const login = useLogin();

    const loginHandler = (event) =>{
        event.preventDefault()
        const data={
            user:user,
            password:password
        }
        fetch('http://localhost:3001/login',{
            method:'post',
            headers:{'Content-Type':'application/json'},
            body:JSON.stringify(data)
        })
        .then(res=>{let result = res.json()
        return result})
        .then(res=>{
            if(res){
                localStorage.setItem('userSession', JSON.stringify(res))
                console.log(res)
                login.setSession(res)
            }else{
                console.log('password incorrect')
            }
          }).
          then(res=>navigate('/productos'))
          console.log(login.session) //ACÁ YA NO APARECE LA SESIÓN
    }
    return (
        <Box
          component="form"
          sx={{
            '& .MuiTextField-root': { m: 1, width: '25ch' },
          }}
          autoComplete="off"
          onSubmit={loginHandler}
        >
          <span>INGRESE SUS DATOS PARA LOGUEAR:</span>
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
       <button type='submit'>LOGIN</button>
          </div>
        </Box>
      );
}

export default Login
