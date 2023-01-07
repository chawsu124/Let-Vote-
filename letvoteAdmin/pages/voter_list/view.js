import React, { useState, useEffect } from 'react'
import { withRouter } from "react-router-dom";
import { Card, Form, Input, Button } from 'antd'
import api from '../../api'

const { TextArea } = Input;

const VoterDetail = (props) => {
    const id = props.match.params.id
    const [state, setState] = useState('')

    useEffect(() => {
        (async () => {
            api().get(`voter_list/${id}`)
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
        state && <Card title="Voter_list Detail">
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
                    label="Election Name"
                    name="election_name"
                >
                    <Input readOnly={true} />
                </Form.Item>
                <Form.Item
                    label="Parliament Name"
                    name="parliament_name"
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
                    label="NRC_no"
                    name="nrc_no"
                    rules={[{ required: true, message: 'Please input your nrc_no!' }]}
                >
                    <Input />
                </Form.Item>
                <Form.Item
                    label="DOB"
                    name="dob"
                    rules={[{ required: true, message: 'Please input your dob!' }]}
                >
                    <Input />
                </Form.Item>
                <Form.Item
                    label="Religion"
                    name="religion"
                    rules={[{ required: true, message: 'Please input your religion!' }]}
                >
                    <Input />
                </Form.Item>
                <Form.Item
                    label="Permanent_address"
                    name="permanent_address"
                    rules={[{ required: true, message: 'Please input your permanent_address!' }]}
                >
                    <Input />
                </Form.Item>
                <Form.Item {...tailLayout}>
                    <Button type="primary" onClick={() => props.history.push(`/voter_list/edit/${id}`)}>
                        Edit
                    </Button>&nbsp;
                    <Button onClick={() => props.history.push("/voter_list")}>
                        Cancel
                    </Button>
                </Form.Item>
            </Form>
        </Card>

    )
}

export default withRouter(VoterDetail);