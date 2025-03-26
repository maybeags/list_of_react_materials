// App.jsx
import { BrowserRouter as Router, Switch, Route, Link, useParams } from "react-router-dom";

function Home() {
  return (
    <div>
      <h1>Home</h1>
      <Link to="/movie/123">영화 123 보기</Link>
    </div>
  );
}

function Detail() {
  const { id } = useParams(); // <-- 이제 정상 작동
  return <h1>Detail 페이지 - {id}</h1>;
}

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/movie/:id">
          <Detail />
        </Route>
        <Route path="/" exact>
          <Home />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;

