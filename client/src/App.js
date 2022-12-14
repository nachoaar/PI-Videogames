import "./App.css";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Main from "./components/Main/Main.jsx";
import Home from "./components/Home/Home.jsx";
import Detail from "./components/Detail/Detail.jsx";
import Create from "./components/Create/Create.jsx";
import NotFound from "./components/NotFound/NotFound.jsx";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Switch>
          <Route exact path="/" component={Main} />
          <Route exact path="/videogames" component={Home} />
          <Route exact path="/videogames/create" component={Create} />
          <Route exact path="/videogame/:id" component={Detail} />
          <Route path="*" component={NotFound} />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
