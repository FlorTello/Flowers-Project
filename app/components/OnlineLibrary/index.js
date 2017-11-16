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
		const {books,categories,categorySelected} = this.props;
		let children = null;
		
		if(categorySelected!=null){
			children = (
				<div>
					<SearchBar/>
					<ListBooks books={books}/>
					<Modal />
				</div>
			)
		}else{
			children = (
				<div>
					<ListCategories categories={categories}/>
				</div>
			)
		}
		return(
			<div>
				{children}
			</div>
		)
	};
}

const mapStateToProps = (state) => {
  const {
    filteredSearchBooks,
    categorySelected
  } = state.AppReducer

  return {
    books: filteredSearchBooks,
    categorySelected
  }
}

const OnlineLibraryWithRedux = connect(mapStateToProps)(OnlineLibrary)

export default OnlineLibraryWithRedux

