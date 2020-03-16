import React, { Component } from 'react';

class Home extends Component {
    render() {
        return (
            <div id="main-content">
                <section id="about" class="fillpage">
                    <div>
                        <h2>Jonah Castañeda Barry</h2>
                        <p>Is a multimedia artist living in Minneapolis, Minnesota. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                    </div>
                </section>


                <section id="reel" class="fillpage">
                    <div>
                        <h2>Overview</h2>
                        <iframe src="https://player.vimeo.com/video/351696204" frameborder="0" allow="autoplay; fullscreen" allowfullscreen></iframe>
                        <p>Reel compiled in July 2019.</p>
                    </div>
                </section>
            </div>
        )
    }
}
export default (Home);