import React, { useState, useEffect } from 'react'
import { withRouter } from "react-router-dom";
import { Card, Form, Input, Button } from 'antd'
import api from '../../api'
import {serverUrl, imgUrl} from '../utils/helper'

const url = `${serverUrl}`
const imgAddress = `${imgUrl}candidate/`

const { TextArea } = Input;

const CandidateDetail = (props) => {
    const id = props.match.params.id
    const [state, setState] = useState('')

    useEffect(() => {
        (async () => {
            api().get(`candidates/${id}`)
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
        state && <Card title="Candidate Detail">
            <Form
                {...layout}
                initialValues={state}
            >
                <Form.Item
                    label="Party Name"
                    name="party_name"
                >
                    <Input readOnly={true} />
                </Form.Item>
                <Form.Item
                    label="Constituency Code 1"
                    name="constituency_code1"
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
                    label="Election Name"
                    name="election_name"
                >
                    <Input readOnly={true} />
                </Form.Item>
                <Form.Item
                    label="Candidate Name"
                    name="name"
                >
                    <Input readOnly={true} />
                </Form.Item>
                <Form.Item
                    label="Image"
                    name="image"
                >
                    <img src={`${imgAddress}${state.image}`} width="400px" height="300px"/>
                </Form.Item>
                <Form.Item
                    label="Dob"
                    name="dob"
                >
                    <Input readOnly={true} />
                </Form.Item>
                <Form.Item
                    label="Father Name"
                    name="fathername"
                >
                    <Input readOnly={true} />
                </Form.Item>
                <Form.Item
                    label="Religion"
                    name="religion"
                >
                    <Input readOnly={true} />
                </Form.Item>
                <Form.Item
                    label="Nrc/no"
                    name="nrc_no"
                >
                    <Input readOnly={true} />
                </Form.Item>
                <Form.Item
                    label="Education"
                    name="education"
                >
                    <Input readOnly={true} />
                </Form.Item>
                <Form.Item
                    label="Occupation"
                    name="occupation"
                >
                    <Input readOnly={true} />
                </Form.Item>
                <Form.Item
                    label="Permanent Address"
                    name="permanent_address"
                >
                    <TextArea rows={3} readOnly={true} />
                </Form.Item>
                <Form.Item
                    label="Remark"
                    name="remark"
                >
                    <TextArea rows={3} readOnly={true} />
                </Form.Item>
                <Form.Item {...tailLayout}>
                    <Button type="primary" onClick={() => props.history.push(`/candidates/edit/${id}`)}>
                        Edit
                    </Button>&nbsp;
                    <Button onClick={() => props.history.push("/candidates")}>
                        Cancel
                    </Button>
                </Form.Item>
            </Form>
        </Card>

    )
}

export default withRouter(CandidateDetail);
