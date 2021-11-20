import React, {useEffect} from 'react'
import { useLogin } from '../../Contexts/LoginContext'
import { NavLink, useLocation} from 'react-router-dom';

const NavBar = () => {
    const login = useLogin();
    const location = useLocation()

    const handleLogOut = () =>{
        fetch('http://localhost:3001/logout',{
            method:'get',
            headers:{'Content-Type':'application/json'}
        })
        .then(res=>res.json())
        .then(res=>console.log(res))
        login.setSession(null)
        localStorage.removeItem('userSession');
    }
    useEffect(()=>{

    },[login.session])

    return (
    <header>
        <h1 className='title'>Not sure what's this e-commerce about</h1>
        {login.session !== null?
        <>
        <span>Welcome {login.session.userSession}</span>
        <button onClick={handleLogOut}>LOG OUT</button>
        </>
        :<>
            {location.pathname.includes('login') ? 
            null 
            : 
            <NavLink to='/login'><button>LOGIN</button></NavLink>}
            
            {location.pathname.includes('signup') ?
             null 
             : 
             <NavLink to='/signup'><button>SIGN UP</button></NavLink>}
        </>
        }
    </header>
    )
}

export default NavBar
