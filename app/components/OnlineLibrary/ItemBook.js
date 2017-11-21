import React from 'react';
import PropTypes from 'prop-types';

import { withStyles } from 'material-ui/styles'
import Card, { CardActions, CardContent, CardMedia } from 'material-ui/Card';
import Button from 'material-ui/Button';
import Typography from 'material-ui/Typography';
import Grid from 'material-ui/Grid';

import {connect} from 'react-redux';
import {toggleModal,setModal} from '../../actions';

class ItemBook extends React.Component{
	constructor(props){
		super(props);
		this.handleClick = this.handleClick.bind(this);
	};

	handleClick(e){
		console.log(e.currentTarget);
		this.props.toggleModal();
		this.props.setModal(e.currentTarget.parentElement.parentElement.id);
	};

	render(){
		const {book} = this.props
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
			 'background-size': 'contain',
				height:574
			}
		};

		return(
			<Grid item xs={12} sm={6} style={styles.item}>
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
		)
	};
}

ItemBook.propTypes = {
	book: PropTypes.shape({
		id: PropTypes.string,
    	title: PropTypes.string,
		subtitle: PropTypes.string,
		author: PropTypes.string,
		published: PropTypes.string,
		publisher: PropTypes.string,
		pages: PropTypes.number,
		description: PropTypes.string,
		website: PropTypes.string,
		img: PropTypes.string,
		categories: PropTypes.array
	})
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

const ItemBookWithRedux = connect(
	null,
	mapDispatchToProps
)(ItemBook);

export default ItemBookWithRedux;
