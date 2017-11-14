import React from 'react'

import ItemBook from './ItemBook'

class ListBooks extends React.Component{
	constructor(props){
		super(props)
	}

	render(){
		const {books} = this.props;
		const item = books.map((book,i)=>{
			return(<ItemBook key={book.id} book={book} />)
		})
		return(
			<ul>
				{item}
			</ul>
		)
	}		
}

export default ListBooks
