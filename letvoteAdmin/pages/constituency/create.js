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
    const [town, setTown] = useState([])
    const [election, setElection] = useState([])

    useEffect(() => {
        (async () => {
            api().get('constituency')
            .then(result => {
                result.data.status == 200 && setData(result.data.data)
            })
            api().get('town')
            .then(result => {
                result.data.status == 200 && setTown(result.data.data)
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

        let result = await api().post('constituency', data)
        if (result && result.data.status === 200) {
            props.history.push('/constituency')
            noti('success', "constituency create successful.")
        } else {
            noti('error', "Something wrong")
        }
    }

    const onFinishFailed = (errorInfo) => {
        console.log(errorInfo, "errorInfo")
    }

    const onChangeTown = (value) => {
        value && form.setFieldsValue({
            town_id: value
        })
    }

    const onChangeElection = (value) => {
        value && form.setFieldsValue({
            election_id: value
        })
    }

    return <div>
        <Card title="Create Constituency">
            <Form
                onFinish={onFinish}
                onFinishFailed={onFinishFailed}
                {...layout}
            >
                <Form.Item
                    label="Town Name"
                    name="town_id"
                    // rules={[{ required: true, message: 'Please input your state id!' }]}
                >
                    {/* <Input /> */}
                    <Select
                        showSearch
                        style={{ width: 200 }}
                        placeholder="Select a town name"
                        optionFilterProp="children"
                        onChange={onChangeTown}
                    >
                        {
                            town && town.length > 0 && town.map((item) => {
                                return <Option value={item.id}>{item.name}</Option>
                            })
                        }
                    </Select>

                </Form.Item>
                <Form.Item
                    label="Election Name"
                    name="election_id"
                    // rules={[{ required: true, message: 'Please input your state id!' }]}
                >
                    {/* <Input /> */}
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
                    label="Code1"
                    name="code1"
                    rules={[{ required: true, message: 'Please input your code!' }]}
                >
                    <Input />
                </Form.Item>
                <Form.Item
                    label="Code2"
                    name="code2"
                    rules={[{ required: true, message: 'Please input your code!' }]}
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
                    <Button onClick={() => props.history.push("/constituency")}>
                        Cancel
                    </Button>
                </Form.Item>
            </Form>
        </Card>
    </div >
}


export default withRouter(CreateForm);