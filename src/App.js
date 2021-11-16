import React from 'react';
import { Components } from 'react';
import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Navbar from './Components/Navbar/Navbar';
import Footer from './Components/Footer';
import Home from './Components/Pages/Home';
import Product from './Components/Pages/Product';
import Services from './Components/Pages/Services';
import About from './Components/Pages/About';
import Contact from './Components/Pages/Contact';
import Api from './Components/Pages/Api';
import Effect from './Components/Pages/Effect';
import Users from './Components/Pages/Users';
import singelUser from './Components/Pages/singelUser';
import PostCall from './Components/Pages/PostCall';
import TestComponent from './Components/Pages/TestComponent';
import PostForm from './Components/Pages/PostForm';
import SingelPost from './Components/Pages/SingelPost';
import Photos from './Components/Pages/Photos';


function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <Navbar />
      <Switch>
      <Route exact path="/" component={Home}/>
      <Route exact path="/product" component={Product}/>
      <Route exact path="/services" component={Services}/>
      <Route exact path="/about" component={About}/>
      <Route exact path="/contact" component={Contact}/>
      <Route exact path="/api" component={Api}/>
      <Route exact path="/effect" component={Effect}/>
      <Route exact path="/users" component={Users}/>
      <Route exact path="/singelUser" component={singelUser}/>
      <Route exact path="/postcall" component={PostCall}/>
      <Route exact path="/testcomponent" component={TestComponent}/>
      <Route exact path="/postform" component={PostForm}/>
      <Route exact path="/singelpost" component={SingelPost}/>
      <Route exact path="/photos" component={Photos}/>
      


      

      
      
      
      
      
      
      </Switch>
      <Footer />
    </div>
    </BrowserRouter>
  );
}

export default App;
