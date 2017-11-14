import React from 'react'
import PropTypes from 'prop-types'

import { connect } from 'react-redux'

import Page from './Page'
import OnlineLibrary from './OnlineLibrary'

//import Welcome from './Welcome'

const Main = ({ books,categories,categorieSelected}) => {
	console.log(books)
 	return (
   		<Page>
   			<OnlineLibrary  books={books} categories={categories} categorieSelected={categorieSelected}/>
   		</Page>
	)
}

const mapStateToProps = (state) => {
  const {filteredBooks,categories,categorieSelected} = state.AppReducer

  return {
    books:  filteredBooks,
    categories,
    categorieSelected
  }
}

const MainWithRedux = connect(mapStateToProps)(Main)

export default MainWithRedux
