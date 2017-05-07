import React from 'react';

import Header from './components/Header';
import Main from './components/Main';
import Footer from './components/Footer';

class App extends React.Component {
    constructor () {
        super();
        
        this.state = {};
        
        this.getData = this.getData.bind(this);
        this.getNames = this.getNames.bind(this);
        this.getAvatar = this.getAvatar.bind(this);
    }
    
    getData() {
        fetch(`https://api.github.com/users`, { method: 'GET' })
            .then((data) => {
                return data.json();
            }).then((data) => {
                console.log(data);
                this.setState({ 
                    users: data,
                    btn: 'data',
                });
            }).catch((err) => {
                console.log('ERROR:', err);
            });
    }
    
    
    getNames() {
        if(!this.state.users) return;
        const names = this.state.users.map((u) => {
            return u.login;
        })
        this.setState({ 
            names: names,
            btn: 'names',
        })
    }
    
    getAvatar() {
        console.log('getAvatar()');
        const avatar = this.state.users.map((u) => {
            return u.avatar_url;
        })
        this.setState({
            avatar: avatar,
            btn: 'avatar',
        })
    }
    
    render () {
        return(
            <div className="app-container">
                <Header />
                <Main
                    btn={this.state.btn}
                    users={this.state.users}
                    names={this.state.names}
                    avatar={this.state.avatar}
                />
                <Footer
                    getData={this.getData}
                    getNames={this.getNames}
                    getAvatar={this.getAvatar}
                />
            </div>    
        )
    }
}

export default App;