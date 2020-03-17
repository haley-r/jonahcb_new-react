import React, { Component } from 'react';

class MainNavigation extends Component {
    componentDidMount=()=>{
        console.log('hi it mounted');
        console.log('the redux state is:', this.props.reduxState);
    }

    render() {
        return (
            <nav className="main-nav">
                <h3 className="menu-toggle">content(s)</h3>
                <ul className="toplevel">
                    <li><a href="#/short-films" className="category" id="short-films-link">Short&nbsp;Films</a>
                        <ul className="shortfilms dropdown">
                            <li><a href="#/short-films">The Stream</a></li>
                            <li><a href="#/short-films">False God <span className="student">(Student&nbsp;Project)</span></a></li>
                            <li><a href="#/short-films">John: The Day In The Life <span className="student">(Student&nbsp;Project)</span></a></li>
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

                    <li><a href="/" className="category" id="about-link">About</a></li>
                </ul>
            </nav>
        )
    }
}

export default (MainNavigation);