// eslint-disable-line
import initialState from './initailState';

export default function pagesReducer(state = initialState.pagesInfo, action) {

	switch (action.type) {
		case 'GET_PAGES':
			return action.payload;
		default:
			return state;
	}

}