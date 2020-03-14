import React, {Component} from 'react';
import './App.css';
import { HashRouter as Router, Route } from 'react-router-dom';
//components
import OtherComponent from '../OtherComponent/OtherComponent';

class App extends Component {
    render() {
      return (
        <div className="App">
         <header className="App-header">
           
         </header>
         <Router>
           <Route path="/othercomponent" component={OtherComponent} />
         </Router>
         <footer>
         
         </footer>
       </div>
    );
  }
}

export default (App);



//   render() {
//     return (
//       <div className="App">
//         <header className="App-header">
//           <h1 className="App-title">FEEDBACK</h1>
//         </header>
//         <Router>
//           <Route exact path="/" component={Feeling} />
//           <Route path="/understanding" component={Understanding} />
//           <Route path="/support" component={Support} />
//           <Route path="/comments" component={Comments} />
//           <Route path="/review" component={Review} />
//           <Route path="/confirmation" component={Confirmation} />
//           <Route path="/admin" component={Admin} />
//         </Router>
//         <footer>
//           <p>Weekend Challenge #5 - Haley Ryan</p>
//         </footer>
//       </div>
//     );
//   }
// }




//react-supplied
{/* <div className="App">
  <header className="App-header">
    <img src={logo} className="App-logo" alt="logo" />
    <p>
      Edit <code>src/App.js</code> and save to reload.
          </p>
    <a
      className="App-link"
      href="https://reactjs.org"
      target="_blank"
      rel="noopener noreferrer"
    >
      Learn React
          </a>
  </header>
</div> */}

