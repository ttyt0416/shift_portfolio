import React from "react";
import "./App.css";

import { Switch, Route, Redirect } from "react-router-dom";

import HomePage from "./pages/homepage/homepage.component";
import FirstPage from "./pages/firstpage/firstpage.component";
import SecondPage from "./pages/secondpage/secondpage.component";
import ThirdPage from "./pages/thirdpage/thirdpage.component";
import ForthPage from "./pages/forthpage/forthpage.component";
import FifthPage from "./pages/fifthpage/fifthpage.component";
import SixthPage from "./pages/sixthpage/sixthpage.component";
import ContactPage from "./pages/contactpage/contactpage.component";

import Header from "./components/header/header.component";
import WallPaper from "./components/wallpaper/wallpaper.component";

const App = ({ isHomePage = false }) => {
  return (
    <div>
      {isHomePage ? null : <Header />}
      <Switch>
        <Route exact path="/" component={HomePage} isHomePage={true} />
        <Route exact path="/first" component={FirstPage} />
        <Route exact path="/second" component={SecondPage} />
        <Route exact path="/third" component={ThirdPage} />
        <Route exact path="/forth" component={ForthPage} />
        <Route exact path="/fifth" component={FifthPage} />
        <Route exact path="/sixth" component={SixthPage} />
        <Route exact path="/contact" component={ContactPage} />
      </Switch>
      {isHomePage ? null : <WallPaper />}
    </div>
  );
};

export default App;
