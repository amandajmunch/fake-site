import React, { Component } from 'react';

import Header from './Header';
import Ready from './Ready';
import Sample from './Sample';
import FooterNav from './FooterNav';
import Footer from './Footer';
import '../CSS/App.css';

class App extends Component {
  render() {
    return (
      <div className="App">

        <Header />
        <Sample />
        <Ready />
        <FooterNav/>
        <Footer />
      </div>
    );
  }
}

export default App;
