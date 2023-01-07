import React,{useEffect, useState} from 'react'
import { Form, Input, Button, Card, Select } from 'antd'
import { withRouter } from "react-router-dom";
import { masterData } from '../utils/helper'
import { noti } from '../../component/noti'
import api from '../../api'
import { useForm } from 'antd/lib/form/Form';
import wards from '../wards';
const { TextArea } = Input;

const { Option } = Select;


const CreateForm = (props) => {

    const [form] = Form.useForm();
    const [data, setData] = useState([])
    const [ward, setWard] = useState([])

    const [village, setVillage] = useState([])


    useEffect(() => {
        (async () => {
            api().get('office')
            .then(result => {
                result.data.status == 200 && setData(result.data.data)
            })
            api().get('wards')
            .then(result => {
                result.data.status == 200 && setWard(result.data.data)
            })
            api().get('village')
            .then(result => {
                result.data.status == 200 && setVillage(result.data.data)
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

        let result = await api().post('office', data)
        if (result && result.data.status === 200) {
            props.history.push('/office')
            noti('success', "office create successful.")
        } else {
            noti('error', "Something wrong")
        }
    }

    const onFinishFailed = (errorInfo) => {
        console.log(errorInfo, "errorInfo")
    }

    const onChangeWard = (value) => {
        value && form.setFieldsValue({
            ward_id: value
        })
    }

    const onChangeVillage = (value) => {
        value && form.setFieldsValue({
            village_id: value
        })
    }

    return <div>
        <Card title="Create Office">
            <Form
                onFinish={onFinish}
                onFinishFailed={onFinishFailed}
                {...layout}
            >
                <Form.Item
                    label="Ward Name"
                    name="ward_id"
                    // rules={[{ required: true, message: 'Please input your state id!' }]}
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
                    label="Village Name"
                    name="village_id"
                >
                    {/* <Input /> */}
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
                    label="Name"
                    name="name"
                    rules={[{ required: true, message: 'Please input your name!' }]}
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
                    label="Po_No"
                    name="ph_no"
                    rules={[{ required: true, message: 'Please input your po_no!' }]}
                >
                    <Input />
                </Form.Item>
                <Form.Item
                    label="Ph1"
                    name="ph1"
                    rules={[{ required: true, message: 'Please input your ph1!' }]}
                >
                    <Input />
                </Form.Item>
                <Form.Item
                    label="Ph2"
                    name="ph2"
                    rules={[{ required: true, message: 'Please input your ph2!' }]}
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
                    label="Building_Type"
                    name="building_type"
                    rules={[{ required: true, message: 'Please input your building_type!' }]}
                >
                    <Input />
                </Form.Item>
                <Form.Item
                    label="Own_Rental"
                    name="rental"
                    rules={[{ required: true, message: 'Please input your own_rental!' }]}
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
                    <Button onClick={() => props.history.push("/office")}>
                        Cancel
                    </Button>
                </Form.Item>
            </Form>
        </Card>
    </div >
}


export default withRouter(CreateForm);