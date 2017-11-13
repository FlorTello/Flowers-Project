import React from 'react'
import PropTypes from 'prop-types'

import { connect } from 'react-redux'

import Page from './Page'
import OnlineLibrary from './OnlineLibrary'

import Welcome from './Welcome'
import Categories from './Categories'

const Main = ({ books}) => {
	console.log(books)
 	return (
   		<Page>
			<Categories/>
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
