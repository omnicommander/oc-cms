// eslint-disable-line
import { combineReducers } from 'redux';

import pagesInfo from './pagesReducer';
import foldersInfo from './foldersReducer';


const rootReducer = combineReducers({
	
	pagesInfo,
	foldersInfo
});

export default rootReducer;
