import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import NavBar from "./components/NavBar"
import Container from './components/Container';
import Main from "./pages/Main";



function App() {
    return (
        <Router>
            <div>
                <NavBar>
                    <Container>
                        <Route path="/" component={Main} />
                    </ Container>
                </ NavBar>
            </ div>
        </ Router>
  );
}

export default App;
