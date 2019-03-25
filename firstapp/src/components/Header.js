import React, {Component} from 'react';
import './Header.css';

class Header extends Component {
    constructor(){
        super();

        this.state = {
            title:'React App',
            userText:'User Input text'
        }
    }

    inputChange(event){
        this.setState({userText:event.target.value?event.target.value:'User Input Text'})
        // console.log(event.target.value)
    }

    render(){
        return(
            <header>
                <div className="logo"
                onClick={() => console.log('logo clicked')}>
                {this.state.title}
                </div>
                <center>
                    <input type="text"
                    onChange={this.inputChange.bind(this)}/>
                    <h4>{this.state.userText}</h4>
                </center>
                <hr/>
            </header>
        )
    }
}

export default Header;
