# KNU FD 2024 - 패션디자인학과 졸업전시회

2024 한국대학교 패션디자인학과 졸업전시회 <HAPPY ENDING> 웹사이트

## 기술 스택

- React 18.2.0
- React Router DOM 6.20.0
- Create React App

## 설치 및 실행

```bash
# 의존성 설치
npm install

# 개발 서버 실행
npm start

# 프로덕션 빌드
npm run build
```

## 프로젝트 구조

```
src/
├── components/
│   ├── Navbar.js       # 상단 네비게이션
│   ├── Gallery.js      # 작품 갤러리 (가로 스크롤)
│   ├── Credit.js       # 크레딧 페이지
│   ├── Guestbook.js    # 방명록 페이지
│   └── Footer.js       # 하단 푸터
├── App.js
├── App.css
├── index.js
└── index.css
```

## 기능

- **작품 페이지**: 가로 스크롤 갤러리, 마우스 드래그 및 휠 스크롤 지원
- **크레딧 페이지**: 전시회 정보 및 교육 과정 소개
- **방명록**: 댓글 작성 및 표시 (로컬 스토리지 저장)
- **반응형 디자인**: 모바일 및 데스크톱 지원

## 이미지 설정

작품 이미지는 `public/images/` 폴더에 다음 이름으로 저장해주세요:
- work1.jpg
- work2.jpg
- work3.jpg
- work4.jpg
- work5.jpg
- work6.jpg
- work7.jpg

이미지가 없을 경우 플레이스홀더 이미지가 자동으로 표시됩니다.

