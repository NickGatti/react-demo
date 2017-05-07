import React from 'react';

class Main extends React.Component {
    constructor(props) {
        super(props);
        
        this.state = {};

    }
    
    componentWillReceiveProps(newProps) {
        this.setState({
            btn: newProps.btn,
            users: newProps.users,
            names: newProps.names,
            avatar: newProps.avatar,
        });
    }
    
    render() {
        let main = <main>loading...</main>;
        if (this.state.btn === 'data') {
            return <main>recieved data!</main>
        }
        if (this.state.btn === 'names') {
            return (
                <main>
                    {this.state.names.map((name, i) => {
                        return <div key={i}>{name}</div>
                    })}
                </main>
            )
        }
        if (this.state.btn === 'avatar') {
            return (
                <main>
                    {this.state.avatar.map((url, i) => {
                        return <img key={i} style={{
                            width: '40px',
                        }} src={url}/>
                    })}
                </main>
            )
        }
        
        return(
            <div>
                {main}
            </div>
        )
    }
}

export default Main;