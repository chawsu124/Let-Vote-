import React, { useState, useContext } from 'react'
import { Layout, Menu } from 'antd';
import {
    HomeOutlined,
    LogoutOutlined,
    TeamOutlined,
} from '@ant-design/icons';
import { Link, withRouter} from 'react-router-dom';
import {DispatchContext} from '../../context/global';
import {noti} from '../noti';
import { OmitProps } from 'antd/lib/transfer/ListBody';

const { Sider } = Layout;
const { SubMenu } = Menu;


const SideBarMenu = (props) => {

    const [collapse, setCollapse] = useState(false)
    const dispatch = useContext(DispatchContext);

    const onCollapse = () => {
        setCollapse(!collapse)
    }

    // const handleLogout =() => {
    //     dispatch({type: "SET_USER", user: false})
    //     noti('success', "Logout")
    //     props.history.push('/login')
    // }

    return <Sider collapsible collapsed={collapse} onCollapse={onCollapse}>
        <div className="logo" />
        <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline">
            <SubMenu key="sub1" icon={<HomeOutlined />} title="Region">
                <Menu.Item key="1"><Link to="/state_division">State/Division</Link></Menu.Item>
                <Menu.Item key="2"><Link to="/district">District</Link></Menu.Item>
                <Menu.Item key="3"><Link to="/township">Township</Link></Menu.Item>
                <Menu.Item key="4"><Link to="/town">Town</Link></Menu.Item>
                <Menu.Item key="5"><Link to="/wards">Wards</Link></Menu.Item>
                <Menu.Item key="6"><Link to="/village_tract">Village Tract</Link></Menu.Item>
                <Menu.Item key="7"><Link to="/village">Village</Link></Menu.Item>
                
                {/* <Menu.Item key="3">Alex</Menu.Item> */}
            </SubMenu>
            {/* <SubMenu key="sub2" icon={<TeamOutlined />} title="About Election"> */}
            <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline">
                <Menu.Item key="8"><Link to="/election">Election</Link></Menu.Item>
                <Menu.Item key="9"><Link to="/parliament">Parliament</Link></Menu.Item>
                <Menu.Item key="10"><Link to="/office">Office</Link></Menu.Item>
                <Menu.Item key="11"><Link to="/party">Party</Link></Menu.Item>
                <Menu.Item key="12"><Link to="/constituency">Constituency</Link></Menu.Item>
                <Menu.Item key="13"><Link to="/candidates">Candidates</Link></Menu.Item>
                <Menu.Item key="14"><Link to="/voter_list">Voter List</Link></Menu.Item>
                <Menu.Item key="15"><Link to="/news">News</Link></Menu.Item>
                <Menu.Item key="16"><Link to="/contact_us">Contact Us</Link></Menu.Item>
            </Menu>
           {/* <Menu.Item key="17" icon={<LogoutOutlined />} onClick={handleLogout}>Logout</Menu.Item>
            {/* <Menu.Item key="6" icon={<FileOutlined />} /> */}
        </Menu>
    </Sider>
}

export default SideBarMenu