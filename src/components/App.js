import React, { Component } from 'react';
import Todo from './Todo/Todo';
// import logo from '../shared/images/logo.svg';
// import Home from './Home/Home';

import Header from '../shared/components/layout/Header';
import Content from '../shared/components/layout/Content';
import Footer from '../shared/components/layout/Footer';

import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header title={"Welcome to Codejobs"} />

        <Content>
          <Todo />
        </Content>
        <Footer />
      </div>
    );
  }
}

export default App;
