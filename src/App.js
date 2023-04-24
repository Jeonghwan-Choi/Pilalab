import logo from './logo.svg';
import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

// import './App.css';
import './Css/Navbar.css';
import Navbar from '../src/Component/Navbar';
import Join from '../src/Component/Join';
import AiProductList from '../src/Component/AiProductList';
import NewProductList from '../src/Component/NewProductList';
import KakaoButton from '../src/Component/KakaoButton';
import Main from '../src/Component/Main'
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
