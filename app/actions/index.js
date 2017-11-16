import {
	FILTER_TEXT_CHANGED,
	FILTER_CATEGORY_SELECTED,
	SET_PAGE,
	SET_MODAL,
	TOGGLE_MODAL
} from './types'

//action creators
export const filterTextChanged = (text)=>{
	return{
		type: FILTER_TEXT_CHANGED,
		payload: text
	}
}

export const filterCategorySelected = (idCategory)=>{
	return{
		type: FILTER_CATEGORY_SELECTED,
		payload: idCategory
	}
}

export const setPage= (index)=>{
	return{
		type: SET_PAGE,
		payload: index
	}
}
export const setModal = (idBook)=>{
	return{
		type: SET_MODAL,
		payload: idBook
	}
}

export const toggleModal = ()=>{
	return{
		type: TOGGLE_MODAL
	}
}