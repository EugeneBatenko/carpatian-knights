import React, { Component } from 'react';
import { BrowserRouter as Router, Route} from "react-router-dom";
import './App.scss';
//Pages
import MainPage from "./pages/MainPage";
import News from "./pages/News";
import Rules from "./pages/Rules";
import Archive from "./pages/Archive";
import OurTeam from "./pages/OurTeam";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Router>
          <Route exact path="/" component={MainPage} />
          <Route exact path="/News" component={News} />
          <Route exact path="/OurTeam" component={OurTeam} />
          <Route exact path="/Rules" component={Rules} />
          <Route exact path="/Archive" component={Archive} />
        </Router>
      </div>
    );
  }
}

export default App;
