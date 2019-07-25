import React from "react";
import Container from "../components/Container";
import Board from "../components/Board";

class Main extends React.Component {

    render(){
        return (
            <Container className="mt-4">
                <Board
                    score={this.props.score}
                    wins={this.props.wins}
                    loses={this.props.loses}
                    highScore={this.props.highScore}
                    incrementScore={this.props.incrementScore}
                    incrementWins={this.props.incrementWins}
                    incrementLoses={this.props.incrementLoses}
                    setScoreZero={this.setScoreZero}
                />
            </Container>
        )
    }
}

export default Main