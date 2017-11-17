import React from 'react'
import PropTypes from 'prop-types'

import ItemCategory from './ItemCategory'

const ListCategories =({categories}) => {
	const cat = categories.map((cat,i) => {
		return(<ItemCategory key={cat.id} category= {cat} />)
	});

	return (
		<ul>
		  {cat}
		</ul>
	);
}

ListCategories.propTypes = {
	categories: PropTypes.arrayOf(PropTypes.object).isRequired
}

export default ListCategories
