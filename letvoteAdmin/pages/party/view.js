import React, { useState, useEffect } from 'react'
import { withRouter } from "react-router-dom";
import { Card, Form, Input, Button } from 'antd'
import api from '../../api'
import { serverUrl, imgUrl } from '../utils/helper'

const url = `${serverUrl}`
const imgAddress = `${imgUrl}party/`

const { TextArea } = Input;

const PartyDetail = (props) => {
    const id = props.match.params.id
    const [state, setState] = useState('')

    useEffect(() => {
        (async () => {
            api().get(`party/${id}`)
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
        state && <Card title="Party Detail">
            <Form
                {...layout}
                initialValues={state}
            >
                <Form.Item
                    label="Office Name"
                    name="office_name"
                >
                    <Input readOnly={true} />
                </Form.Item>
                <Form.Item
                    label="Name"
                    name="name"
                >
                    <Input readOnly={true} />
                </Form.Item>
                <Form.Item
                    label="Image"
                    name="image"
                >
                    <img src={`${imgAddress}${state.image}`} width="400px" height="300px" />
                </Form.Item>
                <Form.Item
                    label="Link"
                    name="link"
                    rules={[{ required: true, message: 'Please input your party link!' }]}
                >
                    <Input />
                </Form.Item>
                <Form.Item
                    label="Remark"
                    name="remark"
                >
                    <TextArea rows={3} readOnly={true} />
                </Form.Item>
                <Form.Item {...tailLayout}>
                    <Button type="primary" onClick={() => props.history.push(`/party/edit/${id}`)}>
                        Edit
                    </Button>&nbsp;
                    <Button onClick={() => props.history.push("/party")}>
                        Cancel
                    </Button>
                </Form.Item>
            </Form>
        </Card>

    )
}

export default withRouter(PartyDetail);