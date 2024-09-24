import React from 'react';
import '../App.css';
import './Home.css';
import { useNavigate } from 'react-router-dom';



function Home(){
    const navigate = useNavigate();

    const handleClick = () => {
        navigate('/inputage');
    };
    return(
        <div className='landingPage-container'>
            <video src='/video/kickball.mp4' autoPlay loop muted />
            <h1>ELEVATE YOUR GAME</h1>
            <p>One drill at a time</p>
            <div className='landingPage-btns'>
                <button onClick={handleClick} className='btn' buttonStyle='btn--outline' buttonSize='btn--large'>
                    Start Your Training
                </button>
            </div>
        </div>
    );
}
export default Home;
