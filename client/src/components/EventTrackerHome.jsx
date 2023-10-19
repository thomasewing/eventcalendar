import React, { useEffect, useState } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';

const EventTrackerHome = (props) => {

    const [holiday, setHoliday] = useState(''); 
    const navigate = useNavigate(); 

    const handleHolidayChange = (event) => {
        setHoliday(event.target.value);
    };

    const handleContinue = () => {
        if (holiday) {
        navigate(`/eventtracker/${holiday}`);
        }
        console.log(holiday)
    };

return (
    <div className='home-page-container'>
        <div className='home-page-content'>
            <h1 className='home-page-title'>Holiday Event Tracker</h1>
            <form>
                <label className='holiday-select' htmlFor="holiday">Please select a holiday:</label>
                <select className='select' name="holiday" id="holiday" onChange={handleHolidayChange}>
                    <option value="">Select a holiday</option>
                    <option value="Christmas">Christmas</option>
                    <option value="Halloween">Halloween</option>
                    <option value="Thanksgiving">Thanksgiving</option>
                    <option value="Valentine's Day">Valentine's Day</option>
                    <option value="Fourth of July">Fourth of July</option>
                </select>
                <br />
                <button className='home-page-btn btn-animation' type="button" onClick={handleContinue} >
                    <span>Continue</span>
                </button>
            </form>
        </div>
    </div>
);
};

export default EventTrackerHome