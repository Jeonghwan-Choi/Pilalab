import React, { Component } from 'react';
import '../Css/AiProductList.css';
import ProductItem from  './ProductItem';

class AiProductList extends Component {
  
  render() {
    return (
        <div className='aiProductList'>
            <div className='title'>AI 추천 리스트</div>

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

export default AiProductList;