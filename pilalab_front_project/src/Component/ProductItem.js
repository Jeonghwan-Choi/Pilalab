import React, { Component } from 'react';
import '../Css/ProductItem.css';
import Logo from '../logo.svg';

class ProductItem extends Component {
  render() {
    return (
        <a href='#' className='ProductItem'>
            <div>
                <img className='ProductItem_Img' src='https://image.wanted.co.kr/optimize?src=https%3A%2F%2Fstatic.wanted.co.kr%2Fimages%2Fcompany%2F25834%2Fl2nean8w7ksrii2d__1080_790.jpg&w=1000&q=75'></img>
            </div>
            <div className='ProductItem_Title'>필라테스 정규직 모집 (의정이만)</div>
            <div className='ProductItem_Company'>회사명</div>
            <div className='ProductItem_Location'>인천</div>
            <div className='ProductItem_CreateTime'>등록일자: 2000-01-01</div>
            
        </a>
    );
  }
}

export default ProductItem;