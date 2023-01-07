import React, { useState, useEffect } from 'react'
import { withRouter } from "react-router-dom";
import { Card, Form, Input, Button } from 'antd'
import api from '../../api'

const { TextArea } = Input;

const VillageDetail = (props) => {
    const id = props.match.params.id
    const [state, setState] = useState('')

    useEffect(() => {
        (async () => {
            api().get(`village/${id}`)
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
        state && <Card title="Village Detail">
            <Form
                {...layout}
                initialValues={state}
            >
                <Form.Item
                    label="village_tract_id"
                    name="village_tract_id"
                    rules={[{ required: true, message: 'Please input your village_tract_id!' }]}
                >
                    <Input />
                </Form.Item>
                <Form.Item
                    label="Code"
                    name="code"
                >
                    <Input readOnly={true} />
                </Form.Item>
                <Form.Item
                    label="Name"
                    name="name"
                >
                    <Input readOnly={true}/>
                </Form.Item>
                <Form.Item
                    label="latitude"
                    name="latitude"
                    rules={[{ required: true, message: 'Please input your latitude!' }]}
                >
                    <Input />
                </Form.Item>
                <Form.Item
                    label="longitude"
                    name="longitude"
                    rules={[{ required: true, message: 'Please input your longitude!' }]}
                >
                    <Input />
                </Form.Item>
                <Form.Item
                    label="Remark"
                    name="remark"
                >
                    <TextArea rows={3} readOnly={true}/>
                </Form.Item>
                <Form.Item {...tailLayout}>
                    <Button type="primary" onClick={() => props.history.push(`/village/edit/${id}`)}>
                        Edit
                    </Button>&nbsp;
                    <Button onClick={() => props.history.push("/village")}>
                        Cancel
                    </Button>
                </Form.Item>
            </Form>
        </Card>

    )
}

export default withRouter(VillageDetail);