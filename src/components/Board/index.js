import React, { Component } from "react";
import Card from "../Card";
import "./style.css";

class Board extends Component {
    
    state = {


    }
    constructor(props) {
        super(props);
        this.state.images = ["16", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12", "13", "14", "15"] ;
        this.state.cardsClick = [];
        this.state.cards = [];
        if (props.shuffleNow) {
            this.shuffleImages()
        }
        
    }
    
   
    componentDidMount() {
        this.shuffleImages()
    }

    shuffleImages = () => {
        this.setState({ cards: [] })
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
            this.props.incrementLoses()
            this.props.setScoreZero()
            this.setState({ cardsClick: [] })     
        } else {
            this.setState({ cardsClick: [...this.state.cardsClick, imageNum] })
                this.props.incrementScore()
            if ((this.state.cardsClick.length + 1)=== this.state.images.length) {
                this.props.incrementWins()    
            }
            
        }
        this.shuffleImages()
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
   

    render() {
        return (
            <Card cards={this.state.cards} handleImgClick={this.handleImgClick}>
            </Card >
        );
    }
}

export default Board;
