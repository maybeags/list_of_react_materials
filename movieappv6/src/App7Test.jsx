// App.jsx
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  useParams,
} from "react-router-dom";

function Home() {
  return (
    <div>
      <h1>Home</h1>
      <Link to="/movie/123">영화 123 보기</Link>
    </div>
  );
}

function Detail() {
  const { id } = useParams();
  return <h1>Detail 페이지 - 영화 ID: {id}</h1>;
}

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/movie/:id" element={<Detail />} />
      </Routes>
    </Router>
  );
}

export default App;
