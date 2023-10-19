import React, { useEffect, useState } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';
import Header from './Header';

export default function NewEvent() {
    
    const { holiday } = useParams();
    const navigate = useNavigate();
    const [ name, setName ] = useState("");
    const [ address, setAddress ] = useState("");
    const [ date, setDate ] = useState(new Date());
    const [ category, setCategory ] = useState("");
    const [ rating, setRating ] = useState(0);
    const [ errors, setErrors ] = useState([]);
    


    const submitHandler = e => {
        e.preventDefault();
        axios
            .post("http://localhost:8000/eventcalendar", { name, address, date, category, rating })
            .then( res => {
                console.log(res);
                navigate(`/eventtracker/${holiday}/eventlist`)
            })
            .catch( err => {
                // const errorResponse = err.response.data.errors;
                // console.log(errorResponse);
                console.log(err);
                // setErrors(errorResponse);
            });
    }
    
    return (
        <div className='page'>
            <Header holiday={holiday}/>
            <div className='form-container'>
                <title className='form-title'>Add a New Event</title>
                <form className="" onSubmit={submitHandler}>
                    <div className="">
                        <div className="">
                            <label>Event Name</label>
                            <input type="text" name='name' value={name} onChange={ e => setName(e.target.value) } />
                        </div>

                        <div className="">
                            <label>Address</label>
                            <input type="text" name='address' value={address} onChange={ e => setAddress(e.target.value) } />
                        </div> 

                        <div className="">
                            <label>Date</label>
                            <input type="date" name='date' value={date} onChange={ e => setDate(e.target.value) } />
                        </div>

                        <div className="">
                            <label>Category</label>
                            <input type="text" name='category' value={category} onChange={ e => setCategory(e.target.value) } />
                        </div>

                        <div className="">
                            <label>Rating</label>
                            <input type="number" name='rating' value={rating} onChange={ e => setRating(e.target.value) } />
                        </div>

                    </div>
                    <button className='submit-btn' type='submit'>Add</button>
                </form>
            </div>
            
        </div>
    )
}
