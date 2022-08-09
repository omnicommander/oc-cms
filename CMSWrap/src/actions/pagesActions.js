import PagesAPI from '../api/PagesAPI';
import action from './mirrorActions';

export default  function getPagesSuccess(pagesInfo) {
	return {
    type: action.GET_PAGES,
	pagesInfo
  };
}
export function getPagesFailed(message) {
  return {
   type: action.GET_PAGES_FAILED,
   message
  };
}
export function addPageSuccess(pagesInfo) {
	return {
    type: action.GET_PAGES,
	pagesInfo
  };
}
export function addNewPageFailed(message) {
  return {
   type: action.GET_PAGES_FAILED,
   message
  };
}



/*  Data Dispatch Functions */
export function getPages() {
	return (dispatch) => {
		try {
			PagesAPI.getAllPages().then(pagesInfo => {
				dispatch({ type: "GET_PAGES", payload: pagesInfo })
		  	});
		} catch (error) {
			console.log('ERROR:', error.message);  // eslint-disable-line
			return dispatch(getPagesFailed(error.message));
		}
	};
}

export function addNewPage(newPage) {
	return (dispatch) => {
		try {
		PagesAPI.addNewPage(newPage).then(result => {
			
			dispatch(getPages())
		});
		} catch (error) {
		console.log('ERROR:', error.message);  
		return dispatch(addNewPageFailed(error.message));
	}	
	};
}

