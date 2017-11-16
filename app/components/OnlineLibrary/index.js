import React from 'react'
import {connect} from 'react-redux'
import ListBooks from './ListBooks'
import SearchBar from './SearchBar'
import ListCategories from './ListCategories'
import DetailBook from './DetailBook'

class OnlineLibrary extends React.Component{
	constructor(props){
		super(props);
	}
	render(){
		const {books,categories,categorieSelected} = this.props;
		console.log("categories ", categorieSelected);
		let component = null;
		
		if(categorieSelected!=null){
			component = (
				<div>
					<SearchBar/>
					<ListBooks books={books}/>
				</div>
			)
		}else{
			component = (
				<div>
					<DetailBook />
					<ListBooks books={books}/>
				</div>
			)
		}

		return(
			<div>
				{component}
			</div>
		)
	}
}

export default OnlineLibrary

