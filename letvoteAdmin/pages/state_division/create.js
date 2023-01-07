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
         api().post('state_division', data).then(res => {
            if (res && res.data.status === 200) {
                props.history.push('/state_division')
                noti('success', "State Division create successful.")
            } else {
                noti('error', "Something wrong")
            }
        })
    }

    const onFinishFailed = (errorInfo) => {
        console.log(errorInfo, "errorInfo")
    }

    return <div>
        <Card title="Create State/Division">
            <Form
                onFinish={onFinish}
                onFinishFailed={onFinishFailed}
                {...layout}
            >
                <Form.Item
                    label="Code"
                    name="code"
                    rules={[{ required: true, message: 'Please input your code!' }]}
                >
                    <Input />
                </Form.Item>
                <Form.Item
                    label="Name"
                    name="name"
                    rules={[{ required: true, message: 'Please input your name!' }]}
                >
                    <Input />
                </Form.Item>
                <Form.Item
                    label="Remark"
                    name="remark"
                >
                    <TextArea rows={3} />
                </Form.Item>
                <Form.Item {...tailLayout}>
                    <Button type="primary" htmlType="submit">
                        Submit
                    </Button>&nbsp;
                    <Button onClick={() => props.history.push("/state_division")}>
                        Cancel
                    </Button>
                </Form.Item>
            </Form>
        </Card>
    </div>
}

export default withRouter(CreateForm);