import React from 'react'
import {connect} from 'react-redux'
import {filterCategorySelected} from '../../actions'

class ItemCategorie extends React.Component{
	constructor(props){
		super(props);
	}

	handleClick (e){
		console.log(e.target.id)
		//this.props.setSelectedCategory(e.target.id)
	}
	render(){
		const {categorie} = this.props
		console.log(this.props)
		return(
			<li id={categorie.id} onClick={this.handleClick}>
				{categorie.title}
			</li>
		);
	}
}

const mapStateToProps = (state)=>{
	const {categorieSelected} = state.AppReducer;
	return{
		categorieSelected
	}
}

const mapDispatchToProps = (dispatch)=>{
	return{
		setSelectedCategory(newId){
			dispatch(filterCategorySelected(newId))
		}
	}
}

const ItemCategorieWithRedux = connect(
	mapStateToProps,
	mapDispatchToProps
	)(ItemCategorie)

export default ItemCategorieWithRedux