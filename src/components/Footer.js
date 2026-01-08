import React, { memo } from 'react';
import './Footer.css';

const Footer = memo(() => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section">
          <div className="footer-title">꿈드림</div>
          <div className="footer-subtitle">유학생을 위한 비영리 조직</div>
          <div className="footer-theme">&lt; HAPPY ENDING &gt;</div>
        </div>
        <div className="footer-section">
          <div className="footer-title-en">DREAMDRUIM</div>
          <div className="footer-subtitle-en">NPO for international students</div>
          <div className="footer-theme-en">&lt; HAPPY ENDING &gt;</div>
        </div>
      </div>
      <div className="footer-divider"></div>
      <div className="footer-content-2">
        <div className="footer-section">
          <span className="footer-label">ONLINE EXHIBITION OPEN</span>
        </div>
        <div className="footer-section">
          <span className="footer-value">2024.09.01 ~ 2024.09.30</span>
        </div>
      </div>
      <div className="footer-divider"></div>
      <div className="footer-content-3">
        <div className="footer-section">
          <span className="footer-label">INSTAGRAM</span>
        </div>
        <div className="footer-section">
          <span className="footer-value">@KNU_FD_2024</span>
        </div>
      </div>
      <div className="footer-copyright">
        <p>COPYRIGHT DREAMDRUIM © 2024. ALL RIGHTS RESERVED.</p>
      </div>
    </footer>
  );
});

Footer.displayName = 'Footer';

export default Footer;

