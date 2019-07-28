import React from 'react';
import Row from "../Row";
import Container from "../Container";
import Loader from 'react-loader-spinner'
import Img from 'react-image'

import "./style.css";

function Card(props) {
    return (
        <Container>
            <Row>
                {props.cards.map((c, i) => (
                    (
                        <div className="col-4 mt-2 mb-1 colg"
                            key={c}
                        >
                            <Img
                                src={`./assets/images/illusions/${c}.gif`}
                                loader={Loader}
                                className="button shadow bg-white rounded game-tile"
                                onClick={props.handleImgClick}
                                data-id={c}
                            />
                            
                     </div>
                )
            )
            )
            }    
            </ Row>
        </Container>
      )
}

export default Card;