import React from 'react'
import { Layout, Breadcrumb } from 'antd';
import Footer from './footer'
import Routes from '../../router/routes';

const { Header, Content} = Layout;

const ContentFrame = () => {
    return <Layout className="site-layout">
        <Header className="site-layout-background" style={{ padding: 0 }} />
        <Content style={{ margin: '0 16px' }}>
            <Breadcrumb style={{ margin: '16px 0' }}>
                <Breadcrumb.Item>Region</Breadcrumb.Item>
                <Breadcrumb.Item>List</Breadcrumb.Item>
            </Breadcrumb>
            <div className="site-layout-background" style={{ padding: 24, minHeight: 360 }}>
                <Routes />
            </div>
        </Content>
        <Footer />
    </Layout>
}

export default ContentFrame