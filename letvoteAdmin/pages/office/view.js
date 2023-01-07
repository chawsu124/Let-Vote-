import React, { useState, useEffect } from 'react'
import { withRouter } from "react-router-dom";
import { Card, Form, Input, Button } from 'antd'
import api from '../../api'

const { TextArea } = Input;

const OfficeDetail = (props) => {
    const id = props.match.params.id
    const [state, setState] = useState('')

    useEffect(() => {
        (async () => {
            api().get(`office/${id}`)
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

    return (
        state && <Card title="Office Detail">
            <Form
                {...layout}
                initialValues={state}
            >
                <Form.Item
                    label="Village Name"
                    name="village_name"
                >
                    <Input readOnly={true} />
                </Form.Item>
                <Form.Item
                    label="Ward Name"
                    name="ward_name"
                >
                    <Input readOnly={true} />
                </Form.Item>
                <Form.Item
                    label="Name"
                    name="name"
                    rules={[{ required: true, message: 'Please input your name!' }]}
                >
                    <Input />
                </Form.Item>
                <Form.Item
                    label="Address"
                    name="address"
                    rules={[{ required: true, message: 'Please input your address!' }]}
                >
                    <Input />
                </Form.Item>
                <Form.Item
                    label="Ph_no"
                    name="ph_no"
                    rules={[{ required: true, message: 'Please input your ph_no!' }]}
                >
                    <Input />
                </Form.Item>
                <Form.Item
                    label="Ph1"
                    name="ph1"
                    rules={[{ required: true, message: 'Please input your ph1!' }]}
                >
                    <Input />
                </Form.Item>
                <Form.Item
                    label="Ph2"
                    name="ph2"
                    rules={[{ required: true, message: 'Please input your ph2!' }]}
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
                    label="Building_type"
                    name="building_type"
                    rules={[{ required: true, message: 'Please input your building_type!' }]}
                >
                    <Input />
                </Form.Item>
                <Form.Item
                    label="Rental"
                    name="rental"
                    rules={[{ required: true, message: 'Please input your rental!' }]}
                >
                    <Input />
                </Form.Item>
                <Form.Item {...tailLayout}>
                    <Button type="primary" onClick={() => props.history.push(`/office/edit/${id}`)}>
                        Edit
                    </Button>&nbsp;
                    <Button onClick={() => props.history.push("/office")}>
                        Cancel
                    </Button>
                </Form.Item>
            </Form>
        </Card>

    )
}

export default withRouter(OfficeDetail);