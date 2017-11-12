import React from 'react'

import ListBooks from './ListBooks'
import SearchBar from './SearchBar'

class OnlineLibrary extends React.Component{
	constructor(props){
		super(props);
		this.state = {
			filterText: ''
		}
	}
	render(){
		return(
			<div>
				<SearchBar/>
				<ListBooks books={this.props.books}/>
			</div>
		)
	}
}

export default OnlineLibrary