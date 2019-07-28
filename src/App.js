import React, { Component } from 'react';
import NavBar from "./components/NavBar"
import Main from "./pages/Main";
import ReactModal from 'react-modal';


ReactModal.setAppElement('#root')


class App extends Component {

    constructor() {
        super();
        this.openModal = this.openModal.bind(this);
        this.afterOpenModal = this.afterOpenModal.bind(this);
        this.closeModal = this.closeModal.bind(this);
    }

    state = {
        score: 0,
        highScore: 0,
        wins: 0,
        loses: 0,
        modalIsOpen: false,
        title: "",
        subtitle: "",
        message: "",
        shuffleNow: false
    };

    incrementScore = () => {
        const ns = this.state.score + 1
        this.setState({ score: ns })
        this.setHighScore(ns)
    }

    incrementWins = () => {
        this.setState({ wins: this.state.wins + 1 })
        this.setTitle("You Won!")
        this.setSubTitle("Way to go!")
        this.setMessage("Great Job. You are doing great!")
        this.openModal()
        this.setState({ shuffleNow: true })
    }

    incrementLoses = () => {
        this.setState({ loses: this.state.loses + 1 })
        this.setTitle("Oh No!")
        this.setSubTitle("Try to focus")
        this.setMessage("Looks like you picked that one all ready!")
        this.openModal()
    }

    setHighScore = (score) => {
        if (this.state.highScore < score) {
            this.setState({ highScore: score})
        }

    }

    setScoreZero = () => {
        this.setState({ score: 0 })
    }
    
    openModal() {
        this.setState({ modalIsOpen: true });
    }

    setTitle = (title) => {
        this.setState({title: title})
    }

    setSubTitle = (subTitle) => {
        this.setState({subtitle: subTitle})
    }

    setMessage = (message) => {
        this.setState({message: message})
    }

    afterOpenModal() {
        // references are now sync'd and can be accessed.
        this.subtitle.style.color = '#f00';
     
    }

    closeModal() {
        this.setState({ modalIsOpen: false });
    }

    render() {

        return (

            <div>
                <NavBar
                    dark={true}
                    name="Mind Jar"
                    score={this.state.score}
                    wins={this.state.wins}
                    loses={this.state.loses}
                    highScore={this.state.highScore}
                />
              
               <Main
                    score={this.state.score}
                    wins={this.state.wins}
                    loses={this.state.loses}
                    highScore={this.state.highScore}
                    incrementScore={this.incrementScore}
                    incrementWins={this.incrementWins}
                    incrementLoses={this.incrementLoses}
                    setScoreZero={this.setScoreZero}
                    shuffleNow={this.state.shuffleNow}
               

                   
                />
                <ReactModal
                    isOpen={this.state.modalIsOpen}
                    onAfterOpen={this.afterOpenModal}
                    onRequestClose={this.closeModal}
                    contentLabel={this.state.title}
                    style={{
                        content: {
                            backgroundColor: 'rgb(5,5,5)',
                            top: '50%',
                            left: '50%',
                            right: 'auto',
                            bottom: 'auto',
                            marginRight: '-50%',
                            transform: 'translate(-50%, -50%)',
                            boxShadow: '1px 1px 20px black'
                        }
                    }}
             
                            >
             
                    <h2 ref={subtitle => this.subtitle = subtitle}>{this.state.subtitle}</h2>
       
                    <div>
                        <p>{this.state.message}</p>
                        <button onClick={this.closeModal}>OK</button>
                    </div>

                </ReactModal>

                <nav class="navbar fixed-bottom navbar-light bg-light">
                    <a class="text" href="/">Mind Jar</a>
                </nav>
                
            </ div>

        )
    }
}

export default App;
