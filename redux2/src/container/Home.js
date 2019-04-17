import React, {Component} from 'react';
import { latestNews,articleNews,
         galleryNews } from '../actions';
import { connect} from 'react-redux';
import { bindActionCreators} from 'redux';

// component
import LatestNews from '../component/home/latest';
import ArticlesNews from '../component/home/articles';
import Gallery from '../component/home/gallery';


class Home extends  Component{

    componentDidMount(){
        this.props.latestNews();
        this.props.articleNews();
        this.props.galleryNews()
    }

    render(){
        return(
            <div>
                <LatestNews latest = {this.props.news.latest}/>
                <ArticlesNews articles = {this.props.news.articles}/>
                <Gallery galleries={this.props.gallery.galleries}/>
            </div>
        )
    }
}

// will recive updated state
function mapStateToProps(state){
    console.log(">>>",state)
    return{
        news:state.articles,
        gallery:state.galleries
    }
}

// help to dispatch(call)action
function mapDispatchToProps(dispatch){
    return bindActionCreators({latestNews,
                                articleNews,
                                galleryNews},dispatch)
}


export default connect(mapStateToProps,mapDispatchToProps)(Home);