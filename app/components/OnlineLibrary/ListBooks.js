import React from 'react'
import {connect} from 'react-redux'

import { withStyles } from 'material-ui/styles'
import Card, { CardActions, CardContent, CardMedia } from 'material-ui/Card'
import Button from 'material-ui/Button'
import Typography from 'material-ui/Typography'
import Grid from 'material-ui/Grid'

import {toggleModal,setModal} from '../../actions'

class ListBooks  extends React.Component {
	constructor(pros){
		super(pros);
		this.handleClick = this.handleClick.bind(this);
	};
	
	handleClick(e){
		console.log(e.currentTarget);
		this.props.toggleModal();
		this.props.setModal(e.currentTarget.parentElement.parentElement.id);
	};
	  
	render(){
		const {books} = this.props;
		const styles = {
			root: {
				flexGrow: 1,
				marginTop: 30
			},
			item: {
				padding: 16,
				textAlign: 'center'
			},
			media: {
				height:574
			}
		};
		
		return(
			<Grid container spacing={24}>
				 {books.map((book) => (
					 <Grid item xs={6} sm={6} style={styles.item}>
					 <Card id={book.id}>
						 <CardMedia
							 style={styles.media}
							 image={book.img}
							 title="Contemplative Repbook"
						 />
						 <CardContent>
						 <h4>{book.title}</h4>
						 <p>{book.subtitle}</p>
						 </CardContent>
						 <CardActions>
							 <Button dense color="primary">
								 Share
							 </Button>
							 <Button dense color="primary" onClick={this.handleClick}>
								 Learn More
							 </Button>
						 </CardActions>
					 </Card>
							</Grid>
				 ))}
			</Grid>
		);
	}

}

const mapDispatchToProps = (dispatch)=>{
	return{
		setModal(id){
			dispatch(setModal(id))
		},
		toggleModal(){
			dispatch(toggleModal())
		}
	}
}

const ListBooksWithRedux = connect(
	null,
	mapDispatchToProps
)(ListBooks)

export default ListBooksWithRedux
