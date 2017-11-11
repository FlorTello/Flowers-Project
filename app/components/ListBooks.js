import React from 'react'

const ListBooks = ({books})=>{
	const item = books.map((book,i)=>{
		return(<li>{book.title}</li>)
	})
	return(
		<div>
			<ul>
				{item}
			</ul>
		</div>
	);
}

export default ListBooks