import React from 'react'
import PropTypes from 'prop-types'

import { connect } from 'react-redux'

import Page from './Page'
import OnlineLibrary from './OnlineLibrary'
import Welcome from './OnlineLibrary/Welcome'

import {setPage} from '.././actions'

class Main extends React.Component{
	constructor(props){
		super(props);
	}

	componentDidMount() {
    	setTimeout(()=>{
    		console.log("otro componente");
    		this.props.setPage(2);
    	}, 3000)
    }

	render(){
		const { books,categories,page} = this.props;
		let component = null;

		if(page === 1){
			component = <Welcome />
		}else{
			component = <OnlineLibrary  books={books} categories={categories}/>
		}
	
		return(
	   	<Page>
	   		{component}
	   	</Page>
		)
	}
	
}

Main.propTypes = {
	books: PropTypes.arrayOf(PropTypes.object),
	categories: PropTypes.arrayOf(PropTypes.object),
	page: PropTypes.number
}

const mapStateToProps = (state) => {
  const {filteredBooksCategory,categories,page} = state.AppReducer

  return {
    books: filteredBooksCategory,
    categories,
    page
  }
}

const mapDispatchToProps = (dispatch) => {
    return {
      setPage(id) {
        dispatch(setPage(id))
      }
    }
}

const MainWithRedux = connect(mapStateToProps, mapDispatchToProps)(Main)

export default MainWithRedux
