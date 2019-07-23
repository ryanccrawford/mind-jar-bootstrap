import React, { Component } from "react";
import Container from "../Container";
import Row from "../Row";
import Card from "../Card";

class Board extends Component {
    state = {
        images: ["13","2","3","4","5","6","7","8","9","10","11","12","14","15","16"],
        cardsClick: [],
        isShuffled: false,
        cards: []
    };
    componentDidMount() {
        this.shuffleImages()
    }

    shuffleImages = () => {
        this.setState({ isShuffled : true });
        let array = this.state.images
       for (let i = array.length - 1; i > 0; i--) {
           let j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
        }
        this.setState({ cards: array })
    }

   handleImgClick = event => {
     
    };


    render() {
        return (
                    <Card cards={this.state.cards}>
                      </Card >
        );
    }
}

export default Board;
