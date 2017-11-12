import React from 'react'

const ListBooks = ({books})=>{
	const item = books.map((book,i)=>{
		return(<li key={book.id}>{book.title}</li>)
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