import React, { Component } from 'react';
import { connect } from 'react-redux';

class ShortFilms extends Component {
    render() {
        return (
            <div className="ShortFilms" id="main-content">
                {
                    this.props.showContent &&
                    <>
                <section id="the-stream" className="fillpage">
                    <div>
                        <p>SHORT FILMS PLACEHOLDER THE STREAM</p>
                    </div>
                </section>
                <section id="false-god" className="fillpage">
                    <div>
                        <p>SHORT FILMS PLACEHOLDER FALSE GOD</p>
                    </div>
                </section>
                <section id="john-the-day" className="fillpage">
                    <div>
                        <p>SHORT FILMS PLACEHOLDER JOHN THE DAY</p>
                    </div>
                </section>
                </>
                }
            </div>
        )
    }
}
const putReduxStateOnProps = (reduxState) => ({ showContent: reduxState.showContent })
export default connect(putReduxStateOnProps)(ShortFilms);