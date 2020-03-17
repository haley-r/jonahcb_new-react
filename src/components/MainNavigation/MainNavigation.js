import React, { Component } from 'react';

class MainNavigation extends Component {
    render() {
        return (
            <nav className="main-nav">
                <ul className="toplevel" id="top-item">
                    <li><a href="short-films/index.html" className="category" id="short-films-link">Short&nbsp;Films</a>
                        <ul className="shortfilms dropdown">
                            <li><a href="#">The Stream</a></li>
                            <li><a href="#">False God <span className="student">(Student&nbsp;Project)</span></a></li>
                            <li><a href="#">John: The Day In The Life <span className="student">(Student&nbsp;Project)</span></a></li>
                        </ul>
                    </li>

                    <li><a href="#" className="category" id="music-videos-link">Music&nbsp;Videos</a>
                        <ul className="musicvids dropdown">
                            <li><a href="#">Sass - Spoiled by Rotten</a></li>
                            <li><a href="#">Sigma Hertz - Lost (Found) <span>ft. Sophie Glassford</span></a></li>
                            <li><a href="#">Prathloons - White White Whitney</a></li>
                            <li><a href="#">Jonah CB - Superficie <span className="student">(Student&nbsp;Project)</span></a></li>
                        </ul>
                    </li>

                    <li><a href="#" className="category" id="promotional-link">Promotional</a>
                        <ul className="shortfilms dropdown">
                            <li><a href="#">Discourse Coffee: A Liquid Workshop</a></li>
                            <li><a href="#">Let It Ride Cold-Brewed Coffee</a></li>
                            <li><a href="#">Joga Bonito US Freestyle Football</a></li>
                            <li><a href="#">Run N Fun<span>(Photography)</span></a></li>
                        </ul>
                    </li>

                    <li><a href="#" className="category" id="nonfiction-link">Nonfiction</a>
                        <ul className="shortfilms dropdown">
                            <li><a href="#">Textura<span className="student">(Student&nbsp;Project)</span></a></li>
                        </ul>
                    </li>

                    <li><a href="#" className="category" id="other-media-link">Other&nbsp;Media</a>
                        <ul className="shortfilms dropdown">
                            <li><a href="#">Promotional Photography</a></li>
                            <li><a href="#">Film Stills</a></li>
                            <li><a href="#">Personal Photography</a></li>
                            <li><a href="#">Bandcamp<span>(Music)</span></a></li>
                        </ul>
                    </li>

                    <li><a href="#" className="category" id="about-link">About</a></li>
                </ul>
            </nav>
        )
    }
}
export default (MainNavigation);