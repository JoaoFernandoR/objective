import { useState } from "react";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import MarvelProvider from "../src/context/marvelContext";

import Header from "./components/Header";

import Home from "./pages/Home";
import Detail from "./pages/Detail";

const App = () => {
  const [className, setClassName] = useState(true);

  const handleTheme = () => {
    setClassName(!className);
  };

  return (
    <BrowserRouter>
      <MarvelProvider>
        <div className={className ? "dark" : "light"}>
          <Header handleTheme={handleTheme} />
          <Switch>
            <Route path="/" component={Home} exact />
            <Route path="/detail/:charID" component={Detail} exact />
            <Redirect to="/" />
          </Switch>
        </div>
      </MarvelProvider>
    </BrowserRouter>
  );
};

export default App;
