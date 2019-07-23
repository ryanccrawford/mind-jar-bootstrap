import React from 'react';
//import Col from "../Col";
import Row from "../Row";
//import CardDetail from "./CardDetail";
import "./style.css";

function Card(props) {
    return (
        <Row>
            {props.cards.map((c, i) => (
                (<div className="card shadow-sm ml-2 mr-2 mt-4 mb-4 bg-light col-2 game-tile" key={i}
                    
                >
                    <img src={`./assets/images/illusions/${c}.gif`} alt="" className="card-img" />
                    <div className="card-img-overlay"
                        onClick={props.handleImgClick}
                        data-id={c}
                    >
                    </ div>
                </ div>)
            ))}    
        </ Row>
      )
}

export default Card;