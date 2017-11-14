import React from 'react'
import {connect} from 'react-redux'

import ListBooks from './ListBooks'
import SearchBar from './SearchBar'
import ListCategories from './ListCategories'

class OnlineLibrary extends React.Component{
	constructor(props){
		super(props);
	}
	render(){
		const {books,categories,categorySelected} = this.props;
		let children = null;
		
		if(categorySelected!=null){
			children = (
				<div>
					<SearchBar/>
					<ListBooks books={books}/>
				</div>
			)
		}else{
			children = <ListCategories categories={categories}/>
		}

		return(
			<div>
				{children}
			</div>
		)
	}
}

const mapStateToProps = (state) => {
  const {
    filteredSearchBooks
  } = state.AppReducer

  return {
    books: filteredSearchBooks
  }
}

const OnlineLibraryWithRedux = connect(mapStateToProps)(OnlineLibrary)
export default OnlineLibraryWithRedux