import React from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import {filterCategorySelected} from '../../actions';

class ItemCategory extends React.Component{
	constructor(props){
		super(props);
		this.handleClick= this.handleClick.bind(this);
	};

	handleClick (e){
		console.log(e.target.id);
		this.props.setSelectedCategory(e.target.id)
	};

	render(){
		const {category} = this.props;
		console.log("Componente ItemCategory: ",this.props);

		return(
			<li 
				id={category.id} 
				onClick={this.handleClick}
			>
				{category.title}
			</li>
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
			dispatch(filterCategorySelected(newId))
		}
	}
}

const ItemCategoryWithRedux = connect(
	null,
	mapDispatchToProps
)(ItemCategory)

export default ItemCategoryWithRedux