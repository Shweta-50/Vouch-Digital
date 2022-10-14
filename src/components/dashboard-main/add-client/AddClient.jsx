import React from 'react'
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import CreateProfile from './create-profile/CreateProfile';
import ModuleSetup from './module-setup/ModuleSetup';
import Payment from './payment/Payment';
import ThemeSetup from './theme-setup/ThemeSetup';
import './main.scss'
const AddClient = () => {
  return (
  <div className="add-client">
    <div className="row bg-white">
    <Tabs
      defaultActiveKey="profile"
      id="fill-tab-example"
      className="mb-3 py-2 "
      fill
    >
      <Tab eventKey="home" title=" 01 &nbsp; CREATE PROFILE">
       <CreateProfile/>
      </Tab>
      <Tab eventKey="profile" title="02 &nbsp; PAYMENT SETUP">
       <Payment/>
      </Tab>
      <Tab eventKey="longer-tab" title="03 &nbsp; THEME SETUP">
       <ThemeSetup/>
      </Tab>
      <Tab eventKey="contact" title="04 &nbsp; MODULES SETUP" >
       <ModuleSetup/>
      </Tab>
    </Tabs>
    </div>
  </div>
  )
}

export default AddClient