import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

// import './App.css';
import '../Css/Navbar.css';
import AiProductList from './AiProductList';
import NewProductList from './NewProductList';

class Main extends Component {


  render() {
    const { ProductStore } = this.props;

    return (
      <div>
        <AiProductList 
          ProductStore={ProductStore}
        />
        <NewProductList />
      </div>
    );
  }
}

export default Main;
