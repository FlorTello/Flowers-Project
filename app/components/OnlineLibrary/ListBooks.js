import React from 'react';
import PropTypes  from 'prop-types';
import ItemBook from './ItemBook';

import { withStyles } from 'material-ui/styles'
import Card, { CardActions, CardContent, CardMedia } from 'material-ui/Card'
import Button from 'material-ui/Button'
import Typography from 'material-ui/Typography'
import Grid from 'material-ui/Grid'

const ListBooks = ({books}) => {
	const item = books.map((book,i) => {
		return(<ItemBook key={book.id} book={book} />)
	})
	
	return(
		<Grid container spacing={24}>
			{item}
		</Grid>
	);
}

ListBooks.propTypes = {
	books: PropTypes.arrayOf(PropTypes.object).isRequired
}

export default ListBooks
