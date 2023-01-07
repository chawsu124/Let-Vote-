import React, { useEffect, useState } from 'react'
import { withRouter } from "react-router-dom";
import { Form, Input, Button, Card, Select } from 'antd'
import { noti } from '../../component/noti'
import api from '../../api'

const { TextArea } = Input;
const {Option} = Select

const Voter_listUpdate = (props) => {

    const [form] = Form.useForm();
    const id = props.match.params.id
    const [state, setState] = useState('')
    const [village, setVillage] = useState([])
    const [wards, setWards] = useState([])
    const [election, setElection] = useState([])
    const [parliament, setParliament] = useState([])


    useEffect(() => {
        (async () => {
            api().get(`voter_list/${id}`)
                .then(result => {
                    result.data.status == 200 && setState(result.data.data)
                })

            api().get('village')
            .then(result => {
                result.data.status == 200 && setVillage(result.data.data)
            })
            api().get('wards')
            .then(result => {
                result.data.status == 200 && setWards(result.data.data)
            })
            api().get('election')
            .then(result => {
                result.data.status == 200 && setElection(result.data.data)
            })
            api().get('parliament')
            .then(result => {
                result.data.status == 200 && setParliament(result.data.data)
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

    const onFinish = async(values) => {
        let result = await api().put(`voter_list/${values.id}`, values)
        if (result && result.data.status === 200) {
            noti('success', "Voter list updated successful.")
            props.history.push('/voter_list')
        } else {
            noti('error', "Something wrong")
        }
    }

    const onFinishFailed = (error) => {
        console.log(error)
    }

    const onChangeVillage = (value) => {
        value && form.setFieldsValue({
            village_id: value
        })
    }
    const onChangeWard = (value) => {
        value && form.setFieldsValue({
            ward_id: value
        })
    }
    const onChangeElection = (value) => {
        value && form.setFieldsValue({
            election_id: value
        })
    }
    const onChangeParliament = (value) => {
        value && form.setFieldsValue({
            parliament_id: value
        })
    }

    return (
        state && <Card title="Edit Voter List">
            <Form
                onFinish={onFinish}
                onFinishFailed={onFinishFailed}
                initialValues={state}
                {...layout}
            >
                <Form.Item
                    label=""
                    name="id"
                >
                    <Input type="hidden" />
                </Form.Item>

                <Form.Item
                    label="Village Id"
                    name="village_id"
                    rules={[{ required: true, message: 'Please input your village id!' }]}
                >
                    {/* <Input /> */}
                    <Select
                        showSearch
                        style={{ width: 200 }}
                        placeholder="Select a village"
                        optionFilterProp="children"
                        onChange={onChangeVillage}
                        //defaultValue={data.village_id}
                    >
                        {
                            village && village.length > 0 && village.map((item) => {
                                return <Option value={item.id}>{item.name}</Option>
                            })
                        }
                    </Select>

                </Form.Item>
                <Form.Item
                    label="Ward Id"
                    name="ward_id"
                    rules={[{ required: true, message: 'Please input your ward id!' }]}
                >
                    {/* <Input /> */}
                    <Select
                        showSearch
                        style={{ width: 200 }}
                        placeholder="Select a ward"
                        optionFilterProp="children"
                        onChange={onChangeWard}
                        //defaultValue={data.ward_id}
                    >
                        {
                            wards && wards.length > 0 && wards.map((item) => {
                                return <Option value={item.id}>{item.name}</Option>
                            })
                        }
                    </Select>

                </Form.Item>
                <Form.Item
                    label="Election Id"
                    name="election_id"
                    rules={[{ required: true, message: 'Please input your election id!' }]}
                >
                    {/* <Input /> */}
                    <Select
                        showSearch
                        style={{ width: 200 }}
                        placeholder="Select a election"
                        optionFilterProp="children"
                        onChange={onChangeElection}
                        //defaultValue={data.election_id}
                    >
                        {
                            election && election.length > 0 && election.map((item) => {
                                return <Option value={item.id}>{item.name}</Option>
                            })
                        }
                    </Select>

                </Form.Item><Form.Item
                    label="Parliament Id"
                    name="parliament_id"
                    rules={[{ required: true, message: 'Please input your parliament id!' }]}
                >
                    {/* <Input /> */}
                    <Select
                        showSearch
                        style={{ width: 200 }}
                        placeholder="Select a parliament"
                        optionFilterProp="children"
                        onChange={onChangeParliament}
                        //defaultValue={data.parliament_id}
                    >
                        {
                            parliament && parliament.length > 0 && parliament.map((item) => {
                                return <Option value={item.id}>{item.name}</Option>
                            })
                        }
                    </Select>

                </Form.Item>
                <Form.Item
                    label="Voter list Name"
                    name="name"
                    rules={[{ required: true, message: 'Please input your name!' }]}
                >
                    <Input />
                </Form.Item>
                <Form.Item
                    label="Nrc/no"
                    name="nrc_no"
                    rules={[{ required: true, message: 'Please input your nrc_no!' }]}
                >
                    <Input />
                </Form.Item>
                <Form.Item
                    label="Dob"
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
                >
                    <TextArea rows={3} />
                </Form.Item>
                <Form.Item
                    label="Remark"
                    name="remark"
                >
                    <TextArea rows={3} />
                </Form.Item>
                <Form.Item {...tailLayout}>
                    <Button type="primary" htmlType="submit">
                        Submit
                    </Button>&nbsp;
                    <Button onClick={() => props.history.push("/voter_list")}>
                        Cancel
                    </Button>
                </Form.Item>
            </Form>
        </Card>
    )
}

export default withRouter(Voter_listUpdate);