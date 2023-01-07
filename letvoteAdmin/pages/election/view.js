import React, { useState, useEffect } from 'react'
import { withRouter } from "react-router-dom";
import { Card, Form, Input, Button } from 'antd'
import api from '../../api'

const { TextArea } = Input;

const ElectionDetail = (props) => {
    const id = props.match.params.id
    const [state, setState] = useState('')

    useEffect(() => {
        (async () => {
            api().get(`election/${id}`)
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
        state && <Card title="Election Detail">
            <Form
                {...layout}
                initialValues={state}
            >
                <Form.Item
                    label="Name"
                    name="name"
                >
                    <Input readOnly={true}/>
                </Form.Item>
                <Form.Item
                    label="Remark"
                    name="remark"
                >
                    <TextArea rows={3} readOnly={true}/>
                </Form.Item>
                <Form.Item {...tailLayout}>
                    <Button type="primary" onClick={() => props.history.push(`/election/edit/${id}`)}>
                        Edit
                    </Button>&nbsp;
                    <Button onClick={() => props.history.push("/election")}>
                        Cancel
                    </Button>
                </Form.Item>
            </Form>
        </Card>

    )
}

export default withRouter(ElectionDetail);