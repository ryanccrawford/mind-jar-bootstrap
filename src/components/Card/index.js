import React from 'react';
import Row from "../Row";
import Container from "../Container";
import Loader from 'react-loader-spinner'
import Img from 'react-image'
import VisibilitySensor from 'react-visibility-sensor'
import "./style.css";

function Card(props) {
    const myLoader = () => {
       return ( <Loader
            type="Puff"
            color="#00BFFF"
            height="100"
            width="100">
        </Loader>
      )
    }
    return (
        <Container>
            <Row>
                {props.cards.map((c, i) => (
                    (
                        <div className="col-4 mt-2 mb-1 colg"
                            key={c}
                        >
                            <VisibilitySensor>
                            <Img
                                src={`./assets/images/illusions/${c}.gif`}
                                    loader={myLoader}
                                className="button shadow bg-white rounded game-tile"
                                onClick={props.handleImgClick}
                                data-id={c}
                                />
                            </VisibilitySensor>
                            
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