import React, { useState, useEffect } from 'react'
import { withRouter } from "react-router-dom";
import { Card, Form, Input, Button } from 'antd'
import api from '../../api'
import { serverUrl, imgUrl } from '../utils/helper'

const url = `${serverUrl}`
const imgAddress = `${imgUrl}news/`

const { TextArea } = Input;

const NewsDetail = (props) => {
    const id = props.match.params.id
    const [state, setState] = useState('')

    useEffect(() => {
        (async () => {
            api().get(`news/${id}`)
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
        state && <Card title="News Detail">
            <Form
                {...layout}
                initialValues={state}
            >
                <Form.Item
                    label="Title"
                    name="title"
                    rules={[{ required: true, message: 'Please input your title!' }]}
                >
                    <Input />
                </Form.Item>
                <Form.Item
                    label="Image"
                    name="image"
                //  rules={[{ required: true, message: 'Please input your name!' }]}
                >
                    <img src={`${imgAddress}${state.image}`} width="400px" height="300px" />
                </Form.Item>
                <Form.Item
                    label="News Name"
                    name="news_name"
                    rules={[{ required: true, message: 'Please input your name!' }]}
                >
                    <TextArea rows={8} />
                </Form.Item>
                <Form.Item {...tailLayout}>
                    <Button type="primary" onClick={() => props.history.push(`/news/edit/${id}`)}>
                        Edit
                    </Button>&nbsp;
                    <Button onClick={() => props.history.push("/news")}>
                        Cancel
                    </Button>
                </Form.Item>
            </Form>
        </Card>

    )
}

export default withRouter(NewsDetail);