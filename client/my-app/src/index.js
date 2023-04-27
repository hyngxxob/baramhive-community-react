// React 앱의 진입점(entry point). DOM을 렌더링하고, React 앱을 마운트

import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

// React DOM을 사용하여 앱을 렌더링
// ReactDOM.createRoot()로 root DOM element를 생성
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // <React.StrictMode>는 애플리케이션 안에서 발생하는 잠재적인 문제를 알아내기 위한 도구로, 엄격 모드에서 애플리케이션이 실행.
  <React.StrictMode>
    <App />
  </React.StrictMode>
);


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
