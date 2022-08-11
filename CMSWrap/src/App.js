import React, {Suspense, useState, useEffect, useCallback} from 'react'
import { HashRouter, Route, Routes} from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { Provider } from 'react-redux'
import PropTypes from "prop-types";
import * as thePagesActions from './actions/pagesActions';
import * as theFolderActions from './actions/folderActions';
import store from './store/store'
import './scss/style.scss'

const loading = (
  <div className="pt-3 text-center">
    <div className="sk-spinner sk-spinner-pulse"></div>
  </div>
)

// Containers
const DefaultLayout = React.lazy(() => import('./layout/DefaultLayout'))
  function App(props) {
    const state = useSelector((state) => state);
    const dispatch = useDispatch();
    useEffect(() =>{
      const fetchInitialData = async () => {
      dispatch(theFolderActions.getFolders());
      dispatch(thePagesActions.getPages());
      };
      fetchInitialData();
    }, []);
  return (
    <Provider store={store}>  
    <HashRouter>
      <Suspense fallback={loading}>

        <Routes><Route path="*" name="Home" element={<DefaultLayout theInitial={state}/>} /></Routes>

      </Suspense>
    </HashRouter>
    </Provider>
  )
}
export default App





