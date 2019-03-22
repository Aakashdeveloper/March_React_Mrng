import React, {Component} from 'react';
import './Header.css';

class Header extends Component {

    inputChange(event){
        console.log(event.target.value)
    }

    render(){
        return(
            <header>
                <div className="logo"
                onClick={() => console.log('logo clicked')}>Logo</div>
                <center>
                    <input type="text"
                    onChange={this.inputChange}/>
                </center>
                <hr/>
            </header>
        )
    }
}

export default Header;
