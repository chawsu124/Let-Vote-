import React, { useEffect, useState } from 'react'
import { withRouter } from "react-router-dom";
import { Form, Input, Button, Card, Select } from 'antd'
import { noti } from '../../component/noti'
import api from '../../api'

const { TextArea } = Input;
const {Option} = Select

const OfficeUpdate = (props) => {

    const [form] = Form.useForm();
    const id = props.match.params.id
    const [state, setState] = useState('')
    const [village, setVillage] = useState([])
    const [wards, setWard] = useState([])

    useEffect(() => {
        (async () => {
            api().get(`office/${id}`)
                .then(result => {
                    result.data.status == 200 && setState(result.data.data)
                })

            api().get('village')
            .then(result => {
                result.data.status == 200 && setVillage(result.data.data)
            })

            api().get('wards')
            .then(result => {
                result.data.status == 200 && setWard(result.data.data)
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
        let result = await api().put(`office/${values.id}`, values)
        console.log(result)
        if (result && result.data.status === 200) {
            noti('success', "Office updated successful.")
            props.history.push('/office')
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

    return (
        state && <Card title="Edit Office">
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
                        //defaultValue={village.id}
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
                        //defaultValue={wards.id}
                    >
                        {
                            wards && wards.length > 0 && wards.map((item) => {
                                return <Option value={item.id}>{item.name}</Option>
                            })
                        }
                    </Select>

                </Form.Item>
                <Form.Item
                label="Office Name"
                name="name"
                rules={[{ required: true, message: 'Please input office name!' }]}
            >
                <Input />
            </Form.Item>
            <Form.Item
                label="Address"
                name="address"
                rules={[{ required: true, message: 'Please input your address!' }]}
            >
                <Input />
            </Form.Item>
            <Form.Item
                label="Phone No"
                name="ph_no"
                rules={[{ required: true, message: 'Please input your phone no!' }]}
            >
                <Input />
            </Form.Item>
            <Form.Item
                label="Phone 1"
                name="ph1"
                rules={[{ required: true, message: 'Please input your phone 1!' }]}
            >
                <Input />
            </Form.Item>
            <Form.Item
                label="Phone 2"
                name="ph2"
                rules={[{ required: true, message: 'Please input your phone 2!' }]}
            >
                <Input />
            </Form.Item>
            <Form.Item
                label="Email"
                name="email"
                rules={[{ required: true, message: 'Please input your email!' }]}
            >
                <Input />
            </Form.Item>
            <Form.Item
                label="Building Type"
                name="building_type"
                rules={[{ required: true, message: 'Please input your building type!' }]}
            >
                <Input />
            </Form.Item>
            <Form.Item
                label="Own/rental"
                name="rental"
                rules={[{ required: true, message: 'Please input own/rental!' }]}
            >
                <Input />
            </Form.Item>
                <Form.Item {...tailLayout}>
                    <Button type="primary" htmlType="submit">
                        Submit
                    </Button>&nbsp;
                    <Button onClick={() => props.history.push("/office")}>
                        Cancel
                    </Button>
                </Form.Item>
            </Form>
        </Card>
    )
}

export default withRouter(OfficeUpdate);
      