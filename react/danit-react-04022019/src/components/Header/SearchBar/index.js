import React, {Component, Fragment} from 'react'

export default class SearchBar extends Component {
    render() {
        return (
            <Fragment>
                <input type="text" className="search-input-header"/>
                <button className="search-button-header">Search</button>
            </Fragment>
        )
    }
}