import {Route, Switch} from "react-router-dom";
import Home from "./components/Home/Home";
import Menu from "./components/Navbar/Menu";

function App() {
  return (
    <div className="App">
      <main>
        <Menu />
        <Switch>
          <Route path="/" component={Home} exact />
        </Switch>
      </main>
    </div>
  );
}

export default App;