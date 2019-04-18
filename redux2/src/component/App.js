import React, { Component } from 'react';
import { BrowserRouter, Route} from 'react-router-dom';

// component
import Header from './Header';
import Footer from './Footer';

// container
import Home from '../container/Home';
import News from '../container/News';
import Galleries from '../container/Galleries';

class App extends Component {
  render(){
    return(
      <div>
        <BrowserRouter>
          <div>
            <Header/>
              <Route exact path="/" component={Home}></Route>
              <Route path="/news/:id" component={News}></Route>
              <Route path="/galleries/:id" component={Galleries}></Route>
            <Footer/>
          </div>
        </BrowserRouter>
      </div>
    )
  }
}

export default App;
