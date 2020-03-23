import React, {Component} from 'react';

import './App.css';
import { HashRouter as Router, Route } from 'react-router-dom';
//components
import MainNavigation from '../MainNavigation/MainNavigation';
import FooterNavigation from '../FooterNavigation/FooterNavigation';
import Home from '../Home/Home';
import Splash from '../Splash/Splash';
import ShortFilms from '../ShortFilms/ShortFilms';
import Contact from '../Contact/Contact';

class App extends Component {

    render() {
      return (
        <div className="App">
        <MainNavigation />
        <Splash />
         <Router>
           {/* <Redirect exact from="/" to="/splash" /> */}
           <Route exact path="/" component={Home}/>
           <Route exact path="/contact" component={Contact} />
           <Route exact path="/short-films" component={ShortFilms}/>            
         </Router>
        <FooterNavigation />
       </div>
    );
  }
}

export default (App);







