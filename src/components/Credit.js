import React, { useState, useEffect, useCallback } from 'react';
import './Credit.css';

const Credit = () => {
  const [isHovered, setIsHovered] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const handleMouseEnter = useCallback(() => setIsHovered(true), []);
  const handleMouseLeave = useCallback(() => setIsHovered(false), []);
  const handleImageError = useCallback((e) => {
    e.target.style.display = 'none';
  }, []);

  return (
    <div className={`credit-container ${isVisible ? 'fade-in' : ''}`}>
      <div className="credit-content">
        <h1 className="credit-title">WE ARE</h1>
        <p className="credit-subtitle">
          유학생들을 위한 비영리 조직
        </p>
        <div className="credit-divider"></div>
        
        <div className="credit-sections">
          <div className="credit-section credit-section-left">
            <p className="credit-text">
              여기다가 활동 설명이나 활동의 의의...?
            </p>
            <p className="credit-text">
            여기다가 활동 설명이나 활동의 의의...?
            </p>
          </div>

          <div className="credit-section credit-section-right">
            <p className="credit-text">
            여기다가 활동 설명이나 활동의 의의...?
            </p>
            <p className="credit-text">
            여기다가 활동 설명이나 활동의 의의...?
            </p>
          </div>
        </div>

        <div 
          className="credit-image-container"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <div className="credit-image-placeholder">
            {/* 이미지는 /images/credit-image.jpg 로 설정 */}
            <img 
              src="/images/credit-image.jpg" 
              alt="DREAMDURIM"
              className="credit-image"
              onError={handleImageError}
              loading="lazy"
            />
          </div>
          {isHovered && (
            <div className="credit-image-overlay">
              <h2 className="credit-image-text">DREAMDURIM</h2>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Credit;

