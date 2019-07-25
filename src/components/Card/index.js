import React from 'react';
import Row from "../Row";
import Container from "../Container";
import "./style.css";

function Card(props) {
    return (
        <Container>
            <Row>
            {props.cards.map((c, i) => (
                (<button type="button" className="btn btn-light shadow bg-white rounded ml-2 mr-2 mt-4 mb-4 col-2 game-tile" key={i}
                    onClick={props.handleImgClick}
                    data-id={c}
                >
                    <img src={`./assets/images/illusions/${c}.gif`} alt="" className="card-img" />
                   
                </ button>
                )
            )
            )
            }    
            </ Row>
        </Container>
      )
}

export default Card;