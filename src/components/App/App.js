import React, {Component} from 'react';
import './App.css';
import { HashRouter as Router, Route } from 'react-router-dom';
//components
// import OtherComponent from '../OtherComponent/OtherComponent';
import MainNavigation from '../MainNavigation/MainNavigation';
import FooterNavigation from '../FooterNavigation/FooterNavigation';
import Home from '../Home/Home';

class App extends Component {
    render() {
      return (
        <div className="App">
          <MainNavigation />
         <Router>
           
           <Route exact path="/" component={Home}/>
            
         </Router>
          <FooterNavigation />
       </div>
    );
  }
}

export default (App);







