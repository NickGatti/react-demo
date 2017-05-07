import React from 'react';

class Footer extends React.Component {
    constructor(props) {
        super(props);
        
    }
    
    render() {
        return(
            <footer>
                <div
                    className="get-data-btn"
                    onClick={this.props.getData}
                >
                    get data
                </div>
                <div
                    className="get-data-btn"
                    onClick={this.props.getNames}
                >
                    names
                </div>
                <div
                    className="get-data-btn"
                    onClick={this.props.getAvatar}
                >
                    avatar
                </div>
            </footer>
        )
    }
}

export default Footer;