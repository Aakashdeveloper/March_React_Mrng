import React, { Component } from 'react';
import { BrowserRouter, Route} from 'react-router-dom';

// component
import Header from './Header';
import Footer from './Footer';

// container
import Home from '../container/Home';

class App extends Component {
  render(){
    return(
      <div>
        <BrowserRouter>
          <div>
            <Header/>
              <Route exact path="/" component={Home}></Route>
            <Footer/>
          </div>
        </BrowserRouter>
      </div>
    )
  }
}

export default App;
