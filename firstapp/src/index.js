import React,{Component} from 'react';
import ReactDOM from 'react-dom';

import Header from './components/Header';
import NewsList from './components/newsList';
import JSON from './db.json';

class Home extends Component{
    constructor(props){
        super(props);

        this.state={
            newsData:JSON,
            filtered: JSON
        }
    }

    filterNews(keywords){
        console.log('>>>>>',keywords)
        let filtered = this.state.newsData.filter((item) => {
            return item.title.toLowerCase().indexOf(keywords.toLowerCase()) > -1 ;
        })
        // this.setState({filtered:filtered})
        this.setState({filtered})

    }

    render(){
        return(
            <div>
                <Header newsSearch={(userinput) => this.filterNews(userinput) } />
                <NewsList news={this.state.filtered}/>
            </div>
        )
    }
}


ReactDOM.render(<Home/>,document.getElementById('root'))



/*
var ages = [32, 33, 16, 40,21];


const checkAdult = (age) => {
	return age >= 18;
}
ages.filter((age) => {return age >= 18;});
}*/