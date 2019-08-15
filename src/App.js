import React from 'react';
import logo from './logo.svg';
import './App.css';

import {
  Route,
  Link,
  Switch,
  Redirect,
  BrowserRouter
} from 'react-router-dom';

import ButtonAppBar from './components/buttonAppBar.js'
import Home from './components/home.js'
import About from './components/about.js'
import Testimonials from './components/testimonials.js'
import RatesAndPolicies from './components/ratesAndPolicies.js'
import Contact from './components/contact.js'
import Footer from './components/footer.js'

function App() {
  return (
    
      <div className="App">
      <ButtonAppBar />

      <Switch>
       <Route exact path='/' component={Home}/>
       <Route path='/about' component={About}/>
       <Route path='/testimonials' component={Testimonials}/>
       <Route path='/ratesAndPolicies' component={RatesAndPolicies}/>
       <Route path='/contact' component={Contact}/>
       
      </Switch>
      

    </div>
  
    
    
  );
}

export default App;
