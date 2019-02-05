import React, {Component} from 'react'
import Email from "./Email";

export default class MailList extends Component {
    render() {
        const USER_NAME = "Andrii";
        const TOPIC = "Hello world!"
        const CREATION_TIME = "12:00"
        return (
            <div className="mail-list-holder">MailList
                <Email USER_NAME={USER_NAME} TOPIC={TOPIC} CREATION_TIME={CREATION_TIME}/>
            </div>
        )
    }
}