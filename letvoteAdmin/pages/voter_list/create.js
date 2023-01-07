import React,{useEffect, useState} from 'react'
import { Form, Input, Button, Card, Select } from 'antd'
import { withRouter } from "react-router-dom";
import { masterData } from '../utils/helper'
import { noti } from '../../component/noti'
import api from '../../api'
import { useForm } from 'antd/lib/form/Form';
const { TextArea } = Input;

const { Option } = Select;


const CreateForm = (props) => {

    const [form] = Form.useForm();
    const [data, setData] = useState([])
    const [village, setVillage] = useState([])
    const [ward, setWard] = useState([])
    const [parliament, setParliament] = useState([])
    const [election, setElection] = useState([])

    useEffect(() => {
        (async () => {
            api().get('voter_list')
            .then(result => {
                result.data.status == 200 && setData(result.data.data)
            })
            api().get('village')
                .then(result => {
                    result.data.status == 200 && setVillage(result.data.data)
                })
            api().get('wards')
                .then(result => {
                    result.data.status == 200 && setWard(result.data.data)
                })
            api().get('parliament')
                .then(result => {
                    result.data.status == 200 && setParliament(result.data.data)
                })
            api().get('election')
                .then(result => {
                    result.data.status == 200 && setElection(result.data.data)
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
        const data = { ...values, ...masterData }

        let result = await api().post('voter_list', data)
        if (result && result.data.status === 200) {
            props.history.push('/voter_list')
            noti('success', "voter_list create successful.")
        } else {
            noti('error', "Something wrong")
        }
    }

    const onFinishFailed = (errorInfo) => {
        console.log(errorInfo, "errorInfo")
    }

    const onChangeWard= (value) => {
        value && form.setFieldsValue({
            ward_id: value
        })
    }

    const onChangeVillage = (value) => {
        value && form.setFieldsValue({
            village_id: value
        })
    }

    const onChangeParliament = (value) => {
        value && form.setFieldsValue({
            parliament_id: value
        })
    }

    const onChangeElection = (value) => {
        value && form.setFieldsValue({
            election_id: value
        })
    }

    return <div>
        <Card title="Create voter_list">
            <Form
                onFinish={onFinish}
                onFinishFailed={onFinishFailed}
                {...layout}
            >
                <Form.Item
                    label="Village Name"
                    name="village_id"
                >
                    <Select
                        showSearch
                        style={{ width: 200 }}
                        placeholder="Select a village name"
                        optionFilterProp="children"
                        onChange={onChangeVillage}
                    >
                        {
                            village && village.length > 0 && village.map((item) => {
                                return <Option value={item.id}>{item.name}</Option>
                            })
                        }
                    </Select>

                </Form.Item>
                <Form.Item
                    label="Ward Name"
                    name="ward_id"
                >
                    {/* <Input /> */}
                    <Select
                        showSearch
                        style={{ width: 200 }}
                        placeholder="Select a ward name"
                        optionFilterProp="children"
                        onChange={onChangeWard}
                    >
                        {
                            ward && ward.length > 0 && ward.map((item) => {
                                return <Option value={item.id}>{item.name}</Option>
                            })
                        }
                    </Select>

                </Form.Item>
                <Form.Item
                    label="Parliament Name"
                    name="parliament_id"
                >
                    <Select
                        showSearch
                        style={{ width: 200 }}
                        placeholder="Select a parliament name"
                        optionFilterProp="children"
                        onChange={onChangeParliament}
                    >
                        {
                            parliament && parliament.length > 0 && parliament.map((item) => {
                                return <Option value={item.id}>{item.name}</Option>
                            })
                        }
                    </Select>

                </Form.Item>
                <Form.Item
                    label="Election Name"
                    name="election_id"
                >
                    <Select
                        showSearch
                        style={{ width: 200 }}
                        placeholder="Select a election name"
                        optionFilterProp="children"
                        onChange={onChangeElection}
                    >
                        {
                            election && election.length > 0 && election.map((item) => {
                                return <Option value={item.id}>{item.name}</Option>
                            })
                        }
                    </Select>

                </Form.Item>
                <Form.Item
                    label="Name"
                    name="name"
                    rules={[{ required: true, message: 'Please input your name!' }]}
                >
                    <Input />
                </Form.Item>
                <Form.Item
                    label="Nrc No"
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
                    label="Permanent Address"
                    name="permanent_address"
                    rules={[{ required: true, message: 'Please input your permanent_address!' }]}
                >
                    <Input />
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
    </div >
}


export default withRouter(CreateForm);