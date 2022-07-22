import React, {useState} from 'react';
import {NavLink} from "react-router-dom";
import {AppBar,Typography, Toolbar,Tabs, Tab,Button} from '@mui/material';

const Header = () => {
    const [value, setValue]= useState({});
  return (
    <div>
        <AppBar position="sticky">
        <Toolbar>
                <NavLink to="/" style={{color:"white"}} >
                <Typography><Tab label="Home"/></Typography>  
                </NavLink>
                <Tabs sx={{ml:"auto"}} textColor="inherit" value={value} indicatorColor="secondary" onChange={(e,val)=>setValue(val)} >
                    <Tab LinkComponent={NavLink} to="/doctors" label="Cutomers"/>
                    <Tab LinkComponent={NavLink} to="/appoitments" label="History"/>
                </Tabs>
            </Toolbar>
        </AppBar>
    </div>
  )
}

export default Header;