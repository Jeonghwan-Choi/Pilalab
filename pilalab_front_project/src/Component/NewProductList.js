import React, { Component } from 'react';
import '../Css/NewProductList.css';
import Logo from '../logo.svg';
import ProductItem from  './ProductItem';


class NewProductList extends Component {
  render() {
    return (
        <div className='newProductList'>
            <div className='title'>신규공고</div>

            <br/>
            <div className='itemList'>
                <ProductItem/>
                <ProductItem/>
                <ProductItem/>
                <ProductItem/>
            </div>
        </div>
    );
  }
}

export default NewProductList;