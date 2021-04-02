import "./App.css";
import About from "./components/About";
import Nav from "./components/Nav";
import Shop from "./components/Shop";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Item from "./components/Item";

function App() {
  return (
    <div className="App">
      <Router>
        <Nav></Nav>
        <Switch>
          <Route path="/" exact component={Home}></Route>
          <Route path="/about" component={About}></Route>
          <Route path="/shop" exact component={Shop}></Route>
          <Route path="/shop/:id" component={Item}></Route>
        </Switch>
      </Router>
    </div>
  );
}

const Home = () => {
  return (
    <div>
      <h1>Home</h1>
    </div>
  );
};

export default App;
