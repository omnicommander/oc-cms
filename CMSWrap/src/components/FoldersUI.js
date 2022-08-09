import React, {useCallback} from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useNavigate } from "react-router"

import {
    CCol,
    CRow,
    CButton,

    CCard, 
    CCardHeader,
    CCardTitle,
    CCardText,
    CCardBody,
    CCardFooter
} from '@coreui/react'
import CIcon from '@coreui/icons-react'
import {cilPlus, cilCog, cilFile, cilFolder} from '@coreui/icons'

export default function FoldersUI (props, {id, name}) {
    const state = useSelector((state) => state);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    function editFolder(id)
    {
        console.log('Edit Folder: ', id )
    }

    
    return (
    <> 
        <ul className = "thePagesNavList d-grid gap-2">
           {
            state.foldersInfo.map(p => (
                <li key = {p.id}  id={p.id} className = "d-flex justify-content-between folderList" > 
                {name} <div className = "pageTitle"><CIcon icon={cilFolder} size="lg"/> {p.foldername}</div>
                </li>
            ))
           }
        </ul>   
    </>
    );  
  }

