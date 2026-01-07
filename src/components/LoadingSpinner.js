import React from 'react';
import './LoadingSpinner.css';

const LoadingSpinner = ({ text = '이미지 로딩 중...' }) => {
  return (
    <div className="loading-container">
      <div className="loading-spinner"></div>
      <p className="loading-text">{text}</p>
    </div>
  );
};

export default LoadingSpinner;

