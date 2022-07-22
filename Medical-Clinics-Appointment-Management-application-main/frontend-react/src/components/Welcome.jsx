import React from 'react';
import {NavLink} from "react-router-dom";
import {Button} from '@mui/material';

const Welcome = () => {
  return (
    <div>
        <div className="wc">
            <h1>Welcome to Kisan Networks 🎊</h1>
            <NavLink to="/doctors" style={{color:"white"}} >
            <Button variant="outlined">Click here to Send Messages to Customers.</Button>
            </NavLink><br/> <br/>
            <NavLink to="/appoitments" style={{mt : 2 , color:"white"}} >
            <Button variant="outlined">Click here to Check Sended Messages.</Button>
            </NavLink>
        </div>
    </div>
  )
}

export default Welcome;