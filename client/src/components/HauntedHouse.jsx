import React, { useEffect, useState } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';

function About(){
    
    function sayEdit() {
        alert('EDIT!')
    }
    <button onClick={sayEdit}>Edit</button>;

    function sayDelete() {
        alert('DELETE!')
    }
    <button onClick={sayDelete}>Delete</button>;
    
    return(
        <div className="about">
            <div className="aboutTop" style={{ backgroundColor: "#AA0000" }} >
                <h1>Horrifying Spooky Haunted House</h1>
                <p>October 31st, 2023</p>
                <p>666 Spooky Ave</p>
                <p>Scare Level</p>
            </div>
        </div>
    )
}

