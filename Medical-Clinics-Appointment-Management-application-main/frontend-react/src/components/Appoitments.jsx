import React, { useEffect,useState } from 'react';
import axios from 'axios';
import Apoit from "./Apoit";
import './Client.css';


const URL = "http://localhost:4500/doctors";

const fetchHandler = async () => {
  return await axios.get(URL).then((res)=>res.data)
}

const Doctors = () => {
    const [doctors, setDoctor] = useState();
    useEffect(()=>{
      fetchHandler().then((data)=> setDoctor(data.doctor))
    },[]);
    return (
      <div>
        <div className="ul">
        {doctors && doctors.map((doctor, i)=>(
          (doctor.message) ?
            <div className="li" key={i}>
              <Apoit doctor={doctor} key={i}/>
            </div>
           : null
        ))}
        </div>
      </div>
    )
}

export default Doctors;