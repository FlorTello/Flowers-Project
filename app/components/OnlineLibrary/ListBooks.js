import React from 'react'
import { withStyles } from 'material-ui/styles';
import Card, { CardActions, CardContent, CardMedia } from 'material-ui/Card';
import Button from 'material-ui/Button';
import Typography from 'material-ui/Typography';
import Grid from 'material-ui/Grid';

const styles = {
  root: {
    flexGrow: 1,
       marginTop: 30,
  },
  item: {
   padding: 16,
   textAlign: 'center',
 },
 media: {
   height:574
 }

};

const ListBooks = ({books})=>{
	const item = books.map((book,i)=>{
		return(<li key={book.id}>{book.title}</li>)
	})
	return(
		<Grid container spacing={24}>
			 {books.map((tile) => (
				 <Grid item xs={6} sm={6} style={styles.item}>
				 <Card>
					 <CardMedia
						 style={styles.media}
						 image={tile.img}
						 title="Contemplative Reptile"
					 />
					 <CardContent>
					 <h4>{tile.title}</h4>
					 <p>{tile.subtitle}</p>
					 </CardContent>
					 <CardActions>
						 <Button dense color="primary">
							 Share
						 </Button>
						 <Button dense color="primary">
							 Learn More
						 </Button>
					 </CardActions>
				 </Card>
						</Grid>
			 ))}
		</Grid>
	);
}

export default ListBooks
