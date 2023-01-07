import React from 'react'
import { Form, Input, Button, Card } from 'antd'
import { withRouter } from "react-router-dom";
import { masterData } from '../utils/helper'
import { noti } from '../../component/noti'
import api from '../../api'
import {PhoneOutlined,UserOutlined, MailOutlined} from '@ant-design/icons';

const { TextArea } = Input;

const CreateForm = (props) => {

    const layout = {
        labelCol: { span: 8 },
        wrapperCol: {offset: 8, span: 8 },
    };

    const tailLayout = {
        wrapperCol: { offset: 10, span: 16 },
    };

    const onFinish = (values) => {

       // console.log(values, "state divison value")
        const data = { ...values, ...masterData }
         api().post('contact_us', data).then(res => {
            if (res && res.data.status === 200) {
                props.history.push('/contact')
                noti('success', "Contact create successful.")
            } else {
                noti('error', "Something wrong")
            }
        })
    }

    const onFinishFailed = (errorInfo) => {
        console.log(errorInfo, "errorInfo")
    }

    return <div>
        
        <Card>
            <img src="https://skillkot.com/wp-content/uploads/2019/09/contact_us_image_qbluir.png" width="100%" height="200px"></img>
            <br/><br/>
            <div>
            <Form
                onFinish={onFinish}
                onFinishFailed={onFinishFailed}
                {...layout}
            >
                <Form.Item
                    
                    name="name"
                    rules={[{ required: true, message: 'Please input your name!' }]}
                >
                    {/* <Input placeholder="Name" /> */}
                   <Input size="large" placeholder="Name" prefix={<UserOutlined />} />
   
                </Form.Item>
                <Form.Item
                    
                    name="email"
                    rules={[{ required: true, message: 'Please input your email!' }]}
                >
                    {/* <Input placeholder="Email" /> */}
                    <Input size="large" placeholder="Email" prefix={<MailOutlined />} />
    
                </Form.Item>
                <Form.Item
                    
                    name="phone"
                    rules={[{ required: true, message: 'Please input your phone!' }]}
                >
                    {/* <Input placeholder="Phone" /> */}
                    <Input size="large" placeholder="Phone" prefix={<PhoneOutlined />} />
    
                </Form.Item>
                <Form.Item
                    
                    name="description"
                    rules={[{ required: true, message: 'Please input your description!' }]}
                >
                    <TextArea placeholder="Description" rows={3} />
                </Form.Item>
                <Form.Item {...tailLayout}>
                    <Button type="primary" htmlType="submit">
                        Send
                    </Button>&nbsp;
                    <Button onClick={() => props.history.push("/home")}>
                        Cancel
                    </Button>
                </Form.Item>
            </Form>
            </div>
        </Card>
    </div>
}

export default withRouter(CreateForm);