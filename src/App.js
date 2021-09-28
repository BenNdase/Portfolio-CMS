import {Route, Switch} from "react-router-dom";
import Home from "./components/Home/Home";
import Menu from "./components/Navbar/Menu";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <div className="App">
      <main>
        <Menu />
        <Switch>
          <Route path="/" component={Home} exact />
        </Switch>
        <Footer />
      </main>
    </div>
  );
}

export default App;