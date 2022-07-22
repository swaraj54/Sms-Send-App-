import React,{useEffect,useState} from 'react';
import {useParams,useNavigate,NavLink} from 'react-router-dom';
import axios from 'axios';
import './Client.css';
import { Button} from '@mui/material';

const DoctorBook = () => {
    const history = useNavigate();
    const [ date, setDate] = useState('');
    const [inputs, setInputs] = useState({});
    const [test, setTest] = useState();
    const id = useParams().id;
    var d ;
    useEffect(()=>{
        const fetchHandler = async () => {
            await axios.get(`http://localhost:4500/doctors/${id}`)
            .then((res)=> res.data).then(data => setInputs(data.doctor))
        }
        fetchHandler();
    },[id]);
    
    const { name, speciality,availability,cost,image, message, number } = inputs;

    const sendRequest = async () => {
        // console.log(d);
        await axios.patch(`http://localhost:4500/doctors/${id}`, {
            name:String(name),
            image:String(image),
            message : String(test),
            date : String(date)
        }).then(res=> res.data)
        history("/appoitments")
    } 
    const testHandle = () => {
            d = new Date();
            setDate(d);
            if(!!test.replace(/\D/g,'')){
                alert(`Otp sended to Customer is ${test.replace(/\D/g,'')} for number ${number}`);
            } else {
                alert(`Text Does not contain any Otp & Message is sended to customer,  for number ${number}.`);   
            }
            sendRequest();
    }
    
  return (
    <div className="topp"> 
        <div>
            <div className="cardd">
                <img src={image} />
                <h3>Client Name is - {name}</h3>
                <h3>Clinet Number is - {number}</h3>
            </div>
        </div>
        <div className="card2">
            <div>
            <h1 className='hide'>Send Message</h1>
                    <input type='text' className='inpu' onChange={(e)=>{setTest(e.target.value)}} placeholder='Type your Message here..'/>
                    <Button  onClick={ ()=> testHandle()   }  className='inpu2' variant="contained" style={{marginRight:"20px", marginBottom:"20px"}}>Send Message.</Button>                
            </div>
        </div>
    </div>
  )
}

export default DoctorBook;