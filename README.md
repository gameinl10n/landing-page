# DREAMDURIM

유학생을 위한 비영리 조직 DREAMDURIM 랜딩 페이지

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
│   ├── Home.js         # 홈 페이지
│   ├── Gallery.js      # 활동 갤러리 (가로 스크롤)
│   ├── Credit.js       # 소개 페이지
│   ├── Guestbook.js    # 방명록 페이지
│   └── Footer.js       # 하단 푸터
├── App.js
├── App.css
├── index.js
└── index.css
```

## 기능

- **홈 페이지**: 타이핑 애니메이션과 배경 이미지
- **활동 갤러리**: 가로 스크롤 갤러리, 마우스 드래그 및 휠 스크롤 지원
- **소개 페이지**: 조직 소개 및 활동 내용
- **방명록**: 댓글 작성 및 표시 (로컬 스토리지 저장)
- **테마 토글**: 다크/라이트 모드 전환
- **반응형 디자인**: 모바일 및 데스크톱 지원

## 이미지 설정

활동 이미지는 `public/images/` 폴더에 저장하고 `Gallery.js`의 `ORIGINAL_ACTIVITIES` 배열에서 경로를 설정해주세요.
홈 배경 이미지는 `public/images/home-bg.gif`에 저장해주세요.
소개 페이지 이미지는 `public/images/credit-image.jpg`에 저장해주세요.

이미지가 없을 경우 플레이스홀더 이미지가 자동으로 표시됩니다.

