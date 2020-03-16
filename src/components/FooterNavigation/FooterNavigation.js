import React, { Component } from 'react';

class FooterNavigation extends Component {
    render() {
        return (
            <footer className="FooterNavigation">
                <nav id="footer-nav">
                    <ul>
                        <li><a href="https://vimeo.com/jcastabarry" target="_blank">Vimeo</a></li>
                        <li><a href="https://www.instagram.com/junaburr/" target="_blank">Instagram</a></li>
                        <li><a href="#">Contact</a></li>
                    </ul>
                </nav>
            </footer>
        )
    }
}
export default (FooterNavigation);