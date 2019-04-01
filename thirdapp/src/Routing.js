import React from 'react'
import { BrowserRouter, Route} from 'react-router-dom';

import Home from './components/Home';
import Artist from './components/Artist';

const Routing = () => {
    return (
        <BrowserRouter>
            <div>
                <Route exact path="/" component={Home}/>
                <Route exact path="/artists/:artistid" component={Artist}/>
            </div>
        </BrowserRouter>
    )
}


export default Routing

