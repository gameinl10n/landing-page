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
        <h1 className="credit-title">OPENING CREDIT</h1>
        <p className="credit-subtitle">
          2024 한국대학교 패션디자인학과 졸업전시회 &lt;HAPPY ENDING &gt;
        </p>
        <div className="credit-divider"></div>
        
        <div className="credit-sections">
          <div className="credit-section credit-section-left">
            <p className="credit-text">
              패션디자인학과의 전문 교육 과정은 학생들의 예술성을 개발하고 디자인 예술에 필요한 표현기술과 재료의 속성 등을 이해할 수 있는 탄탄한 기반을 만들 수 있도록 합니다. 또한 학생들로 하여금 교육 수료 후 패션 디자인 업계의 새로운 트렌드를 파악하고 선도할 수 있는 능력을 갖추도록 합니다.
            </p>
            <p className="credit-text">
              교육과정을 통해 본인의 패션 예술과 작품을 완성하고 더 나아가 다양한 직업 경로에 대한 실용적 기술 및 패션업계 전문 지식 습득에 중점을 두고 있습니다.
            </p>
          </div>

          <div className="credit-section credit-section-right">
            <p className="credit-text">
              이번 패션디자인학과 졸업전시회 주제인 &lt;HAPPY ENDING &gt;은 '아름다운 마무리'와 '새로운 출발'라는 두 가지의 의미를 가진 중의적인 표현입니다. '아름다운 마무리'는 개개인의 독창적인 개성과 열정의 완성으로 4년 간의 작업의 결과물을 비로소 완성하였는다는 함축적 의미를 가지고 있습니다.
            </p>
            <p className="credit-text">
              '새로운 출발'은 학생들의 잠재력을 발휘할 수 있는 시작의 의미를 내포하고 있으며, 이번 졸업 전시는 예술과 디자인에 대한 각자의 미를 완성하는데 의미가 있습니다.
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
              alt="Happy Ending"
              className="credit-image"
              onError={handleImageError}
              loading="lazy"
            />
          </div>
          {isHovered && (
            <div className="credit-image-overlay">
              <h2 className="credit-image-text">HAPPY ENDING</h2>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Credit;

