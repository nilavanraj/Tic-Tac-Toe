import logo from './logo.svg';
import React from "react";
import './App.css';
import Computer from "./Computer"
import Human from "./Human"
import { BrowserRouter as Router, Route } from 'react-router-dom';
function App() {
    return (
    < Router >
            <Route exact path="/" component={Computer} />
            <Route path="/human" component={Human} />
        
    </Router >)
}

export default App;
