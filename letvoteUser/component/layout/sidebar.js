// import React, { useState } from 'react'
// import { Layout, Menu } from 'antd';
// import {
//     HomeOutlined,
//     FileOutlined,
//     TeamOutlined,
// } from '@ant-design/icons';
// import { Link } from 'react-router-dom'
// import { withRouter } from "react-router-dom";
// import { LogoutOutlined } from '@ant-design/icons';
// import { noti } from '../noti';
// import { OmitProps } from 'antd/lib/transfer/ListBody';
// import { DispatchContext } from '../../context/global'

// const { Sider } = Layout;
// const { SubMenu } = Menu;

// const handleLogout = (props) => {
//     dispatchEvent({ type: "SET_USER", user: false })
//     noti('success', "Logout")
//     props.history.push('/login')
// }


// const SideBarMenu = () => {

//     const [collapse, setCollapse] = useState(false)

//     const onCollapse = () => {
//         setCollapse(!collapse)
//     }

//     return <Sider collapsible collapsed={collapse} onCollapse={onCollapse}>
//         <div className="logo" />
//         <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline">
//             <SubMenu key="sub1" icon={<HomeOutlined />} title="Region">
//                 <Menu.Item key="1"><Link to="/state-division">State/Division</Link></Menu.Item>
//                 <Menu.Item key="2"><Link to="/district">District</Link></Menu.Item>
//                 <Menu.Item key="3"><Link to="/township">Township</Link></Menu.Item>
//                 <Menu.Item key="4"><Link to="/town">Town</Link></Menu.Item>
//                 <Menu.Item key="5"><Link to="/wards">Ward</Link></Menu.Item>
//                 <Menu.Item key="6"><Link to="/village_tract">Village Tract</Link></Menu.Item>
//                 <Menu.Item key="7"><Link to="/village">Village</Link></Menu.Item>
//             </SubMenu>
//             <Menu.Item key="8"><Link to="/election">Election</Link></Menu.Item>
//             <Menu.Item key="9"><Link to="/constituency">Constituency</Link></Menu.Item>
//             <Menu.Item key="10"><Link to="/party">Party</Link></Menu.Item>
//             <Menu.Item key="11"><Link to="/office">Office</Link></Menu.Item>
//             <Menu.Item key="12"><Link to="/parliament">Parliament</Link></Menu.Item>
//             <Menu.Item key="13"><Link to="/candidates">Candidate</Link></Menu.Item>
//             <Menu.Item key="14"><Link to="/voter_list">Voterlist</Link></Menu.Item>
//             <Menu.Item key="15"><Link to="/news">News</Link></Menu.Item>
//             <Menu.Item key="16" icon={<LogoutOutlined />} onClick={handleLogout}>Logout</Menu.Item>

//         </Menu>
//     </Sider>
// }

// export default withRouter(SideBarMenu)