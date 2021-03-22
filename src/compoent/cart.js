import React,{Component } from "react"; 

class Cart extends Component  { 
	constructor(props){
		super(props)
		this.state={
			list:[]
		}
	
	
		
	}

async componentDidMount(){
    
    ///correct

        var id1=this.props.match.params.id;
      
		
		var str=JSON.parse(localStorage.getItem("prdt"));
		let newData = str.filter(function (id,index) {
			return index.toString() === id1 ;
	   
	   });
	   localStorage.setItem("car", JSON.stringify(newData));
	   this.setState({list:newData})
	}
	
	
	render() {
		return(
            <table>
                <thead>
                    <th>item</th>
                    <th>image</th>
                    <th>price</th>
                </thead>
                <tbody>

						{ this.state.list.map((item,index )=>{
		
							return(<tr id={index}>
								<td>{item.name}</td>
								<td><img className="im" src = {item.image} alt="nooo"/></td>
								<td>{item.price}</td>

							</tr>)
						})
						}
						</tbody>
            </table>
        )
			
} 
}


export default Cart;