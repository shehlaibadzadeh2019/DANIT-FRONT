import React, {Component} from 'react'
import SearchBar from './SearchBar'

export default class Header extends Component {
    render() {
        return (
            <div className="header-holder">
                <div>
                    <a href="#">
                    <img className="logotype-nav-top"
                    src="http://www.logosvectorfree.com/wp-content/uploads/2018/02/Gmail-Logo-Design-Vector-Free-Download.png"
                    alt="logo-gmail"/>
                    </a></div>
                <div><SearchBar/></div>
                <div className="user-menu-title">User menu</div>
            </div>
        )
    }
}