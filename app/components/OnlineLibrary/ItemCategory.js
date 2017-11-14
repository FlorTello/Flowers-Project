import React from 'react'
import {connect} from 'react-redux'
import {filterCategorySelected} from '../../actions'

class ItemCategory extends React.Component{
	constructor(props){
		super(props);
		this.handleClick= this.handleClick.bind(this);
	}

	handleClick (e){
		console.log(e.target.id)
		this.props.setSelectedCategory(e.target.id)
	}
	render(){
		const {category} = this.props
		console.log("Componente ItemCategory: ",this.props);
		return(
			<li 
				id={category.id} 
				onClick={this.handleClick}
			>
				{category.title}
			</li>
		);
	}
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