import React from 'react'
import {connect} from 'react-redux'
import ListBooks from './ListBooks'
import SearchBar from './SearchBar'
import ListCategories from './ListCategories'
import Modal from './Modal'

class OnlineLibrary extends React.Component{
	constructor(props){
		super(props);
	};

	render(){
		const {books,categories,categorieSelected} = this.props;
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
					<Modal />
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

