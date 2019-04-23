import React  from 'react';
import { BrowserRouter, Route} from 'react-router-dom';
import ListData from './ListData';

class App extends React.PureComponent{
    render(){
        return(
            <BrowserRouter>
                <div>
                    <div className="row">
                        <div className="col-md-10  offset-md-1 col-lg-8 offset-md-2">
                            <Route exact path="/" component={ListData} />
                        </div>
                    </div>
                </div>
            </BrowserRouter>
        )
    }
}

export default App;