import React, {Component} from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions';

class MoviesList extends Component{
    componentWillMount(){
        this.props.moviesList()
    }

    renderList = (movies) => {
        if(movies){
            return movies.map((data) => {
                return(
                    <div key={data.id}>
                        <h3>{data.name}</h3>
                    </div>
                )
            })
        }

    }

    render(){
        return(
            <div>
                {this.renderList(this.props.moviesdata)}
            </div>
        )
    }
}

function mapStateToProps(state){
    console.log("state>>>", state)
    return{
        moviesdata: state.movies
    }
}

export default connect(mapStateToProps,actions)(MoviesList);