import React from 'react'
import {connect} from 'react-redux'
import {filterTextChanged} from '../../actions'
import TextField from 'material-ui/TextField';

class SearchBar extends React.Component{
	constructor(props){
		super(props);
		this.handleChange = this.handleChange.bind(this)
	}

	handleChange(e){
		console.log(e.target.value);
		this.props.setFilterText(e.target.value);
	}

	render(){
		const style={
			form:{
				margin: '10px 0',
				width:'100%'
			}
		}
		return(
			<form style={style.form}>
				<TextField
						placeholder= "Read Now"
						value={this.props.filterText}
						onChange={this.handleChange}
				/>
			</form>
		)
	}
}

const mapStateToProps = (state)=>{
	const {filterText} = state.AppReducer;
	return{
		filterText
	}
}

const mapDispatchToProps = (dispatch)=>{
	return{
		setFilterText(newFilterText){
			dispatch(filterTextChanged(newFilterText))
		}
	}
}

const SearchBarWithRedux = connect(
	mapStateToProps,
	mapDispatchToProps
	)(SearchBar)
export default SearchBarWithRedux
