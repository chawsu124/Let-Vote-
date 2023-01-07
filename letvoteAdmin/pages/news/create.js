import React, { useEffect, useState } from 'react'
import { Form, Input, Button, Card, Select, Upload, message } from 'antd'
import { LoadingOutlined, PlusOutlined } from '@ant-design/icons';
import { withRouter } from "react-router-dom";
import { masterData, serverUrl, imgUrl } from '../utils/helper'
import { noti } from '../../component/noti'
import api from '../../api'

const { TextArea } = Input;
const { Option } = Select;
const imgAddress = `${imgUrl}news/`

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

const CreateForm = (props) => {
    const [form] = Form.useForm();
    const [data, setData] = useState([])

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

    const layout = {
        labelCol: { span: 8 },
        wrapperCol: { span: 8 },
    };

    const tailLayout = {
        wrapperCol: { offset: 8, span: 16 },
    };

    const onFinish = async (values) => {
        const data = { ...values, ...masterData, image: imgName ? imgName : null }
        await api().post('news', data).then(res => {
            if (res && res.data.status === 200) {
                noti('success', "News create successful.")
                props.history.push('/news')
            } else {
                noti('error', "Something wrong")
            }
        })
    }

    const onFinishFailed = (errorInfo) => {
        console.log(errorInfo, "errorInfo")
    }

    return <div>

        <Card title="Create News">
            <Form
                onFinish={onFinish}
                onFinishFailed={onFinishFailed}
                {...layout}
            >
                <Form.Item
                    label="Title"
                    name="title"
                    rules={[{ required: true, message: 'Please input your title!' }]}
                >
                    <Input />
                </Form.Item>
                <Form.Item
                    label="Image"
                    name="image"
                //  rules={[{ required: true, message: 'Please input your name!' }]}
                >
                    <Upload
                        name="profile"
                        listType="picture-card"
                        className="avatar-uploader"
                        showUploadList={false}
                        action={`${serverUrl}news/upload`}
                        beforeUpload={beforeUpload}
                        onChange={handleChange}
                    >
                        {imageUrl ? <img src={imageUrl} alt="avatar" style={{ width: '100%' }} /> : uploadButton}
                    </Upload>
                </Form.Item>
                <Form.Item
                    label="News Name"
                    name="news_name"
                    rules={[{ required: true, message: 'Please input your name!' }]}
                >
                    <TextArea rows={8} />
                </Form.Item>
                <Form.Item {...tailLayout}>
                    <Button type="primary" htmlType="submit">
                        Submit
                    </Button>&nbsp;
                    <Button onClick={() => props.history.push("/news")}>
                        Cancel
                    </Button>
                </Form.Item>
            </Form>
        </Card>
    </div>
}


export default withRouter(CreateForm);