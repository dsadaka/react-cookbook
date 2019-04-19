import React from 'react';
import Popup from 'react-popup';
import Helmet from 'react-helmet';

// import Todo from './Todo/Todo';
// import logo from '../shared/images/logo.svg';
// import Home from './Home/Home';
// import Timer from './Pomodoro/Timer';
// import Coins from './Coins/Coins'
// import Notes from './Notes/Notes';
// import Animation from './Animation/Animation'
// import Numbers from './Numbers/Numbers'
import Person from './Person/Person';
import Header from '../shared/components/layout/Header';
import Content from '../shared/components/layout/Content';
import Footer from '../shared/components/layout/Footer';

import './App.css';
import './Popup.css';

const App = () => (
  <div className="App">
    <Helmet
      title="Person Information"
      meta={[
        { name: 'title', content: 'Person Information' },
        { name: 'description', content: 'This recipe talks about React Helmet' }
      ]}
    />
    <Header title="Person Information" />

    <Content>
      <Person />
    </Content>

    <Footer />

    <Popup />
  </div>
);


export default App;
