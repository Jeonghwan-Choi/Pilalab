import React, { Component } from 'react';
import '../Css/Navbar.css';
import Logo from '../Image/5C992626-0D4C-4B78-B922-C66A5D0B6338.png';

class Navbar extends Component {
  render() {
    return (
      <nav className="navbar">
        <div className="navbar-logo">
          <img className='navbar-logo-image' src={Logo} alt="logo" width="210px"/>
        </div>
        <ul className="navbar-list">
        <div className="navbar-list">        
            <li><a href="#" className="navbar-link">채용</a></li>
            <li><a href="#" className="navbar-link">대강</a></li>
            <li><a href="#" className="navbar-link">프리랜서</a></li>
            <li><a href="#" className="navbar-link">세미나</a></li>
            <li><a href="#" className="navbar-link">이력서</a></li>
        </div>
        <div>     
            <li>
                <a href="#" className="navbar-link">
                로그인
                </a>
            </li>
        </div>
     
        </ul>
      </nav>
    );
  }
}

export default Navbar;