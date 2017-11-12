import {FILTER_TEXT_CHANGED} from './types'

//action creators
export const filterTextChanged = (text)=>{
	return{
		type: FILTER_TEXT_CHANGED,
		payload: text
	}
}
