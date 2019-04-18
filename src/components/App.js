import React, { Component } from 'react';
import Popup from react-popup;

// import Todo from './Todo/Todo';
// import logo from '../shared/images/logo.svg';
// import Home from './Home/Home';
// import Timer from './Pomodoro/Timer';
// import Coins from './Coins/Coins'
// import Notes from './Notes/Notes';
// import Animation from './Animation/Animation'
// import Numbers from './Numbers/Numbers'
import Person from './Person/Person'

// This is our fake data...
import { notes1, notes2 } from './Notes/data';

import Header from '../shared/components/layout/Header';
import Content from '../shared/components/layout/Content';
import Footer from '../shared/components/layout/Footer';

import './App.css';
import './Popup.css';

class App extends Component {
    constructor() {
        super();

        // The first time we load the notes1
        this.state = {
            notes: notes1
        };
    }

    componentDidMount() {
        // After 10 seconds we concatenate our data with notes2
        setTimeout(() => {
            this.setState({
                notes: [...this.state.notes, ...notes2]
            });
        }, 10000);
    }

    render() {
        return (
            <div className="App">
                <Header title="Personal Information" />

                <Content>
                    <Person />
                </Content>

                <Footer />

                <Popup />
            </div>
        );
    }
}


export default App;
