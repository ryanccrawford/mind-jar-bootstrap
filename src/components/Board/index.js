import React, { Component } from "react";
import Card from "../Card";
import "./style.css";

class Board extends Component {
    

    constructor(props) {
        super(props);
        this.state.images = ["13", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12", "14", "15", "16"] ;
        this.state.cardsClick = [] ;
        this.state.isShuffled = false ;
        this.state.cards = [];
        
    }
    state = {


    }
   
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
        if (this.checkIfAlreadyClicked(imageNum)) {
            this.shuffleImages()
            //TODO: Loose Round
        } else {
            this.setState({ cardsClick: [...this.state.cardsClick, imageNum] })
            this.shuffleImages()
            //TODO: Add Point To Score
        }
    }
    checkIfAlreadyClicked = (id) => {
        let currentPicked = this.state.cardsClick
        if (typeof (currentPicked) === 'undefined' || currentPicked.length < 1) {
            return false
        } else {
            let match = currentPicked.find((value, index) => (id === value ? true : false))
            if (typeof (match) === 'undefined') {
                return false
            }
        }

        return true
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
