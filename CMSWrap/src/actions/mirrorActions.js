 // eslint-disable-line
 import keyMirror from 'keymirror';


 const action = keyMirror({
   // ajax calls
   BEGIN_AJAX_CALL: null,
   AJAX_CALL_ERROR: null, 
   //Interface Items
   SIDEBAR: true,
   // authorization


  
//Folder Info
GET_FOLDERS_FAILED: null,
GET_FOLDERS: null,
   //Page Info
   
   GET_PAGES_FAILED: null,
   GET_PAGES: null,
   // Error calls
   ERROR_SET_SUCCESS: null,
   ERROR_SET_FAILED: null,
 
   // loading status
   BEGIN_LOADING: null,
   END_LOADING: null,
 
  
 });
 
 export default action;
 