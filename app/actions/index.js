import {FILTER_TEXT_CHANGED,FILTER_CATEGORY_SELECTED,SET_PAGE} from './types'

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

export const setPage= (id)=>{
	return{
		type: SET_PAGE,
		payload: id
	}
}