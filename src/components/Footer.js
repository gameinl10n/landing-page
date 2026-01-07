import React, { memo } from 'react';
import './Footer.css';

const Footer = memo(() => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section">
          <div className="footer-title">2024 한국대학교</div>
          <div className="footer-subtitle">패션디자인학과 졸업전시회</div>
          <div className="footer-theme">&lt; HAPPY ENDING &gt;</div>
        </div>
        <div className="footer-section">
          <div className="footer-title-en">2024 Korea National Univ.</div>
          <div className="footer-subtitle-en">Department of Fashion Design</div>
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
        <p>COPYRIGHT INFORMATION GOES HERE © 2024. ALL RIGHTS RESERVED.</p>
      </div>
    </footer>
  );
});

Footer.displayName = 'Footer';

export default Footer;

