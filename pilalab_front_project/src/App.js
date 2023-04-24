import logo from './logo.svg';
import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

// import './App.css';
import './Css/Navbar.css';
import Navbar from './Component/Navbar';
import Join from './Component/Join';
import AiProductList from './Component/AiProductList';
import NewProductList from './Component/NewProductList';
import KakaoButton from './Component/KakaoButton';
import Main from './Component/Main'
class App extends Component {
 

  render() {
    return (
      <div>
        {/* <BrowserRouter>
          <Route exact path="/" component={AiProductList} />
          <Route path="/new" component={NewProductList} />
        </BrowserRouter> */}
        <Navbar />
        <Main/>
      </div>
    );
  }
}

export default App;
