import FoldersAPI from '../api/FoldersAPI';
import action from './mirrorActions';

export default  function getFoldersSuccess(FoldersInfo) {
	return {
    type: action.GET_FOLDERS,
	FoldersInfo
  };
}
export function getFoldersFailed(message) {
  return {
   type: action.GET_FOLDERS_FAILED,
   message
  };
}
export function addFoldersuccess(FoldersInfo) {
	return {
    type: action.GET_FOLDERS,
	FoldersInfo
  };
}
export function addNewFolderFailed(message) {
  return {
   type: action.GET_FOLDERS_FAILED,
   message
  };
}
/*  Data Dispatch Functions */
export function getFolders() {
	return (dispatch) => {
		try {
			FoldersAPI.getAllFolders().then(foldersInfo => {
				dispatch({ type: "GET_FOLDERS", payload: foldersInfo })
		  	});
		} catch (error) {
			console.log('ERROR:', error.message);  // eslint-disable-line
			return dispatch(getFoldersFailed(error.message));
		}
	};
}

export function addNewFolder(newFolderTitle) {
    console.log(newFolderTitle)
	return (dispatch) => {
		try {
		FoldersAPI.addNewFolder(newFolderTitle).then(result => {
			dispatch(getFolders())
		});
		} catch (error) {
		console.log('ERROR:', error.message);  
		return dispatch(addNewFolderFailed(error.message));
	}	
	};
}

