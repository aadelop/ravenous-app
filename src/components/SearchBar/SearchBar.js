import React from 'react';
import './SearchBar.css';



export default class SearchBar extends React.Component{
	constructor(props){
		super(props);
		this.state = {
			term: '',
			location:'',
			sortBy: 'best_match'
		}
		this.sortByOptions = {
			"Best Match":"best_match",
			"Highets Rated":"rating",
			"Most Reviewed":"review_count"
		}
		this.handleTermChange = this.handleTermChange.bind(this);
		this.handleLocationChange = this.handleLocationChange.bind(this);
		this.handleSearch = this.handleSearch.bind(this)
		}
	
	getSortByClass(sortByOption){
		if(this.state.sortBy === sortByOption)
			return 'active';
		else
			return '';
	}

	handleSortByChange(sortByOption, e){
		this.setState({
			sortBy: sortByOption
		})

		this.handleSearch(e)
	}

	handleTermChange(e){
		this.setState({
			term: e.target.value
		})
	}
	handleLocationChange(e){
		this.setState({
			location: e.target.value
		})
	}
	handleSearch(e){
		//alert('Clicking lets go')
		this.props.searchYelp(this.state.term,this.state.location,this.state.sortBy);
		e.preventDefault();
	}


	renderSortByOptions(sortByOption){
		return Object.keys(this.sortByOptions).map(sortByOption => {
			let sortByOptionValue = this.sortByOptions[sortByOption];
			return <li className={this.getSortByClass(sortByOptionValue)} key={sortByOptionValue} onClick={this.handleSortByChange.bind(this,sortByOptionValue)}>{sortByOption}</li>;
		})
	}



	render(){
		return(<div className="SearchBar">
				  <div className="SearchBar-sort-options">
				    <ul>
				    	{this.renderSortByOptions(this.sortByOptions)}
				    </ul>
				  </div>
				  <div className="SearchBar-fields">
				    <input onChange={this.handleTermChange} placeholder="Search Businesses" />
				    <input onChange={this.handleLocationChange} placeholder="Where?" />
				  </div>
				  <div className="SearchBar-submit">
				    <a onClick={this.handleSearch}>Let's Go</a>
				  </div>
			</div>)

	}
}