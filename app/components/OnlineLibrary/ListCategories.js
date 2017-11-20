import React from 'react'
import PropTypes from 'prop-types'

import ItemCategory from './ItemCategory'
import Grid from 'material-ui/Grid';
const style = {
	root: {
    flexGrow: 1,
       marginTop: 30,
  }}
const ListCategories =({categories}) => {
	const cat = categories.map((cat,i) => {
		return(<ItemCategory key={cat.id} category= {cat} />)
	});

	return (
		<Grid container spacing={24} style={style.root}>
		  {cat}
		</Grid>
	);
}

ListCategories.propTypes = {
	categories: PropTypes.arrayOf(PropTypes.object).isRequired
}

export default ListCategories
