import Navbar from "../components/Navbar";
import '../App.css';
import './InputAge.css';
import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { AppContext } from '../AppContext';  // Import the context

function InputAge() {
    const { setSelectedAgeGroup } = useContext(AppContext); // Access the setter
    const navigate = useNavigate();

    const handleAgeGroupClick = (ageGroup) => {
        setSelectedAgeGroup(ageGroup);  // Set selected age group
        navigate('/inputnum');
    };

    return (
        <>
            <div className='survey-container'>
                <h1>Select Age Group</h1>
                <div className="ageBtn-container">
                    <button className="age-btns" onClick={() => handleAgeGroupClick(0)}>6 and under</button>
                    <button className="age-btns" onClick={() => handleAgeGroupClick(1)}>7 to 11</button>
                    <button className="age-btns" onClick={() => handleAgeGroupClick(2)}>12 to 16</button>
                    <button className="age-btns" onClick={() => handleAgeGroupClick(3)}>17 to 21</button>
                    <button className="age-btns" onClick={() => handleAgeGroupClick(4)}>21+</button>
                </div>
            </div>
        </>
    );
}

export default InputAge;
