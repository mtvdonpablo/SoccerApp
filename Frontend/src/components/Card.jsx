import React from "react";
import './Card.css';
function Card(props) {
    return(
        <ul className="cards">
            <li>
                <div className="card" onClick={props.onCardClick}>
                <img src={props.img} className="card__image" alt="" />
                <div className="card__overlay">
                    <div className="card__header">
                    <svg className="card__arc" xmlns="http://www.w3.org/2000/svg"><path /></svg>                     
                    <div className="card__header-text">
                        <h1 className="card__title">{props.skill}</h1>            
                    </div>
                    </div>
                    <p className="card__description"></p>
                </div>
                </div>      
            </li>
        </ul>
    );
}

export default Card