import Navbar from "../components/Navbar";
import '../App.css';
import './PickSkill.css';
import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { AppContext } from '../AppContext';  // Import the context
import Card from '../components/Card';

function PickSkill(){
    const { setSelectedSkill } = useContext(AppContext);  // Access the setter
    const navigate = useNavigate();

    const handleCardClick = (value) => {
        setSelectedSkill(value);  // Set selected skill
        navigate('/displaydrills');
    };
    return(
        <>
        <div className="skillContainer">
            <div className="cards">
            <Card 
                img="/imgs/shooting.jpeg"
                skill = "Shooting"
                onCardClick={() => handleCardClick("shooting")}  
            />
            <Card 
                img= "/imgs/zidane-first-touch.jpg"
                skill = "First Touch"
                onCardClick={() => handleCardClick("first touch")}  

            />
            <Card 
                img= "/imgs/shortpassing.jpeg"
                skill = "Short Passing"
                onCardClick={() => handleCardClick("short passing")}  

            />
            <Card 
                img= "/imgs/dribble.jpeg"
                skill = "Dribbling"
                onCardClick={() => handleCardClick("dribbling")}  

            />
            <Card 
                img= "/imgs/conditioning.jpeg"
                skill = "Conditioning"
                onCardClick={() => handleCardClick("conditioning")}  
            />
            </div>
        </div>
        </>
    )
}

export default PickSkill