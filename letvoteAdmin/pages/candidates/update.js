import React, { useEffect, useState } from 'react'
import { withRouter } from "react-router-dom";
import { Form, Input, Button, Card, Select, Upload, message } from 'antd'
import { LoadingOutlined, PlusOutlined } from '@ant-design/icons';
import { noti } from '../../component/noti'
import api from '../../api'
import { masterData, serverUrl, imgUrl } from '../utils/helper'

const { TextArea } = Input;
const { Option } = Select
const imgAddress = `${imgUrl}candidate/`

const getBase64 = (img, callback) => {
    const reader = new FileReader();
    reader.addEventListener('load', () => callback(reader.result));
    reader.readAsDataURL(img);
}

const beforeUpload = (file) => {
    const isJpgOrPng = file.type === 'image/jpeg' || file.type === 'image/png';
    if (!isJpgOrPng) {
        message.error('You can only upload JPG/PNG file!');
    }
    const isLt2M = file.size / 1024 / 1024 < 2;
    if (!isLt2M) {
        message.error('Image must smaller than 2MB!');
    }
    return isJpgOrPng && isLt2M;
}

const CandidateUpdate = (props) => {

    const [form] = Form.useForm();
    const id = props.match.params.id
    const [state, setState] = useState('')
    const [data, setData] = useState([])
    const [party, setParty] = useState([])
    const [constituency, setConstituency] = useState([])
    const [parliament, setParliament] = useState([])
    const [election, setElection] = useState([])

    //img
    const [loading, setLoading] = useState(false)
    const [imageUrl, setImageUrl] = useState(false)
    const [imgName, setImageName] = useState(false)

    const handleChange = info => {
        if (info.file.status === 'uploading') {
            setLoading(true)
            return;
        }
        if (info.file.status === 'done') {
            setImageName(info.file.response)
            getBase64(info.file.originFileObj, imageUrl => {
                    setImageUrl(imageUrl)
                    setLoading(false)
                },
            );
        }
    };

    const uploadButton = (
        <div>
            {loading ? <LoadingOutlined /> : <PlusOutlined />}
            <div className="ant-upload-text">Upload</div>
        </div>
    );


    useEffect(() => {
        (async () => {
            api().get(`candidates/${id}`)
                .then(result => {
                    result.data.status == 200 && setState(result.data.data)
                })

            api().get('party')
                .then(result => {
                    result.data.status == 200 && setParty(result.data.data)
                })
            api().get('constituency')
                .then(result => {
                    result.data.status == 200 && setConstituency(result.data.data)
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

    const onFinish = async (values) => {
        const data = { ...values, ...masterData, image: imgName ? imgName : null }

        let result = await api().put(`candidates/${values.id}`, data)
        if (result && result.data.status === 200) {
            props.history.push('/candidates')
            noti('success', "Candidate update successful.")
        } else {
            noti('error', "Something wrong")
        }
    }
    

    const onFinishFailed = (error) => {
        console.log(error)
    }

    const onChangeParty = (value) => {
        value && form.setFieldsValue({
            party_id: value
        })
    }
    const onchangeConstituency = (value) => {
        value && form.setFieldsValue({
            constituency_id: value
        })
    }
    const onchangeParliament = (value) => {
        value && form.setFieldsValue({
            parliament_id: value
        })
    }
    const onchangeELection = (value) => {
        value && form.setFieldsValue({
            election_id: value
        })
    }

    return (
        state && <Card title="Edit Candidate">
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
                    label="Party Name"
                    name="party_id"
                    rules={[{ required: true, message: 'Please input your party id!' }]}
                >
                    
                    <Select
                        showSearch
                        style={{ width: 200 }}
                        placeholder="Select a party"
                        optionFilterProp="children"
                        onChange={onChangeParty}
                    >
                        {
                            party && party.length > 0 && party.map((item) => {
                                return <Option value={item.id}>{item.name}</Option>
                            })
                        }
                    </Select>

                </Form.Item>
                <Form.Item
                    label="ConstiCode1"
                    name="constituency_id"
                    rules={[{ required: true, message: 'Please input your constituency id!' }]}
                >
                    
                    <Select
                        showSearch
                        style={{ width: 200 }}
                        placeholder="Select a constituency"
                        optionFilterProp="children"
                        onChange={onchangeConstituency}
                    >
                        {
                            constituency && constituency.length > 0 && constituency.map((item) => {
                                return <Option value={item.id}>{item.code1}</Option>
                            })
                        }
                    </Select>

                </Form.Item>
                <Form.Item
                    label="Parliament Name"
                    name="parliament_id"
                     rules={[{ required: true, message: 'Please input your parliament id!' }]}
                >
                   
                    <Select
                        showSearch
                        style={{ width: 200 }}
                        placeholder="Select a parliament"
                        optionFilterProp="children"
                        onChange={onchangeParliament}
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
                     rules={[{ required: true, message: 'Please input your election id!' }]}
                >
                    
                    <Select
                        showSearch
                        style={{ width: 200 }}
                        placeholder="Select a election"
                        optionFilterProp="children"
                        onChange={onchangeELection}
                    >
                        {
                            election && election.length > 0 && election.map((item) => {
                                return <Option value={item.id}>{item.name}</Option>
                            })
                        }
                    </Select>

                </Form.Item>
                <Form.Item
                    label="Candidate Name"
                    name="name"
                    rules={[{ required: true, message: 'Please input your name!' }]}
                >
                    <Input />
                </Form.Item>
                
                <Form.Item
                    label="Image"
                    name="image"
                >
                    <Upload
                        name="profile"
                        listType="picture-card"
                        className="avatar-uploader"
                        showUploadList={false}
                        action={`${serverUrl}candidates/upload`}
                        beforeUpload={beforeUpload}
                        onChange={handleChange}
                    >
                        {imageUrl ? <img src={imageUrl} alt="avatar" style={{ width: '100%' }} /> : uploadButton}
                    </Upload>
                </Form.Item>
                <Form.Item
                    label="Dob"
                    name="dob"
                    rules={[{ required: true, message: 'Please input your dob!' }]}
                >
                    <Input />
                </Form.Item>
                <Form.Item
                    label="Father Name"
                    name="fathername"
                    rules={[{ required: true, message: 'Please input your fathername!' }]}
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
                    label="Nrc/no"
                    name="nrc_no"
                    rules={[{ required: true, message: 'Please input your nrc_no!' }]}
                >
                    <Input />
                </Form.Item>
                <Form.Item
                    label="Education"
                    name="education"
                    rules={[{ required: true, message: 'Please input your education!' }]}
                >
                    <Input />
                </Form.Item>
                <Form.Item
                    label="Occupation"
                    name="occupation"
                    rules={[{ required: true, message: 'Please input your occupation!' }]}
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
                    <Button onClick={() => props.history.push("/candidates")}>
                        Cancel
                    </Button>
                </Form.Item>
            </Form>
        </Card>
    )
}

export default withRouter(CandidateUpdate);