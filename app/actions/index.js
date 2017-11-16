import {FILTER_TEXT_CHANGED,FILTER_CATEGORY_SELECTED,SET_MODAL,TOGGLE_MODAL} from './types'

//action creators
export const filterTextChanged = (text)=>{
	return{
		type: FILTER_TEXT_CHANGED,
		payload: text
	}
}

export const filterCategorySelected = (id)=>{
	return{
		type: FILTER_CATEGORY_SELECTED,
		payload: id
	}
}

export const setModal = (id)=>{
	return{
		type: SET_MODAL,
		payload: id
	}
}

export const toggleModal = ()=>{
	return{
		type: TOGGLE_MODAL
	}
}