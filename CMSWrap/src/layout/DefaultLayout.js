import React from 'react'
import { AppContent, AppSidebar, AppFooter, AppHeader } from '../components/index'

const DefaultLayout = (props) => {
  console.log(props)
  return (
    <div>
      <AppSidebar theInitialPages={props}/>
      <div className="wrapper d-flex flex-column min-vh-100 bg-light">
        <AppHeader />
        <div className="body flex-grow-1">
          <AppContent />
        </div>

      </div>
    </div>
  )
}

export default DefaultLayout
