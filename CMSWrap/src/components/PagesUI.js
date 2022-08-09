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

export default function PagesUI (props, {id, name}) {
    const state = useSelector((state) => state);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    
    const viewPage = useCallback((id) => {
        navigate(`/cms/${id}`, {
            state: { id: id}
        });
    });

    const redirectToClients =  useCallback( (theClient, id) => {
        /* dispatch(campaignActions.getCampaignsbyCustomerID(id)) */
        navigate(`/customer-admin/customer/${id}`, {
        state: { theState: state, theClient: theClient.customer }
        });
      });
  
    function editPage(id)
    {
        console.log('Edit Page: ', id )
    }

    
    return (
    <>
       
        <ul className = "thePagesNavList d-grid gap-2">
           {
            state.pagesInfo.map(p => (
                
                    <li key = {p.id}  id={p.id} className = "pagesList dragListItem d-flex justify-content-between" > 
                    {name}
                    
                        <CButton  onClick={() => viewPage(p.id)} className="newPageButton text-left iconOnly">
                            <div className = "pageTitle"><CIcon icon={cilFile} size="lg"/> {p.page_name}</div>
                        </CButton>
     
                        <CButton onClick={() => editPage(p.id)} className="newPageButton text-left iconOnly">
                            <div className = "pageButtonIconCog">  
                                <CIcon icon={cilCog} size="lg"/>
                            </div>
                        </CButton>
                    </li>
            ))
           }
        </ul>   
    </>
    );  
  }

