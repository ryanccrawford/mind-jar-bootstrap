import React from "react";
import Container from "../components/Container";
import Board from "../components/Board";

function Main(props){
        return (
            <Container className="mt-4">
                <Board
                    score={props.score}
                    wins={props.wins}
                    loses={props.loses}
                    highScore={props.highScore}
                    incrementScore={props.incrementScore}
                    incrementWins={props.incrementWins}
                    incrementLoses={props.incrementLoses}
                    setScoreZero={props.setScoreZero}
                    shuffleNow={props.shuffleNow}
                />
            </Container>
        )
    
}

export default Main