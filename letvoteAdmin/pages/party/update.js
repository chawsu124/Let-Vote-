import React, { useEffect, useState } from 'react'
import { withRouter } from "react-router-dom";
import { Form, Input, Button, Card, Select, Upload, message } from 'antd'
import { LoadingOutlined, PlusOutlined } from '@ant-design/icons';
import { noti } from '../../component/noti'
import api from '../../api'
import { masterData, serverUrl, imgUrl } from '../utils/helper'

const { TextArea } = Input;
const {Option} = Select
const imgAddress = `${imgUrl}party/`

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


const PartyUpdate = (props) => {

    const [form] = Form.useForm();

    const id = props.match.params.id
    const [state, setState] = useState('')
    const [data, setData] = useState([])

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
            api().get(`party/${id}`)
                .then(result => {
                    result.data.status == 200 && setState(result.data.data)
                })

            api().get('office')
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


    const onFinish = async (values) => {
        const data = { ...values, ...masterData, image: imgName ? imgName : null }

        let result = await api().put(`party/${values.id}`, data)
        if (result && result.data.status === 200) {
            props.history.push('/party')
            noti('success', "party update successful.")
        } else {
            noti('error', "Something wrong")
        }
    }
    

    const onFinishFailed = (error) => {
        console.log(error)
    }

    const onChange = (value) => {
        value && form.setFieldsValue({
            office_id: value
        })
    }

    return (
        state && <Card title="Edit Party">
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
                    label="Office Id"
                    name="office_id"
                    rules={[{ required: true, message: 'Please input your office id!' }]}
                >
                    {/* <Input /> */}
                    <Select
                        showSearch
                        style={{ width: 200 }}
                        placeholder="Select a office"
                        optionFilterProp="children"
                        onChange={onChange}
                       //defaultValue={data.office_id}
                    >
                        {
                            data && data.length > 0 && data.map((item) => {
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
                    label="Image"
                    name="image"
                >
                    <Upload
                        name="profile"
                        listType="picture-card"
                        className="avatar-uploader"
                        showUploadList={false}
                        action={`${serverUrl}party/upload`}
                        beforeUpload={beforeUpload}
                        onChange={handleChange}
                    >
                        {imageUrl ? <img src={imageUrl} alt="avatar" style={{ width: '100%' }} /> : uploadButton}
                    </Upload>
                </Form.Item>
                <Form.Item
                    label="Link"
                    name="link"
                    rules={[{ required: true, message: 'Please input your party link!' }]}
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
                    <Button onClick={() => props.history.push("/party")}>
                        Cancel
                    </Button>
                </Form.Item>
            </Form>
        </Card>
    )
}

export default withRouter(PartyUpdate);