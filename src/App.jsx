import React, { Component } from 'react';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";
import './App.css';
import Customers from './Customers'
import { BrowserRouter as Router, Switch, Route, Redirect} from 'react-router-dom';
import About from './About';
import Home from './Home';
import Contact from './Contact';
import Navbar from './Navbar';
import './index.css';
import Common from './Common'; 
import Footer from './Footer';
import Service from './Service';


function App() {
   return(
     <>
     <Navbar/>
     
     <Switch>
       <Route exact path  ="/"  component={Home}/>
       <Route exact path  ="/About"  component={About}/> 
       <Route  exact path  ="/Contact"  component={Contact}/>
       <Route exact path  ="/Service"  component={Service}/>
       <Redirect to = "/"  />
       
     </Switch>
     </>
   )
}

export default App;
