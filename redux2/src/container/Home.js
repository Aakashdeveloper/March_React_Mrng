import React, {Component} from 'react';
import { latestNews } from '../actions';
import { connect} from 'react-redux';
import { bindActionCreators} from 'redux';

// component
import LatestNews from '../component/home/latest';


class Home extends  Component{

    componentDidMount(){
        this.props.latestNews();
    }

    render(){
        return(
            <div>
                hii
            </div>
        )
    }
}

// will recive updated state
function mapStateToProps(state){
    console.log(">>>",state)
    return{
        news:state.articles
    }
}

// help to dispatch(call)action
function mapDispatchToProps(dispatch){
    return bindActionCreators({latestNews},dispatch)
}


export default connect(mapStateToProps,mapDispatchToProps)(Home);