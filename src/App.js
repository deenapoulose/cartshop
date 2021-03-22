import React, { Component } from 'react'; 
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
import Reg from './compoent/reg';
import Log from './compoent/log';
import Home from './compoent/home';
import product from './compoent/product';
import Cart from './compoent/cart';


import './App.css'; 

class App extends Component { 
render() {
	
   
	
	return ( 
		
	<Router> 
		
		<ul>
     <li><  Link to="/" classNmae="active">HOME</Link></li>
      <li>< Link to="/reg" >REGISTER</Link></li>
     < li>< Link to="/log">LOGIN</ Link></li>
	 < li>< Link to="/product">PRODUCT</ Link></li>
	 < li>< Link to="/cart">CART</ Link></li>
		

     
    </ul>
			<Switch> 
			<Route exact path='/' component={Home}></Route> 
			<Route exact path='/reg' component={Reg}></Route> 
			<Route exact path='/log' component={Log}></Route> 
			<Route exact path='/product' component={product}></Route> 
			<Route exact path='/cart' component={Cart}></Route> 
			<Route exact path='/cart/:id' component={Cart}></Route> 


			</Switch> 
		
	</Router> 
); 
} 
} 

export default App; 
