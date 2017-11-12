import React from 'react'
import PropTypes from 'prop-types'

import { connect } from 'react-redux'

import Page from './Page'
import OnlineLibrary from './OnlineLibrary'

const Main = ({ books}) => {
	console.log(books)
 	return (
   		<Page>
   			<OnlineLibrary  books = {books}/>
   		</Page>
	)
}

const mapStateToProps = (state) => {
  const {filteredBooks} = state.AppReducer

  return {
    books:  filteredBooks
  }
}

const MainWithRedux = connect(mapStateToProps)(Main)

export default MainWithRedux
