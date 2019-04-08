import React,{Component} from 'react';
import { BrowserRouter, Route, Link} from 'react-router-dom';


import Home from './Home';
import Profile from './profile';
import Posts from './posts';
import PostDetails from './postsDetails';
import Lifecycle from './lifecycle';

class Routing extends Component{
    render(){
        return(
            <BrowserRouter>
                <div>
                    <header>
                        <nav className="navbar navbar-inverse">
                            <div className="container-fluid">
                                <div className="navbar-header">
                                <button type="button" className="navbar-toggle" data-toggle="collapse" data-target="#myNavbar">
                                    <span className="icon-bar"></span>
                                    <span className="icon-bar"></span>
                                    <span className="icon-bar"></span> 
                                </button>
                                <a className="navbar-brand">React App</a>
                                </div>
                                <div className="collapse navbar-collapse" id="myNavbar">
                                <ul className="nav navbar-nav">
                                    <li><Link to="/">Home</Link></li>
                                    <li><Link to="/posts">Posts</Link></li> 
                                    <li><Link to="/profile">Profile</Link> </li> 
                                    <li><Link to="/lifecycle">LifeCycle</Link> </li> 
                                </ul>
                                </div>
                            </div>
                        </nav>
                          
                           
                                                                               
                    </header>
                    <Route exact path="/" component={Home}></Route>
                    <Route exact path="/posts" component={Posts}></Route>
                    <Route path="/posts/:id" component={PostDetails}></Route>
                    <Route path="/profile" component={Profile}></Route>
                    <Route path="/lifecycle" component={Lifecycle}></Route>
                </div>
            </BrowserRouter>
        )
    }
}
export default Routing;