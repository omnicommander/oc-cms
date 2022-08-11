import React, {useEffect, useState, useCallback, useReducer} from 'react'
import { useSelector, useDispatch } from 'react-redux'
import * as pagesActions from '../../actions/pagesActions'
import * as folderActions from '../../actions/folderActions'
import { CSidebar, 
    CButton,
    CModal,
    CModalHeader,
    CModalTitle,
    CModalBody,
    CModalFooter
  
  } from '@coreui/react'
export default function PageDetailsModal (props) {
    const dispatch = useDispatch();
    const state = useSelector((state) => state);


return (
   <>
    <CModal alignment="center" visible={props.pageModal} onClose={() => props.setPageModal(false)}>
        <CModalHeader onClose={() => props.setPageModal(false)}>
            <CModalTitle>Edit Page Details</CModalTitle>
        </CModalHeader>
        <CModalBody>

        </CModalBody>
        <CModalFooter>
            <CButton color="secondary" onClick={() => props.setPageModal(false)}>
                Close
            </CButton>
            <CButton color="primary">Save changes</CButton>
        </CModalFooter>
    </CModal>   
   </>
    );  
  }

PageDetailsModal.propTypes = {
   setPageModal: [],
   pageModal: []
}
PageDetailsModal.defaultProps = {
   setPageModal: [],
   pageModal: []
}




