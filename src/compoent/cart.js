import React,{Component,useState } from "react"; 



	
const Cart = () =>{
	const [rs,setrsdata] =useState([]);
	var citems= localStorage.getItem("c");
	var licitem= JSON.parse(citems);
	var sum=0;
	for(let i=0;i<licitem.length;i++){
		sum=sum+licitem[i].price;

	}
	//console.log(sum)
const cartremove=(i) =>{
	var cartdata=JSON.parse(localStorage.getItem("c"));
	let newcdata = cartdata.filter(function (id,index) {
		return index !== i;
	 });
	 localStorage.setItem("c", JSON.stringify(newcdata));
	 window.location.href = "/cart";
   
}
	
		return(
            <table>
                <thead>
                    <th>item</th>
                    <th>image</th>
                    <th>price</th>
					<th>Action</th>
                </thead>
                <tbody>

						{ licitem.map((item,index )=>{
		
							return(<tr id={index}>
								<td>{item.name}</td>
								<td><img className="im" src = {item.image} alt="nooo"/></td>
								<td>{item.price}</td>
								<td><button onClick={()=>cartremove(index)}>Delete</button></td>

							</tr>)
						})
						}
						<tr>
							<td>price</td>
							<td>{sum}</td>
						</tr>
						</tbody>
            </table>
        )
			
} 



export default Cart;