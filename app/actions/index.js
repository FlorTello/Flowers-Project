import {FILTER_TEXT_CHANGED,FILTER_CATEGORY_SELECTED,SET_MODAL,OPEN_MODAL} from './types'

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

export const ViewDatilBookSelected = (id)=>{
	return{
		type: SET_MODAL,
		payload: id
	}
}

export const SetOpenModal = (newState)=>{
	return{
		type: OPEN_MODAL,
		payload: newState
	}
}