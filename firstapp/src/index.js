import React,{Component} from 'react';
import ReactDOM from 'react-dom';

import Header from './components/Header';
import NewsList from './components/newsList';
import JSON from './db.json';

class Home extends Component{
    constructor(props){
        super(props);

        this.state={
            newsData:JSON
        }
    }
    render(){
        return(
            <div>
                <Header/>
                <NewsList news={this.state.newsData}/>
            </div>
        )
    }
}


ReactDOM.render(<Home/>,document.getElementById('root'))