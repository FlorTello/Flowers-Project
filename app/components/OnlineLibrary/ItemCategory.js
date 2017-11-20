import React from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import {filterCategorySelected} from '../../actions';
import { withStyles } from 'material-ui/styles';
import ButtonBase from 'material-ui/ButtonBase';
import Typography from 'material-ui/Typography';
import Grid from 'material-ui/Grid';

const styles = theme => ({
  root: {
    flexGrow: 1,
       marginTop: 30,
  },
  image: {
		'z-index': '1000',
    position: 'relative',
    height: 300,
    width: '100% !important', // Overrides inline-style
    [theme.breakpoints.down('sm')]: {
      width: '100% !important', // Overrides inline-style
    },
    '&:hover': {
      zIndex: 1,
    },
    '&:hover $imageBackdrop': {
      opacity: 0.15,
    },
    '&:hover $imageMarked': {
      opacity: 0,
    },
    '&:hover $imageTitle': {
      border: '4px solid currentColor',
    },
  },
  imageButton: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: theme.palette.common.white,
  },
  imageSrc: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    backgroundSize: 'cover',
    backgroundPosition: 'center 40%',
  },
  imageBackdrop: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    background: theme.palette.common.black,
    opacity: 0.4,
    transition: theme.transitions.create('opacity'),
  },
  imageTitle: {
    position: 'relative',
    padding: `${theme.spacing.unit * 2}px ${theme.spacing.unit * 4}px ${theme.spacing.unit + 6}px`,
  },
  imageMarked: {
    height: 3,
    width: 18,
    background: theme.palette.common.white,
    position: 'absolute',
    bottom: -2,
    left: 'calc(50% - 9px)',
    transition: theme.transitions.create('opacity'),
  },
});

class ItemCategory extends React.Component{
	constructor(props){
		super(props);
		this.handleClick= this.handleClick.bind(this);
	};

	handleClick (e){
		console.log('evento');
		console.log(e);
		this.props.setSelectedCategory(e.target.id)
	};

	render(){
		const { classes } = this.props;
		const {category} = this.props;
		console.log("Componente ItemCategory: ",this.props);
		return(
				<Grid item xs={6} sm={6} >
	        <ButtonBase
	          focusRipple
						key = {category.title}
	          className={classes.image}
	          style={{
	            width: category.width,
	          }}
	        >
	          <div

	            className={classes.imageSrc}
	            style={{
	              backgroundImage: `url(${category.url})`,
	            }}
	          />
	          <div className={classes.imageBackdrop} />
	          <div className={classes.imageButton} id={category.id} onClick={this.handleClick}>
	            <Typography
	              component="h3"
	              type="subheading"
	              color="inherit"
	              className={classes.imageTitle}
	            >
	              {category.title}
	              <div className={classes.imageMarked} />
	            </Typography>
	          </div>
	        </ButtonBase>
	        </Grid>
		)
	};
}

ItemCategory.propTypes = {
	category: PropTypes.shape({
		id: PropTypes.number,
		url: PropTypes.string,
		title: PropTypes.string,
		width: PropTypes.string
	})
}

const mapDispatchToProps = (dispatch)=>{
	return{
		setSelectedCategory(newId){
			debugger;
			dispatch(filterCategorySelected(newId))
		}
	}
}

const ItemCategoryWithRedux = connect(
	null,
	mapDispatchToProps
)(ItemCategory)

export default withStyles(styles)(ItemCategoryWithRedux);
