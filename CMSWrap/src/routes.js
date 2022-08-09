import React from 'react'
const CMS = React.lazy(() => import('./views/cms/CMS'))
const Dashboard = React.lazy(() => import('./views/dashboard/Dashboard'))



const routes = [
  { path: '/', exact: true, name: 'Home', element: Dashboard },
  { path: '/cms/:id', name: 'CMS', element: CMS}
]

export default routes
