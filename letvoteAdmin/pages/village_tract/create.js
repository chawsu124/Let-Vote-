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

    useEffect(() => {
        (async () => {
            api().get('town')
            .then(result => {
                result.data.status == 200 && setData(result.data.data)
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
        //console.log(data)
        let result = await api().post('village_tract', data)
        if (result && result.data.status === 200) {
            props.history.push('/village_tract')
            noti('success', "village_tract create successful.")
        } else {
            noti('error', "Something wrong")
        }
    }

    const onFinishFailed = (errorInfo) => {
        console.log(errorInfo, "errorInfo")
    }

    const onChange = (value) => {
        value && form.setFieldsValue({
            town_id: value
        })
    }

    return <div>
        <Card title="Create village_tract">
            <Form
                onFinish={onFinish}
                onFinishFailed={onFinishFailed}
                {...layout}
            >
                <Form.Item
                    label="town Id"
                    name="town_id"
                    rules={[{ required: true, message: 'Please input your town id!' }]}
                >
                    {/* <Input /> */}
                    <Select
                        showSearch
                        style={{ width: 200 }}
                        placeholder="Select a town"
                        optionFilterProp="children"
                        onChange={onChange}
                    >
                        {
                            data && data.length > 0 && data.map((item) => {
                                return <Option value={item.id}>{item.name}</Option>
                            })
                        }
                    </Select>

                </Form.Item>
                <Form.Item
                    label="Code"
                    name="code"
                    rules={[{ required: true, message: 'Please input your code!' }]}
                >
                    <Input />
                </Form.Item>
                <Form.Item
                    label="Name"
                    name="name"
                    rules={[{ required: true, message: 'Please input your name!' }]}
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
                    <Button onClick={() => props.history.push("/village_tract")}>
                        Cancel
                    </Button>
                </Form.Item>
            </Form>
        </Card>
    </div >
}


export default withRouter(CreateForm);