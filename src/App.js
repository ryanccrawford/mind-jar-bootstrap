import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Container from './components/Container';
import Main from "./pages/Main";



function App() {
    return (
        <Router>
            <div>
                <Container>
                    <Route path="/" component={Main} />
                </ Container>
            </ div>
        </ Router>
  );
}

export default App;
