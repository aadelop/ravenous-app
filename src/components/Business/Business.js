import React from 'react';
import './Business.css';



export default  class Business extends React.Component{

	urlGoogleMaps(address, city){
		
		let addressStr = address.split(/[ ,]/).filter(item => {
		  return item != "";
		}).join("+");

		let url= `https://www.google.com/maps/search/?api=1&query=${addressStr}%2C+${city}`;

		return url;
	}



	render(){
		let business = this.props.business;
		return(
			<div className="Business">
			  <div className="image-container">
			  	<a href={business.url}><img src='https://s3.amazonaws.com/codecademy-content/programs/react/ravenous/pizza.jpg' alt=''/></a>
			   
			  </div>
			  <h2>{business.name}</h2>
			  <div className="Business-information">
			    <div className="Business-address">
			      <p><a href={this.urlGoogleMaps(business.address,business.city)}>{business.address}</a></p>
			      <p>{business.city}</p>
			      <p>{business.state} {business.zipCode}</p>
			    </div>
			    <div className="Business-reviews">
			      <h3>{business.category}</h3>
			      <h3 className="rating">{business.rating} stars</h3>
			      <p>90 reviews</p>
			    </div>
			  </div>
			</div>
		)
	}
}

