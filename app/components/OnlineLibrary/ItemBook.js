import React from 'react'

class ItemBook extends React.Component{
	constructor(props){
		super(props)
	}
	render(){
		const {book} = this.props
		return(
			<li id={book.id}>
				{book.title}
			</li>
		)
	}
}

export default ItemBook
