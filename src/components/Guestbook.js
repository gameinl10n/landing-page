import React, { useState, useEffect, useCallback, useMemo } from 'react';
import './Guestbook.css';

const SAMPLE_COMMENTS = [
  {
    id: 1,
    name: '잭 다니엘',
    message: '비밀글입니다.',
    isPrivate: true,
    timestamp: new Date().toISOString(),
    timeAgo: '방금 전'
  },
  {
    id: 2,
    name: '벤자민 프랭클린',
    message: '작업의 페이지 및 모든 프로세스에 대해 궁금한 점, 질문 드립니다.',
    isPrivate: false,
    timestamp: new Date(Date.now() - 86400000).toISOString(),
    timeAgo: '1일 전'
  },
  {
    id: 3,
    name: '에밀리 스톤',
    message: '아름다운 디자인과 레이아웃... 정말 멋져요',
    isPrivate: false,
    timestamp: '2022-12-23T00:00:00.000Z',
    timeAgo: '2022.12.23'
  }
];

const Guestbook = () => {
  const [comments, setComments] = useState([]);
  const [name, setName] = useState('');
  const [message, setMessage] = useState('');
  const [isPrivate, setIsPrivate] = useState(false);
  const [password, setPassword] = useState('');
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  // 로컬 스토리지에서 댓글 불러오기
  useEffect(() => {
    const savedComments = localStorage.getItem('guestbookComments');
    if (savedComments) {
      try {
        setComments(JSON.parse(savedComments));
      } catch (error) {
        console.error('Failed to parse comments from localStorage:', error);
        setComments(SAMPLE_COMMENTS);
      }
    } else {
      setComments(SAMPLE_COMMENTS);
    }
  }, []);

  const formatTimeAgo = useCallback((timestamp) => {
    const now = new Date();
    const commentDate = new Date(timestamp);
    const diffMs = now - commentDate;
    const diffMins = Math.floor(diffMs / 60000);
    const diffHours = Math.floor(diffMs / 3600000);
    const diffDays = Math.floor(diffMs / 86400000);

    if (diffMins < 1) return '방금 전';
    if (diffMins < 60) return `${diffMins}분 전`;
    if (diffHours < 24) return `${diffHours}시간 전`;
    if (diffDays < 30) return `${diffDays}일 전`;
    
    return commentDate.toLocaleDateString('ko-KR', {
      year: 'numeric',
      month: '2-digit',
      day: '2-digit'
    }).replace(/\. /g, '.').replace(/\.$/, '');
  }, []);

  const handleSubmit = useCallback((e) => {
    e.preventDefault();
    if (!name.trim() || !message.trim()) {
      // 더 나은 UX를 위해 alert 대신 사용 가능하지만, 현재는 간단하게 유지
      return;
    }

    const newComment = {
      id: Date.now(),
      name: name.trim(),
      message: message.trim(),
      isPrivate,
      password: isPrivate ? password : '',
      timestamp: new Date().toISOString(),
      timeAgo: '방금 전'
    };

    const updatedComments = [newComment, ...comments];
    setComments(updatedComments);
    localStorage.setItem('guestbookComments', JSON.stringify(updatedComments));

    // 폼 초기화
    setName('');
    setMessage('');
    setIsPrivate(false);
    setPassword('');
  }, [comments, isPrivate, name, message, password]);

  return (
    <div className={`guestbook-container ${isVisible ? 'fade-in' : ''}`}>
      <div className="guestbook-content">
        <h1 className="guestbook-title">GUEST BOOK</h1>
        <p className="guestbook-subtitle">
          2024 한국대학교 패션디자인학과 졸업전시회 &lt;HAPPY ENDING &gt;
        </p>
        <div className="guestbook-divider"></div>

        <form className="guestbook-form" onSubmit={handleSubmit}>
          <div className="form-row">
            <input
              type="text"
              placeholder="이름"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="form-input"
              required
            />
          </div>
          <div className="form-row">
            <textarea
              placeholder="메시지를 입력하세요..."
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              className="form-textarea"
              rows="4"
              required
            />
          </div>
          <div className="form-row">
            <label className="form-checkbox">
              <input
                type="checkbox"
                checked={isPrivate}
                onChange={(e) => setIsPrivate(e.target.checked)}
              />
              <span>비밀글</span>
            </label>
            {isPrivate && (
              <input
                type="password"
                placeholder="비밀번호"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="form-input form-input-small"
              />
            )}
          </div>
          <button type="submit" className="form-submit">
            등록
          </button>
        </form>

        <div className="guestbook-comments">
          {comments.map((comment) => (
            <div key={comment.id} className="comment-item">
              <div className="comment-header">
                <span className="comment-name">{comment.name}</span>
                <span className="comment-time">
                  {comment.isPrivate && <span className="lock-icon">🔒</span>}
                  {comment.isPrivate ? '비밀글입니다.' : comment.message}
                </span>
              </div>
              <div className="comment-footer">
                <span className="comment-timestamp">
                  {formatTimeAgo(comment.timestamp)}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Guestbook;

