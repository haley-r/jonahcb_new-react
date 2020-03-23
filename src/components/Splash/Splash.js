import React, { Component } from 'react';
import { connect } from 'react-redux';

class Splash extends Component {
    state = {
        localStorageLength: localStorage.length,
        divClass: "splash"
    }

    hideSplash =()=> {
        localStorage.setItem('displaySplash', true);
        this.setState({
            localStorageLength: localStorage.length,
            divClass: "hide"
        })
    }  
    
    render() {
        return (
            <>
            {this.state.localStorageLength===0 &&
            <div onClick={this.hideSplash} className={this.state.divClass}>
                <div className="splash-content">
                    <div id="gif-reel">
                        <h1>Jonah Castañeda Barry</h1>
                    </div>
                    <p>Experimental Multimedia Artist</p>
                    <ul>
                        <li>Director</li>
                        <li>Editor</li>
                        <li>Sound Designer</li>
                    </ul>
                </div>
            </div>
                 } 
            </>
        )
    }
}

const putReduxStateOnProps = (reduxState) => ({ showContent: reduxState.showContent })
export default connect(putReduxStateOnProps)(Splash);