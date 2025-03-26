import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./routes/Home";
import Detail from "./routes/Detail";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/movie/:id" component={Detail} />
        <Route path="/" exact component={Home} />
      </Switch>
    </Router>
  );
}

export default App;
