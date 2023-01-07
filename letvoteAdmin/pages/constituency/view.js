import React, { useState, useEffect } from 'react'
import { withRouter } from "react-router-dom";
import { Card, Form, Input, Button } from 'antd'
import api from '../../api'

const { TextArea } = Input;

const ConstiDetail = (props) => {
    const id = props.match.params.id
    const [state, setState] = useState('')

    useEffect(() => {
        (async () => {
            api().get(`constituency/${id}`)
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
        state && <Card title="Constituency Detail">
            <Form
                {...layout}
                initialValues={state}
            >
                <Form.Item
                    label="Town Name"
                    name="town_name"
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
                    label="Code1"
                    name="code1"
                    rules={[{ required: true, message: 'Please input your code1!' }]}
                >
                    <Input />
                </Form.Item>
                <Form.Item
                    label="Code2"
                    name="code2"
                    rules={[{ required: true, message: 'Please input your code2!' }]}
                >
                    <Input />
                </Form.Item>
                
                <Form.Item
                    label="Remark"
                    name="remark"
                    rules={[{ required: true, message: 'Please input your remark!' }]}
                >
                    <TextArea rows={3} readOnly={true} />
                </Form.Item>
                <Form.Item {...tailLayout}>
                    <Button type="primary" onClick={() => props.history.push(`/constituency/edit/${id}`)}>
                        Edit
                    </Button>&nbsp;
                    <Button onClick={() => props.history.push("/constituency")}>
                        Cancel
                    </Button>
                </Form.Item>
            </Form>
        </Card>

    )
}

export default withRouter(ConstiDetail);