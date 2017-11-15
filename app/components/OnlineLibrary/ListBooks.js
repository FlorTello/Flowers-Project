import React from 'react'
import {connect} from 'react-redux'
import { withStyles } from 'material-ui/styles';
import Card, { CardActions, CardContent, CardMedia } from 'material-ui/Card';
import Button from 'material-ui/Button';
import Typography from 'material-ui/Typography';
import Grid from 'material-ui/Grid';
import {SetOpenModal} from '../../actions'


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

class ListBooks  extends React.Component {
	constructor(pros){
		super(pros);
	}
	
	handleClickOpen = () => {
		this.props.setOpenModal(true);
	  };
	  
	render(){
		const {books} = this.props;
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
							 <Button dense color="primary" onClick={this.handleClickOpen}>
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

const mapStateToProps = (state)=>{
	const {openModal} = state.AppReducer;
	return{
		openModal
	}
}

const mapDispatchToProps = (dispatch)=>{
	return{
		setOpenModal(open){
			dispatch(SetOpenModal(open))
		}
	}
}

const ListBooksWithRedux = connect(
	mapStateToProps,
	mapDispatchToProps
	)(ListBooks)

export default ListBooksWithRedux
