import React, {Component, Fragment} from 'react';
import Header from './components/Header'
import Menu from './components/Menu'
import MailList from './components/Maillist'

class App extends Component {

    render() {
        return (
            <Fragment>
                <Header/>
                <Menu/>
                <MailList/>
            </Fragment>
        );
    }
}

export default App;