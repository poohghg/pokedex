import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import DetailPage from './pages/DetailPage';
import IndexPage from './pages/IndexPage';

// router 설정
// Router V6 설정에서 변경된점?

// 1 exact 을 설정하지 않아도됨
// exact 안 쓰는 대신 /*가 필수입니다.
// 2 switch -> routes로 변경
// 3 component 옵션이 element로 변경 엘레멘트 유형으로 받아야함
// 작은 번들사이즈를 유지

const App = () => (
  <Router>
    <Routes>
      <Route path="/*" element={<IndexPage />} />
      <Route path="/:id" element={<DetailPage />} />
    </Routes>
  </Router>
);

export default App;
