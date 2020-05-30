import React from 'react';
import './SearchBar.css';

let sortByOptions = {
	"Best Match":"best_match",
	"Highets Rated":"rating",
	"Most Reviewed":"review_count"
}

export default class SearchBar{
	
	renderSortByOptions(){
		return Object.keys(sortByOptions).map(sortByOption => {
			let sortByOptionValue = sortByOptions[sortByOption];
			return <li key={sortByOptionValue}>{sortByOption}</li>;
		})
	}

	render(){
		reutrn(<div className="SearchBar">
				  <div className="SearchBar-sort-options">
				    <ul>
				    	<renderSortByOptions />
				    </ul>
				  </div>
				  <div className="SearchBar-fields">
				    <input placeholder="Search Businesses" />
				    <input placeholder="Where?" />
				  </div>
				  <div className="SearchBar-submit">
				    <a>Let's Go</a>
				  </div>
			</div>)

	}
}