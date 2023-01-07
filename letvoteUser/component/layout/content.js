import React from 'react'
import { Layout, Breadcrumb,Menu } from 'antd';
import Footer from './footer'
import Home from '../../pages/home/home'
import { Row, Col,Button } from 'antd';
import { Router } from 'react-router-dom';
import Nav from './nav'
import './layout.css'
import Routes from '../../router/routes'

const { Header, Content} = Layout;

const ContentFrame = (props) => {
    return <Layout className="site-layout">
      <Row>
      <div className="heading">
          <div> <img src="https://ucstaungoo.sharepoint.com/sites/In-CampusInternshipProgram/Shared%20Documents/General/logo_2x-removebg-preview-removebg-preview%20(2).png" /></div>
                <div><h1 style={{textAlign: "center"}}><b> 2020 Myanmar Election</b></h1></div>
          <div><img src="https://upload.wikimedia.org/wikipedia/my/5/5d/Logo_ucst.png" /></div>
        </div>
      </Row>
        <Row>
         
        <Col span={24} >
        <Nav/>
      </Col>
    </Row>
      <Routes/>

    <Footer />
    {/* <Footer style={{ textAlign: 'center' , height: '300px' , background: 'white'}}>Ant Design ©2018 Created by Ant UED</Footer> */}
    </Layout>
}

export default ContentFrame