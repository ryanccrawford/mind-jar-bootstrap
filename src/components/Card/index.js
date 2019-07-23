import React from 'react';
//import Col from "../Col";
import Row from "../Row";
//import CardDetail from "./CardDetail";


function Card(props) {
    return (
      <Row>
            {props.cards.map((card, index) => (
                
                <div className="card shadow-sm ml-2 mr-2 mt-2 mb-2 bg-light col-2" key={index}>
                    <img src={`./assets/images/illusions/${card}.gif`} class="card-img" />
                    <div class="card-img-overlay">
                        <p className="card-text"></ p>
                    </ div>
                </ div>
                
            
            ))}    
        </ Row>
      )
}

export default Card;