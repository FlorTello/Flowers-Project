import React from 'react'
import PropTypes from 'prop-types'

import { connect } from 'react-redux'

import Page from './Page'
import ListBooks from './ListBooks'

const Main = ({ books}) => {
	console.log(books)
 	return (
   		<Page>
   			<ListBooks  books = {books}/>
   		</Page>
	)
}


const mapStateToProps = (state) => {
  const {originalBooks} = state.AppReducer

  return {
    books:  originalBooks
  }
}

const MainWithRedux = connect(mapStateToProps)(Main)

export default MainWithRedux
