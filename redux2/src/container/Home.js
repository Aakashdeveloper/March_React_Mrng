import React, {Component} from 'react';
import { connect} from 'react-redux';

class Home extends  Component{
    render(){
        return(
            <div>
                Home
            </div>
        )
    }
}

// will recive updated state
function mapStateToProps(){

}

// help to dispatch(call)action
function mapDispatchToProps(){

}


export default connect(mapStateToProps,mapDispatchToProps)(Home);