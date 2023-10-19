import React, { useEffect, useState } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';
import Header from './Header';


export default function updateEvent() {
    
    function sayUpdate() {
        alert('Update!');
    }   

    return (
        <div>
            <title>Add a New Event</title>
            <form className="">
                <div className="">
                    <div className="">
                        <label htmlFor="Event Name">Event Name</label>
                        <input 
                            className=""
                            type="text"
                            name="name"
                            placeholder="Horrifying Haunted House"
                        />
                    </div>

                    <div className="">
                        <label htmlFor="Event Name">Address</label>
                        <input 
                            className=""
                            type="text"
                            name="Address"
                            placeholder="666 Spooky Ave"
                        />
                    </div> 

                    <div className="">
                        <label htmlFor="Event Name">Event Name</label>
                        <input 
                            className=""
                            type="text"
                            name="Date"
                            placeholder="10/31/2023"
                        />
                    </div>
                    
                </div>
                <button onClick={sayUpdate}>Update</button>;
            </form>
        </div>
    );
}
