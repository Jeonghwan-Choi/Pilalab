import React, { Component } from 'react';

class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error) {
    // 다음 렌더링에서 폴백 UI를 보여주기 위해 state를 업데이트합니다.
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    // 오류를 로그에 기록하거나 다른 처리를 수행할 수 있습니다.
    console.error(error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      // 폴백 UI를 반환합니다.
      return <h1>Oops! Something went wrong.</h1>;
    }

    return this.props.children; 
  }
}

export default ErrorBoundary;
