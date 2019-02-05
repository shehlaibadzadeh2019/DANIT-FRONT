import React, { Component, Fragment } from 'react'
import Selected from './Selected';
import Important from "./Important";

export default class Email extends Component {
    render() {
        return (
            <Fragment>
                <form action="">
                    <ul className="email-holder">
                        <li className="select-holder"><Selected /></li>
                        <li className="important-holder"><Important /></li>
                        <li className="username-holder">{this.props.USER_NAME || 'USER_NAME'}</li>
                        <li className="topic-holder">{this.props.TOPIC || 'TOPIC'}</li>
                        <li className="created-time-holder">{this.props.CREATION_TIME || "CREATION_TIME"}</li>
                    </ul>
                </form>
                <div className="email-buttons"></div>
            </Fragment>
        );
    }
}