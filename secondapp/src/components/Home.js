import React ,{Component} from 'react';

class Home extends Component{
    render(){
        return(
            <div>
                <h2>Home page</h2>
                
                <div className="row">
                    <div className="col-md-3 col-sm-3 col-xs-6">
                        <input type="text"/>
                    </div>
                    <div className="col-md-3 col-sm-3 col-xs-6">
                        <input type="text"/>
                    </div>
                    <div className="col-md-3 col-sm-3 col-xs-6">
                        <input type="text"/>
                    </div>
                    <div className="col-md-3 col-sm-3 col-xs-6">
                        <input type="text"/>
                    </div>
                    <div className="col-md-3 col-sm-3 col-xs-6">
                        <input type="text"/>
                    </div>
                    <div className="col-md-3 col-sm-3 col-xs-6">
                        <input type="text"/>
                    </div>
                
                
                </div>


            </div>
        )
    }
}

export default Home;