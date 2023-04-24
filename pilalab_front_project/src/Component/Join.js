import React, { Component } from 'react';
import '../Css/Join.css';
import Logo from '../logo.svg';
import KakaoButton from './KakaoButton';

class Join extends Component {
  constructor(props) {
    super(props);
    this.joinButton = null;
    this.joinPopup = null;
  }

  popupOpen() {
    console.log('open')
    this.joinButton = document.querySelector('.open-popup');
    this.joinPopup = document.querySelector('.popup');

    this.joinPopup.style.display = 'block';

    this.joinButton.removeEventListener('click', this.popupOpen);
    this.joinButton.addEventListener('click', this.popupClose.bind(this));
  }

  popupClose() {
    console.log('close')
    this.joinPopup.style.display = 'none';

    this.joinButton.removeEventListener('click', this.popupClose.bind(this));
    this.joinButton.addEventListener('click', this.popupOpen.bind(this));
  }

  render() {
    return (
      <div className='Join'>
        <div className='JoinDiv'>
          <div className='login_title_div'>
            <div className='login_title'>필라랩</div>
          </div>
          <hr />
          <div className='login_sub_title'>로그인</div>
          <div className='login_sub_description'>
            <div>아이디와 비밀번호를 입력하기 귀찮으시죠?</div>
            <div>카카오로 1초 만에 로그인 하세요.</div>
          </div>
          <KakaoButton />
          <div>또는</div>
          <div>
            <div className='input_id'>
              <input type={'text'} placeholder={'아이디'}/>    
            </div>                
            <div className='input_pwd'>
              <input type={'text'} placeholder={'비밀번호'}/>    
            </div>                
          </div>
          <div>
            <button className='email_login_button'>이메일로 로그인</button>
          </div>
          <button className='open-popup' ref={(button) => { this.joinButton = button; }} onClick={this.popupOpen.bind(this)}>팝업 열기</button>
        </div>

        <div className="popup" >
          <div className="popup-content">
            <h2>간편 회원가입</h2>
            <p>이곳에 팝업 내용을 작성합니다.</p>
            <button className="close-popup" onClick={this.popupClose.bind(this)}>닫기</button>
          </div>
        </div>
      </div>
    );
  }
}

export default Join;
