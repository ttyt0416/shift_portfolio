import React from "react";
import "./App.css";

import { Switch, Route, useLocation } from "react-router-dom";

import HomePage from "./pages/homepage/homepage.component";
import FirstPage from "./pages/firstpage/firstpage.component";
import SecondPage from "./pages/secondpage/secondpage.component";
import ThirdPage from "./pages/thirdpage/thirdpage.component";
import ContactPage from "./pages/contactpage/contactpage.component";

import Header from "./components/header/header.component";
import WallPaper from "./components/wallpaper/wallpaper.component";
import Title from "./components/title/title.component";

const App = () => {
  let location = useLocation();
  let pathname = location.pathname;

  return (
    <div>
      {pathname === "/" ? null : <Header />}
      {pathname === "/" || pathname === "/contact" ? null : <Title />}
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/first" component={FirstPage} />
        <Route exact path="/second" component={SecondPage} />
        <Route exact path="/third" component={ThirdPage} />
        <Route exact path="/contact" component={ContactPage} />
      </Switch>
      <WallPaper />
    </div>
  );
};

export default App;
