import React ,{Component} from 'react';
import { Link } from 'react-router-dom';

class Post extends Component{
    render(){
        return(
            <div>
                <h2>Posts page</h2>
                <hr/>
                <h3>Posts1</h3>
                <Link to="/posts/1">Deatails</Link>
                <h3>Posts2</h3>
                <Link to="/posts/2">Deatails</Link>
                <h3>Posts3</h3>
                <Link to="/posts/3">Deatails</Link>
            </div>
        )
    }
}

export default Post;