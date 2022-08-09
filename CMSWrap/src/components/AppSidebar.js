import React from 'react'
import { useSelector, useDispatch } from 'react-redux'

import { CSidebar, 
  CSidebarBrand, 
  CSidebarNav, 
  CNavItem,
  CSidebarToggler,
  CButton,
  CCard,
  CCardHeader,
  CCardBody,
  CCardTitle,
  CCardText
} from '@coreui/react'

/* import {  cilSpeedometer, CNavGroup, CNavItem, CNavTitle,  cilFile, cilFolder} from '@coreui/icons' */
import CIcon from '@coreui/icons-react'
import {cilSpeedometer, cilPlus, cilCog, cilFile, cilFolder} from '@coreui/icons'


import { AppSidebarNav } from './AppSidebarNav'

import logo  from 'src/assets/brand/logoWhite&Purp.png'
import SimpleBar from 'simplebar-react'
import 'simplebar/dist/simplebar.min.css'
import * as pagesActions from '../actions/pagesActions'
import * as folderActions from '../actions/folderActions'
import FoldersUI from './FoldersUI'
import PagesUI from './PagesUI'
// sidebar nav config

const AppSidebar = (props) => {

  const dispatch = useDispatch()
  const unfoldable = useSelector((state) => state.sidebarUnfoldable)
  const sidebarShow = useSelector((state) => state.sidebarShow)
  const state = useSelector((state) => state);

  const blankNewPage= {
    page_name: 'New Page',
    customer_id: 0,
    folder_id: 0,
    content: ''
  }
  
  function addNewPage()
  {
    dispatch(pagesActions.addNewPage(blankNewPage));
  }
  
  function addNewFolder()
  {
    dispatch(folderActions.addNewFolder({foldername: 'New Folder'}));
  }

  const navigation = [
    {
      component: CNavItem,
      name: 'Site Dashboard',
      to: '/dashboard',
      icon: <CIcon icon={cilSpeedometer} customClassName="nav-icon" />,
    },
  ]
  

  return (

    <CSidebar
      position="fixed"
      unfoldable={unfoldable}
      visible={sidebarShow}
      onVisibleChange={(visible) => {
        dispatch({ type: 'set', sidebarShow: visible })
      }}
    >

      <CSidebarBrand className="d-none d-md-flex navLogo" to="/">
      <img src={logo} height={80} alt="Logo"/>
      </CSidebarBrand>
      <CSidebarNav>
        <SimpleBar>
        <div className="navPagesControl d-flex justify-content-between align-items-center">
            <div className = "pagesLabel">NAVIGATION</div>


            <div className = "navPagesUI d-flex align-items-center">
            <CButton className="iconOnly" onClick={() => addNewFolder()}><CIcon icon={cilFolder} size="lg"/></CButton>
            <CButton className="iconOnly" onClick={() => addNewPage()}><CIcon icon={cilFile} size="lg"/></CButton>
            </div>
        </div>
          <AppSidebarNav items={navigation} />
          <FoldersUI folders= {state.foldersInfo} />
          <PagesUI pages = {state.pagesInfo} />
        </SimpleBar>
      </CSidebarNav>

      
   
    </CSidebar>
  )
}

export default React.memo(AppSidebar)
