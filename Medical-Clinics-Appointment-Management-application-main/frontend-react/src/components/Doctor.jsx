import React from 'react';
import {Button} from "@mui/material";
import './Client.css';
import {Link} from 'react-router-dom';


const Doctor = (props) => {
    const {_id, name, speciality,availability,cost,image, number } = props.doctor;
  return (
    <div className="card">
        <img src={image} />
        <h3>{name}</h3>
        <Button doctor={props} variant="contained" sx={{mt:0, height:"30px"}} LinkComponent={Link} to={`./${_id}`} >Send Message</Button>

    </div>
  )
}

export default Doctor;