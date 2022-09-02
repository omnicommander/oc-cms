import React, {useCallback, useState} from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useNavigate } from "react-router"
import PagesUI from './PagesUI'
import {
    CCol,
    CRow,
    CButton,

    CCard, 
    CCardHeader,
    CCardTitle,
    CCardText,
    CCardBody,
    CCardFooter,
    CCollapse
} from '@coreui/react'
import CIcon from '@coreui/icons-react'
import {cilPlus, cilCog, cilFile, cilFolder} from '@coreui/icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { thin } from '@fortawesome/fontawesome-svg-core/import.macro'

export default function FoldersUI (props, {id, name}) {
    const state = useSelector((state) => state);

    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [folderState, setFolderState] = useState(false);
    function editFolder(id)
    {
        console.log('Edit Folder: ', id )
    }
    return (
    <> 
           {
            state.foldersInfo.map(f => (
                <>
                <li key = {f.id}  id={f.id} className = "folderList" > 
                    <div className="d-flex justify-content-between">
                        <CButton className="folderBtn" onClick={() => setFolderState(!folderState)}>
                            {name} <div className = "pageTitle"><FontAwesomeIcon icon={thin('folder') } size=""/> {f.foldername}</div>
                        </CButton>
                        <CButton onClick={() => editFolder(f.id)} className="newPageButton text-left iconOnly">
                            <div className = "pageButtonIconCog">  
                                <FontAwesomeIcon icon={thin('cog') } size=""/>
                            </div>
                        </CButton>
                    </div>
                    <CCollapse className="innerFolder" visible={folderState}>
                    <CCard className="folderCard">
                        <CCardBody className = "folderBody">
                        <ul className = "thePagesNavList d-grid gap-2">
                        {state.pagesInfo.map(p => (
                            <>
                            {p.folder_id
                            ? 
                            <></>   
                            : 
                            <li key = {p.id}  id={p.id} className = "pagesList dragListItem d-flex justify-content-between" > 
                                {name}
                                <CButton  onClick={() => props.viewPage(p.id)} className="newPageButton text-left iconOnly">
                                    <div className = "pageTitle">
                                        <FontAwesomeIcon icon={thin('file') } size=""/> {p.page_name}
                                    </div>
                                </CButton>
                                <CButton onClick={() => props.toggleEdit(p.id, !props.toggleState)} className="newPageButton text-left iconOnly">
                                    <div className = "pageButtonIconCog">  
                                        <FontAwesomeIcon icon={thin('cog') } size=""/>
                                    </div>
                                </CButton>
                            </li>
                        }
                        </>
                            
                        ))}
                        </ul>
                        </CCardBody>
                    </CCard>
                    </CCollapse>
                </li>
                </>
               
            ))
           }

    </>
    );  
  }


FoldersUI.propTypes = {
    viewPage: [],
    editPage: [],
    toggleEdit: [],
    toggleState: []

}
FoldersUI.defaultProps = {
    viewPage: [],
    editPage: [],
    toggleEdit: [],
    toggleState: []
}
