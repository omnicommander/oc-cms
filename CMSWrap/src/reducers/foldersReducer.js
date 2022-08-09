// eslint-disable-line
import initialState from './initailState';

export default function pagesReducer(state = initialState.foldersInfo, action) {

	switch (action.type) {
		case 'GET_FOLDERS':
			return action.payload;
		default:
			return state;
	}

}