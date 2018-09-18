import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import MatchDetails from './Components/Matchdetails/MatchDetails'
import Profile from './Components/Profile/PlayerProfile'
import Matches from './Components/Matches/Matches'
import Updates from './Components/Updates/Updates'
import Home from './Components/Home/Home'
import Nav from './Components/Nav/Nav'
import Loader from './Components/Loader/Loader'
import './App.css';

class App extends Component {
  render() {
  return (
          <Router>
          <div className="App">
          <Route path="/" component={Nav}/>
          <Route path="/updates" component={Updates}/>
          <Route path="/matches" render={props => <Matches {...props} getState={this.getChildren}/>} />
          <Route path="/matchdetails/:matchid" render={props =><MatchDetails {...props}/>}/>
          <Route path="/profile/:id" render={props =><Profile {...props}/>}/>
          <Route path="/test" component={Loader}/>
          <Route path="/home" component={Home}/>
          </div>
        </Router>
    );
  }
}

export default App;
