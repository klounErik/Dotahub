import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import {getMatches, gethero, getNews, getUpdates, getPlayerInfo, getPlayerHeroes, getMatchDetails} from './Exports'
import MatchDetails from './Components/Matchdetails/MatchDetails'
import Profile from './Components/Profile/PlayerProfile'
import Matches from './Components/Profile/Matches/Matches'
import Updates from './Components/Updates/Updates'
import Streams from './Components/Streams/Streams'
import Home from './Components/Home/Home'
import Nav from './Components/Nav/Nav'
import './App.css';

class App extends Component {
  render() {
  return (
          <Router>
          <div className="App">
          <Route path="/" component={Nav}/>
          <Route path="/updates" render={props => <Updates {...props} getUpdates={getUpdates} />} />
          <Route path="/matches/:id" render={props => <Matches {...props} getMatches={getMatches} gethero={gethero} />} />
          <Route path="/matchdetails/:matchid" render={props =><MatchDetails getMatchDetails={getMatchDetails} gethero={gethero} {...props}/>}/>
          <Route path="/profile/:id" render={props =><Profile {...props} getMatches={getMatches} getPlayerInfo={getPlayerInfo} gethero={gethero} getPlayerHeroes={getPlayerHeroes}/>}/>
          <Route path="/home" render={props =><Home {...props} getNews={getNews}/>}/>
          <Route path="/streams" component={Streams}/>
          </div>
        </Router>
    );
  }
}

export default App;
