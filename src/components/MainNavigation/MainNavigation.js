import React, { Component } from 'react';
import { connect } from 'react-redux';
import { HashLink as Link } from 'react-router-hash-link';
import { HashRouter as Router } from 'react-router-dom';

class MainNavigation extends Component {

    componentDidMount=()=>{
        window.addEventListener("resize", this.updateMenuDisplay);
        this.updateMenuDisplay();
    }

    toggleMenu=()=>{
        if (this.props.showMenu===false){
            this.props.dispatch({ type: 'SET_MENU', payload: true});
            this.props.dispatch({ type: 'SET_CONTENT', payload: false });
        }//end if
        else {
            this.props.dispatch({type: 'SET_MENU', payload: false,});
            this.props.dispatch({ type: 'SET_CONTENT', payload: true, });
        }//end else
    }

    revealContent=()=>{
        if (this.props.showContent === false) {
            this.props.dispatch({ type: 'SET_MENU', payload: false, });
            this.props.dispatch({ type: 'SET_CONTENT', payload: true, });
        }
    }

    updateMenuDisplay =()=> {
        if (window.innerWidth < 540){this.props.dispatch({ type: 'SET_MENU', payload: false, })}
        else if (window.innerWidth >= 540) { this.props.dispatch({ type: 'SET_MENU', payload: true });
            this.props.dispatch({ type: 'SET_CONTENT', payload: true });}
        }

    render() {
        return (
            <>
            {this.props.showMenu===true
            ?
            <nav className="main-nav">
                <h3 className="menu-toggle" onClick={this.toggleMenu}>close menu</h3>
                <ul className="toplevel">
                  <Router>
                    <li><a href="#/short-films" onClick={this.revealContent} className="category" id="short-films-link">Short&nbsp;Films</a>
                        <ul className="shortfilms dropdown">
                            <li><Link to="/short-films#the-stream" onClick={this.revealContent}>The Stream</Link></li>
                            <li><Link to="/short-films#false-god" onClick={this.revealContent}>False God <span className="student">(Student&nbsp;Project)</span></Link></li>
                            <li><Link to="/short-films#john-the-day" onClick={this.revealContent}>John: The Day In The Life <span className="student">(Student&nbsp;Project)</span></Link></li>
                        </ul>
                    </li>

                    <li><a href="#/short-films" className="category" id="music-videos-link">Music&nbsp;Videos</a>
                        <ul className="musicvids dropdown">
                            <li><a href="#/short-films">Sass - Spoiled by Rotten</a></li>
                            <li><a href="#/short-films">Sigma Hertz - Lost (Found) <span>ft. Sophie Glassford</span></a></li>
                            <li><a href="#/short-films">Prathloons - White White Whitney</a></li>
                            <li><a href="#/short-films">Jonah CB - Superficie <span className="student">(Student&nbsp;Project)</span></a></li>
                        </ul>
                    </li>

                    <li><a href="#/short-films" className="category" id="promotional-link">Promotional</a>
                        <ul className="shortfilms dropdown">
                            <li><a href="#/short-films">Discourse Coffee: A Liquid Workshop</a></li>
                            <li><a href="#/short-films">Let It Ride Cold-Brewed Coffee</a></li>
                            <li><a href="#/short-films">Joga Bonito US Freestyle Football</a></li>
                            <li><a href="#/short-films">Run N Fun<span>(Photography)</span></a></li>
                        </ul>
                    </li>

                    <li><a href="#/short-films" className="category" id="nonfiction-link">Nonfiction</a>
                        <ul className="shortfilms dropdown">
                            <li><a href="#/short-films">Textura<span className="student">(Student&nbsp;Project)</span></a></li>
                        </ul>
                    </li>

                    <li><a href="#/short-films" className="category" id="other-media-link">Other&nbsp;Media</a>
                        <ul className="shortfilms dropdown">
                            <li><a href="#/short-films">Promotional Photography</a></li>
                            <li><a href="#/short-films">Film Stills</a></li>
                            <li><a href="#/short-films">Personal Photography</a></li>
                            <li><a href="#/short-films">Bandcamp<span>(Music)</span></a></li>
                        </ul>
                    </li>

                    <li><a href="/#" className="category" id="about-link">About</a></li>
                    </Router>       
                </ul>
            </nav>
            :    
                <h3 className="menu-toggle" onClick={this.toggleMenu}>content(s)</h3>
        }
            </>
        )
    }
}

const putReduxStateOnProps = (reduxState) => ({showMenu:reduxState.showMenu, showContent: reduxState.showContent})
export default connect(putReduxStateOnProps)(MainNavigation);