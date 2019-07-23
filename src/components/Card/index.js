import React from 'react';
//import Col from "../Col";
import Row from "../Row";
//import CardDetail from "./CardDetail";
import "./style.css";

function Card(props) {
    return (
        <Row>
            {props.cards.map((c, i) => (
                (<div className="card shadow-sm ml-2 mr-2 mt-2 mb-2 bg-light col-2" key={i}
                    onClick={props.handleImgClick}
                    data-id={c}
                >
                    <img src={`./assets/images/illusions/${c}.gif`} alt="" class="card-img" />
                    <div className="card-img-overlay">
                        <p className="card-text"></ p>
                    </ div>
                </ div>)
            ))}    
        </ Row>
      )
}

export default Card;