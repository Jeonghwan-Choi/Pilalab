import React from 'react';
import KakaoLogin from 'react-kakao-login';
import Kakao from 'kakaojs'; // Kakao 객체를 import

class KakaoButton extends React.Component {
  responseKakao = (response) => {
    // 카카오 로그인 성공시 수행할 작업을 여기에 작성합니다.
    console.log('Kakao Login Success', response);
    Kakao.API.request({
      url: '/v2/user/me',
      success: (res) => {
        // 사용자 정보 처리
        const { id, properties } = res;
        console.log(`Kakao ID: ${id}`);
        console.log(`Nickname: ${properties.nickname}`);
      },
      fail: (error) => {
        console.log(error);
      },
    });
  }

  responseFail = (error) => {
    // 카카오 로그인 실패시 수행할 작업을 여기에 작성합니다.
    console.error(error);
  }

  render() {
    return (
      <KakaoLogin
        token={'99ae37e09570f29ddcd3ca26ef231803'} // 카카오에서 발급받은 앱키를 입력합니다.
        onSuccess={this.responseKakao} // 카카오 로그인 성공시 수행할 함수를 입력합니다.
        onFail={this.responseFail} // 카카오 로그인 실패시 수행할 함수를 입력합니다.
        className="kakao-login-button" // 카카오 로그인 버튼에 적용할 클래스 이름을 입력합니다.
        buttonText="카카오 계정으로 로그인" // 카카오 로그인 버튼에 표시할 텍스트를 입력합니다.
        style={{ width: '100%' }} // 버튼에 적용할 스타일을 입력합니다.

      />
    );
  }
}

export default KakaoButton;
