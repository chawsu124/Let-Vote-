import React from 'react'
import { Form, Input, Button, Card } from 'antd'
import { withRouter } from "react-router-dom";
import { masterData } from '../utils/helper'
import { noti } from '../../component/noti'
import api from '../../api'

const { TextArea } = Input;

const CreateForm = (props) => {

    const layout = {
        labelCol: { span: 8 },
        wrapperCol: { span: 8 },
    };

    const tailLayout = {
        wrapperCol: { offset: 8, span: 16 },
    };

    const onFinish = (values) => {

       // console.log(values, "state divison value")
        const data = { ...values, ...masterData }
         api().post('contact_us', data).then(res => {
            if (res && res.data.status === 200) {
                props.history.push('/contact_us')
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
        <Card title="Create Contact">
            <Form
                onFinish={onFinish}
                onFinishFailed={onFinishFailed}
                {...layout}
            >
                <Form.Item
                    label="Name"
                    name="name"
                    rules={[{ required: true, message: 'Please input your name!' }]}
                >
                    <Input />
                </Form.Item>
                <Form.Item
                    label="Email"
                    name="email"
                    rules={[{ required: true, message: 'Please input your email!' }]}
                >
                    <Input />
                </Form.Item>
                <Form.Item
                    label="phone"
                    name="phone"
                    rules={[{ required: true, message: 'Please input your phone!' }]}
                >
                    <Input />
                </Form.Item>
                <Form.Item
                    label="Description"
                    name="description"
                    rules={[{ required: true, message: 'Please input your description!' }]}
                >
                    <TextArea rows={3} />
                </Form.Item>
                <Form.Item {...tailLayout}>
                    <Button type="primary" htmlType="submit">
                        Submit
                    </Button>&nbsp;
                    <Button onClick={() => props.history.push("/contact_us")}>
                        Cancel
                    </Button>
                </Form.Item>
            </Form>
        </Card>
    </div>
}

export default withRouter(CreateForm);