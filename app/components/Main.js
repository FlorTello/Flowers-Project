import React from 'react'
import PropTypes from 'prop-types'

import { connect } from 'react-redux'

import Page from './Page'
import OnlineLibrary from './OnlineLibrary'

//import Welcome from './Welcome'

class Main extends React.Component{
  constructor(props){
    super(props);
  }
  render(){
    const {books,categories,categorySelected} = this.props;
    return (
      <Page>
        <OnlineLibrary  
          books={books} 
          categories={categories}
          categorySelected={categorySelected}
        />
      </Page>
    )
  }
}

const mapStateToProps = (state) => {
  const {
    categories,
    categorySelected,
    filteredBooksCategory
  } = state.AppReducer

  return {
    books: filteredBooksCategory,
    categories,
    categorySelected
  }
}

const MainWithRedux = connect(mapStateToProps)(Main)

export default MainWithRedux
