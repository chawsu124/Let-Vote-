import React, { useState, useEffect } from 'react'
import { withRouter } from "react-router-dom";
import { Card, Form, Input, Button } from 'antd'
import api from '../../api'

const { TextArea } = Input;

const ParliamentDetail = (props) => {
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

    return (
        state && <Card title="parliament Detail">
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
                
                <Form.Item {...tailLayout}>
                    <Button type="primary" onClick={() => props.history.push(`/parliament/edit/${id}`)}>
                        Edit
                    </Button>&nbsp;
                    <Button onClick={() => props.history.push("/parliament")}>
                        Cancel
                    </Button>
                </Form.Item>
            </Form>
        </Card>

    )
}

export default withRouter(ParliamentDetail);