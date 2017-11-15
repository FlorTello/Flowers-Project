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
		const { books,categories,categorieSelected} = this.props;
		let component = null;

		if(this.props.page === 1){
			component = <Welcome />
		}else{
			component = <OnlineLibrary  books={books} categories={categories} categorieSelected={categorieSelected}/>
		}
	
		return(
	   		<Page>
	   			{component}
	   		</Page>
		)
	}
	
}

const mapStateToProps = (state) => {
  const {filteredBooks,categories,categorieSelected,page} = state.AppReducer

  return {
    books:  filteredBooks,
    categories,
    categorieSelected,
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
