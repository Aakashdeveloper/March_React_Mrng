import React,{Component} from 'react';
import { Link } from 'react-router-dom';

class PostDetails extends Component{
    constructor(props){
        super(props);

        console.log(props)
        this.state={
            itemId: this.props.match.params.id
        }
    }
    render(){
        return(
            <div>
                <div class="panel panel-danger">
                    <div class="panel-heading">Detail page success</div>
                    <div class="panel-body">
                        Detail page Content for {this.state.itemId}
                        <br/>
                        <Link to="/posts" className="btn btn-danger">Back</Link>
                    </div>
                </div>
            </div>
        )
    }
}


export default PostDetails;