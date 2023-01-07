import React, { useEffect, useState } from 'react'
import { withRouter } from "react-router-dom";
import { Form, Input, Button, Card } from 'antd'
import { noti } from '../../component/noti'
import api from '../../api'

const { TextArea } = Input;

const ParliamentUpdate = (props) => {

    const id = props.match.params.id
    const [state, setState] = useState('')

    useEffect(() => {
        (async () => {
            api().get(`parliament/${id}`)
                .then(result => {
                    result.data.status == 200 && setState(result.data.data)
                })
        })()
    }, [])

    const layout = {
        labelCol: { span: 8 },
        wrapperCol: { span: 8 },
    };

    const tailLayout = {
        wrapperCol: { offset: 8, span: 16 },
    };


    const onFinish = (values) => {
        api().put(`parliament/${values.id}`, values).then(res => {
            if(res && res.data.status === 200){
                noti('success', "parliament updated successful.")
                props.history.push('/parliament')
            }else{
                noti('error', "Something wrong")
            }
        })
    }

    const onFinishFailed = (error) => {
        console.log(error)
    }

    return (
        state && <Card title="Edit parliament">
            <Form
                onFinish={onFinish}
                onFinishFailed={onFinishFailed}
                initialValues={state}
                {...layout}
            >
                <Form.Item
                    name="id"
                >
                    <Input type="hidden" />
                </Form.Item>
                
                <Form.Item
                    label="Name"
                    name="name"
                    rules={[{ required: true, message: 'Please input your name!' }]}
                >
                    <Input />
                </Form.Item>
                
                <Form.Item {...tailLayout}>
                    <Button type="primary" htmlType="submit">
                        Submit
                    </Button>&nbsp;
                    <Button onClick={() => props.history.push("/parliament")}>
                        Cancel
                    </Button>
                </Form.Item>
            </Form>
        </Card>
    )
}

export default withRouter(ParliamentUpdate);