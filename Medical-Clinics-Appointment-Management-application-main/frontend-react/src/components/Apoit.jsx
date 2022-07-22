import React from 'react';
import {Button} from "@mui/material";
import './Client.css';
import {Link} from 'react-router-dom';


const Apoit = (props) => {
    const {_id, name, speciality,availability,cost,image,date,time ,message,number} = props.doctor;
  return (
    <div className="card">
        <img src={image} />
        <h3>Name - {name}</h3>
        <h3>Number - {number}</h3>
        {(message) ? <h4>Message is - {message}  </h4> : null}
    </div>
  )
}

export default Apoit;