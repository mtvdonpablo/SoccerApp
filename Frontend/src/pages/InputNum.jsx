import Navbar from "../components/Navbar";
import '../App.css';
import './InputNum.css';
import React, { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { AppContext } from '../AppContext';  // Import the context

function InputNum() {
    const [playerCount, setPlayerCount] = useState("");
    const { setPlayers } = useContext(AppContext);  // Access the setter
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        setPlayers(playerCount);  // Set the players count
        navigate('/pickskill');
    };

    return (
        <>
            <form onSubmit={handleSubmit}>
                <label> <h1>Number of Players</h1></label>
                <input className="num-input" inputMode="numeric" min={"1"} value={playerCount} onChange={(e) => setPlayerCount(e.target.value)} />
                <input className="submit" type="submit" value="Submit" />
            </form>
        </>
    );
}

export default InputNum;
