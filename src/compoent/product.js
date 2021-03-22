import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';

import f1 from './images/img4.jpg'
import f2 from './images/img1.jpg'
import f3 from './images/img2.jpg'
import f4 from './images/img3.jpg'
import f5 from './images/img5.jpg'
import './product.css';
import React,{useState} from "react"; 

const Product = () =>{
	const [prdt,setrdata] =useState([]);

		prdt.push({
			image:f1,
			price:20,
			name:'lamp'
		 },
		 {
			image:f2,
			price:20,
			name:'lamp1'
		 },
		 {
			image:f3,
			price:20,
			name:'lamp'
		 },
		 {
			image:f4,
			price:20,
			name:'lamp'
		 },
		 {
			image:f5,
			price:20,
			name:'lamp'
		 }
		 
		
		 )
		 localStorage.setItem("prdt", JSON.stringify(prdt));
		 var da= localStorage.getItem("prdt");
		 var log = JSON.parse(da);

			return(
				<div>
				
				
					<table>
						<thead>
							<th>Name</th>
							<th>item</th>
							<th>price</th>
							<th>Cart</th>
						</thead>
						<tbody>

						{ log.map((item,index )=>{
		
							return(<tr id={index}>
								<td>{item.name}</td>
								<td><img className="im" src = {item.image} alt="nooo"/></td>
								<td>{item.price}</td>
								<td><Link to={`cart/${index}`} >View</Link></td>

							</tr>)
						})
						}
						</tbody>
		
				</table>
						
				
				</div>
			)
		}
		
	


export default Product;