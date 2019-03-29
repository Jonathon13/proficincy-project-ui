import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { BrowserRouter as Router} from "react-router-dom";
import Pages from './pages';
import Nav from './config/Nav';

const App = () => (
    <Router>
        <h1>Welcome!</h1>
        <Nav/>
        <Pages/>
    </Router>
)

ReactDOM.render(<App />, document.getElementById('root'));





