import React, { Component } from "react";
import Card from "../Card";
import "./style.css";

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
        let id = event.target.getAttribute("data-id")
        if (id) {
            this.addClickedImg(id)
            
        }
     
    };
    addClickedImg(imageNum) {
        if (this.checkIfAlreadyClicked(id)) {

        } else {
            this.setState({ cardsClick: [...this.state.cardsClick, imageNum] })
            this.setState({ })
        }
    }
    checkIfAlreadyClicked = (id) => {
        if(typeof(this.state.cards.find(id)))
    }
    onAddItem = () => {
        this.setState(state => {
            const list = [...state.list, state.value];

            return {
                list,
                value: '',
            };
        });
    };

    render() {
        return (
            <Card cards={this.state.cards} handleImgClick={this.handleImgClick}>
            </Card >
        );
    }
}

export default Board;
