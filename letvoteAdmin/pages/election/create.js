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

        
        const data = { ...values, ...masterData }
        api().post('election', data).then(res => {
            if (res && res.data.status === 200) {
                props.history.push('/election')
                noti('success', "Election create successful.")
            } else {
                noti('error', "Something wrong")
            }
        })
    }

    const onFinishFailed = (errorInfo) => {
        console.log(errorInfo, "errorInfo")
    }

    return <div>
        <Card title="Create Election">
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
                    label="Remark"
                    name="remark"
                >
                    <TextArea rows={3} />
                </Form.Item>
                <Form.Item {...tailLayout}>
                    <Button type="primary" htmlType="submit">
                        Submit
                    </Button>&nbsp;
                    <Button onClick={() => props.history.push("/election")}>
                        Cancel
                    </Button>
                </Form.Item>
            </Form>
        </Card>
    </div>
}

export default withRouter(CreateForm);