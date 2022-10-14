import React from 'react'
import RightSection from '../../components/dashboard-main/RightSection'
import Sidebar from '../../components/sidebar/Sidebar'
import './dashboard.scss'
const Dashboard = () => {
  return (
    <div className="row dashboard-container d-flex ">
        <Sidebar/>
        <RightSection/>
    </div>
  )
}

export default Dashboard