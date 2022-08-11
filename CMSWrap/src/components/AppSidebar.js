import React, {useState, useCallback} from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useNavigate } from "react-router"
import { CSidebar, 
  CSidebarBrand, 
  CNavItem,
  CButton,
  CAccordion,
  CAccordionItem,
  CAccordionHeader,
  CAccordionBody
} from '@coreui/react'
import CIcon from '@coreui/icons-react'
import {cilSpeedometer, cilPlus, cilCog, cilFile, cilFolder} from '@coreui/icons'
import { AppSidebarNav } from './AppSidebarNav'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { thin } from '@fortawesome/fontawesome-svg-core/import.macro'
import logo  from 'src/assets/brand/logoWhite&Purp.png'
import SimpleBar from 'simplebar-react'
import 'simplebar/dist/simplebar.min.css'
import * as pagesActions from '../actions/pagesActions'
import * as folderActions from '../actions/folderActions'
import FoldersUI from './FoldersUI'
import PagesUI from './PagesUI'
import PageDetailsModal from './AppComponents.js/PageDetailsModal'

const AppSidebar = (props) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const state = useSelector((state) => state);
  const unfoldable = useSelector((state) => state.sidebarUnfoldable)
  const sidebarShow = useSelector((state) => state.sidebarShow)
  const [pageModal, setPageModal] = useState(false)
  
  const blankNewPage= {
    page_name: 'New Page',
    customer_id: 0,
    folder_id: 0,
    content: ''
  }
  const viewPage = useCallback((id) => {
    navigate(`/cms/${id}`, {
        state: { id: id}
    });
  });

  function addNewPage()
  {
    dispatch(pagesActions.addNewPage(blankNewPage));
  }
  function addNewFolder()
  {
    dispatch(folderActions.addNewFolder({foldername: 'New Folder'}));
  }
  function editPage(id)
  {
      console.log('Edit Page: ', id );  
  }
  function togglePageModal(id, modalState)
  {
    setPageModal(modalState)
    console.log(id)
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

    <>
    <PageDetailsModal pageModal = {pageModal} setPageModal={setPageModal}/>
    


    <CSidebar
      position="fixed"
      unfoldable={unfoldable}
      visible={sidebarShow}
      hide="true"
      onVisibleChange={(visible) => {
        dispatch({ type: 'set', sidebarShow: visible })
      }}
    >

      <CSidebarBrand className="d-none d-md-flex navLogo" to="/">
      <img src={logo} height={80} alt="Logo"/>
      </CSidebarBrand>
      <CAccordion activeItemKey={2}>
        <CAccordionItem itemKey={1}>
          <CAccordionHeader>NAVIGATION</CAccordionHeader>
          <CAccordionBody>
          <div className="navPagesControl d-flex justify-content-between align-items-center">
            <div className = "navPagesTitle">
            Add / Edit Pages
            </div>
              <div className = "navPagesUI d-flex align-items-center">
              <CButton className="iconOnly" onClick={() => addNewFolder()}><FontAwesomeIcon icon={thin('folder-plus') } size="lg"/></CButton>
              <CButton className="iconOnly" onClick={() => addNewPage()}><FontAwesomeIcon icon={thin('file-plus') } size="lg"/></CButton>
              </div>
          </div>
          <SimpleBar>
                
                  {/* <AppSidebarNav items={navigation} /> */}
                  <ul className = "thePagesNavList d-grid gap-2">
                  <FoldersUI folders= {state.foldersInfo} viewPage={viewPage}/>
                  <PagesUI pages = {state.pagesInfo} viewPage={viewPage} editPage={editPage} toggleEdit = {togglePageModal} toggleState = {pageModal} />
                  </ul>
              </SimpleBar>
          </CAccordionBody>
        </CAccordionItem>
        <CAccordionItem itemKey={2}>
          <CAccordionHeader>DESIGN</CAccordionHeader>
          <CAccordionBody>
          </CAccordionBody>
        </CAccordionItem>
        <CAccordionItem itemKey={3}>
          <CAccordionHeader>SETTINGS</CAccordionHeader>
          <CAccordionBody>
          
          </CAccordionBody>
        </CAccordionItem>
      </CAccordion>
    </CSidebar>
    </>
    
  )
}

export default React.memo(AppSidebar)
