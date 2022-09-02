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
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { thin } from '@fortawesome/fontawesome-svg-core/import.macro'


export default function PagesUI (props, {id, name}) {
    console.log(props)
    const state = useSelector((state) => state);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    


    const redirectToClients =  useCallback( (theClient, id) => {
        /* dispatch(campaignActions.getCampaignsbyCustomerID(id)) */
        navigate(`/customer-admin/customer/${id}`, {
        state: { theState: state, theClient: theClient.customer }
        });
      });
  

    return (
    <>
        {
        state.pagesInfo.map(p => (
            <>
            {p.folder_id
                ? 
                <li key = {p.id}  id={p.id} className = "pagesList dragListItem d-flex justify-content-between" > 
                    {name}
                
                    <CButton  onClick={() => props.viewPage(p)} className="newPageButton text-left iconOnly">
                        <div className = "pageTitle">
                            <FontAwesomeIcon icon={thin('file') } size=""/> {p.page_name}
                        </div>
                        {console.log(p.id)}
                    </CButton>
                    <CButton onClick={() => props.toggleEdit(p.id, !props.toggleState)} className="newPageButton text-left iconOnly">
                        <div className = "pageButtonIconCog">  
                            <FontAwesomeIcon icon={thin('cog') } size=""/>
                        </div>
                    </CButton>
                </li>
                    
                : 
                <></>
            }
            </>
        ))
        }
    </>
    );  
  }
PagesUI.propTypes = {
    viewPage: [],
    editPage: [],
    toggleEdit: [],
    toggleState: []
}
PagesUI.defaultProps = {
    viewPage: [],
    editPage: [],
    toggleEdit: [],
    toggleState: []
}
