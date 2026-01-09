import React, { useState, useEffect, useCallback } from 'react';
import './Home.css';

const ACTIVITY_CATEGORIES = ['Portfolio', 'Resume', 'Study', 'Class', 'Lesson', 'Reading', 'Leading'];

const Home = () => {
  const [displayedText, setDisplayedText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const currentWord = ACTIVITY_CATEGORIES[currentIndex];
    const typingSpeed = isDeleting ? 50 : 100;
    let timeoutId;
    
    const handleTyping = () => {
      if (!isDeleting) {
        // 타이핑 중
        if (displayedText.length < currentWord.length) {
          setDisplayedText(currentWord.substring(0, displayedText.length + 1));
          timeoutId = setTimeout(handleTyping, typingSpeed);
        } else {
          // 완성 후 잠시 대기
          timeoutId = setTimeout(() => setIsDeleting(true), 2000);
        }
      } else {
        // 삭제 중
        if (displayedText.length > 0) {
          setDisplayedText(currentWord.substring(0, displayedText.length - 1));
          timeoutId = setTimeout(handleTyping, typingSpeed);
        } else {
          // 삭제 완료 후 다음 단어로
          setIsDeleting(false);
          setCurrentIndex((prev) => (prev + 1) % ACTIVITY_CATEGORIES.length);
        }
      }
    };

    timeoutId = setTimeout(handleTyping, typingSpeed);
    return () => {
      if (timeoutId) clearTimeout(timeoutId);
    };
  }, [displayedText, isDeleting, currentIndex]);

  const handleImageError = useCallback((e) => {
    e.target.style.display = 'none';
  }, []);

  return (
    <div className="home-container">
      <div className="home-background">
        {/* GIF 배경 - 무한 반복 재생 */}
        <div className="home-gif-placeholder">
          <img 
            src="/images/home-bg.gif" 
            alt="background" 
            className="home-gif"
            onError={handleImageError}
          />
        </div>
      </div>
      <div className="home-content">
        <div className="home-badge">DREAMDURIM saves the International Students</div>
        <h1 className="home-title">Hello CHINA!</h1>
        <div className="home-subtitle">
          Let's Get it <span className="home-typing">{displayedText}</span><span className="home-cursor"></span>
        </div>
        <div className="home-quote">
          <div className="quote-mark">"</div>
          <div className="quote-line"></div>
          <p className="quote-text">To be continued...</p>
        </div>
      </div>
    </div>
  );
};

export default Home;

