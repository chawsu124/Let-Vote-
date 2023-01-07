import React, { useEffect, useState } from 'react'
import { withRouter } from "react-router-dom";
import { Form, Input, Button, Card, Select } from 'antd'
import { noti } from '../../component/noti'
import api from '../../api'

const { TextArea } = Input;
const {Option} = Select

const VillageUpdate = (props) => {

    const [form] = Form.useForm();

    const id = props.match.params.id
    const [state, setState] = useState('')
    const [data, setData] = useState([])

    useEffect(() => {
        (async () => {
            api().get(`village/${id}`)
                .then(result => {
                    result.data.status == 200 && setState(result.data.data)
                })

            api().get('village_tract')
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
        let result = await api().put(`village/${values.id}`, values).then(res => {
            if(res && res.data.status === 200){
                noti('success', "village updated successful.")
                props.history.push('/village')
            }else{
                noti('error', "Something wrong")
            }
        })
    }

    const onFinishFailed = (error) => {
        console.log(error)
    }

    const onChange = (value) => {
        value && form.setFieldsValue({
            district_id: value
        })
    }

    return (
        state && <Card title="Edit village">
            <Form
                onFinish={onFinish}
                onFinishFailed={onFinishFailed}
                initialValues={state}
                {...layout}
            >

                <Form.Item
                    label="village_tract Id"
                    name="id"
                    rules={[{ required: true, message: 'Please input your village_tract id!' }]}
                >
                    {/* <Input /> */}
                    <Select
                        showSearch
                        style={{ width: 200 }}
                        placeholder="Select a village_tract"
                        optionFilterProp="children"
                        onChange={onChange}
                        defaultValue={data.id}
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
                    label="latitude"
                    name="latitude"
                    rules={[{ required: true, message: 'Please input your latitude!' }]}
                >
                    <Input />
                </Form.Item>
                <Form.Item
                    label="longitude"
                    name="longitude"
                    rules={[{ required: true, message: 'Please input your longitude!' }]}
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
                    <Button onClick={() => props.history.push("/township")}>
                        Cancel
                    </Button>
                </Form.Item>
            </Form>
        </Card>
    )
}

export default withRouter(VillageUpdate);