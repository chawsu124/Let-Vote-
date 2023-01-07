// import React, { useState } from "react"
// import './App.css'
// import {Table, Form, Input,Button,Card, Layout} from 'antd'
// const Emp = () => {
//     let students = [
//         { id: 1, name: "Mg Mg", year: "5th", major: "CS" },
//         { id: 2, name: "Hla Mg", year: "5th", major: "CS" },
//         { id: 3, name: "Aye Aye", year: "4th", major: "CT" },
//         { id: 4, name: "Mya Mya", year: "5th", major: "CT" },
//         { id: 5, name: "Su Su", year: "3rd", major: "CS" },
//         { id: 6, name: "Zaw Zaw", year: "4th", major: "CS" },
//         { id: 7, name: "Hnin Hnin", year: "5th", major: "CS" },
//         { id: 8, name: "Aye Aye", year: "4th", major: "CT" },
//         { id: 9, name: "Aung Aung", year: "2nd", major: "CT" },
//         { id: 10, name: "Moe Moe", year: "3rd", major: "CT" }
//     ]
//     let columns = [
//         {
//             title: 'Id',
//             dataIndex: 'id',
//             key: 'id'
//         },
//         {
//             title: 'Name',
//             dataIndex: 'name',
//             key: 'name'
//         },
//         {
//             title: 'Year',
//             dataIndex: 'year',
//             key: 'year'
//         },
//         {
//             title: 'Major',
//             dataIndex: 'major',
//             key: 'major'
//         }
//     ]
//     const [data, setData] = useState(students)
//     const [item, setItem] = useState({})
//     const remove = (id) => {
//         let studentlist = data.filter((item) => item.id != id)
//         setData(studentlist)
//     }
//     const detail = (id) => {
//         let student = data.filter((item) => item.id == id)
//         const { name, year, major } = student[0]
//         let result = `${name} ${year} ${major}`
//         alert(result)
//     }
//     const edit = (id) => {
//         let student = data.filter((item) => item.id == id)
//         setItem(student[0])

//     }
//     const handleSubmit = (e) => {
//         if (item.id) {
//             let result = data.map((res) => {
//                 if (res.id == item.id) {
//                     return item
//                 }
//                 return res
//             })
//             setData(result, "result")
//         }
//         else {
//             setData(
//                 [
//                     ...data,
//                     {
//                         ...item, id: data.length + 1
//                     }
//                 ])

//         }
//         e.preventDefault();
//     }
//     const handleChange = (e) => {
//         item[e.target.name] = e.target.value;
//         setItem(item)

//     }
//     const Layout={
//         labelCol: {span:2},
//         wrapperCol: {span: 10}
//     }

//     return <Card>
//     <div>
       
//         <div>
//             <Form
//             {...Layout}
//             onFinish={handleSubmit}
//             >
//                 <Form.Item label="Name" name="name">
//                 <Input />
//                 </Form.Item>
//                 <Form.Item label="Year" name="year">
//                 <Input />
//                 </Form.Item>
//                 <Form.Item label="Major" name="major">
//                 <Input />
//                 </Form.Item>
//                 <Form.Item>
//                     <Button type="primary" htmlType="submit">Submit</Button>
//                 </Form.Item>
//                 </Form>
//             {/* <form onSubmit={handleSubmit}>
//                 <label>Name</label>
//                 <input type="text" name="name" onChange={handleChange} defaultValue={item.name} /><br />

//                 <label>Year</label>
//                 <input type="text" name="year" onChange={handleChange} defaultValue={item.year} /><br />

//                 <label>Major</label>
//                 <input type="text" name="major" onChange={handleChange} defaultValue={item.major} /><br />
//                 <button type="submit">Submit</button>

//             </form> */}
//         </div>
//         <br />
//         <br />
//         <Table dataSource={data} columns={columns} />
//     </div>
//     </Card>
// }
// export default Emp;


import React, { useState } from 'react'
import { Layout, Menu,Breadcrumb } from 'antd';
import { Row, Col, Divider } from 'antd';
import { Link, Router } from 'react-router-dom'
const { Header, Content, Footer } = Layout;
const { Sider } = Layout;
const { SubMenu } = Menu;


const Side = () => {

    const [collapse, setCollapse] = useState(false)

    const onCollapse = () => {
        setCollapse(!collapse)
    }

    return <Layout className="layout">
    <Header>
      <div className="logo" />
      <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['2']}>
      
        <Menu.Item key="1">nav 1</Menu.Item>
        <Menu.Item key="2">nav 2</Menu.Item>
        <Menu.Item key="3">nav 3</Menu.Item>
      </Menu>
    </Header>
    
        <Divider orientation="left">Percentage columns</Divider>
    <Row>
      <Col flex={3} style={{ backgroundColor: 'yellow', width: '50%', height: '500px' }}>Party</Col>
      <Col flex={3} style={{ backgroundColor: 'green', width: '50%', height: '500px' }}>News</Col>
    </Row>
        
      {/* <div className="site-layout-content">Content</div> */}
    
    <Footer style={{ textAlign: 'center' }}>Ant Design ©2018 Created by Ant UED</Footer>
  </Layout>
  
};

export default Side;
