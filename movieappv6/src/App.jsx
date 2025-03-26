// App.jsx
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./routes/Home";
import Detail from "./routes/Detail";

function App() {
  return (
    <Router>
      <Routes>
        {/* 루트 경로 */}
        <Route path="/" element={<Home />} />

        {/* 영화 상세 정보 */}
        <Route path="/movie/:id" element={<Detail />} />

        {/* 그 외 모든 경로 - NotFound 페이지나 에러 처리 */}
        {/* <Route path="*" element={<NotFound />} /> */}
      </Routes>
    </Router>
  );
}

export default App;