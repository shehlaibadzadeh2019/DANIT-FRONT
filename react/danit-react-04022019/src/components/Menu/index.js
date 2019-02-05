import React, {Component} from 'react'

export default class Menu extends Component {
    render() {
        return (
            <div>
                <ul className="ul-menu-options">
                    <li  className="ul-menu-mail-option">Входящие</li>
                    <li  className="ul-menu-mail-option">Отправленные</li>
                    <li  className="ul-menu-mail-option">Помеченные</li>
                    <li  className="ul-menu-mail-option">Важные</li>
                </ul>
            </div>
        )
    }
}