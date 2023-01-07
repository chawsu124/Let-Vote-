import React, { useEffect, useState } from 'react'
import { withRouter } from "react-router-dom";
import { Form, Input, Button, Card, Select, Upload, message } from 'antd'
import { LoadingOutlined, PlusOutlined } from '@ant-design/icons';
import { noti } from '../../component/noti'
import api from '../../api'
import { masterData, serverUrl, imgUrl } from '../utils/helper'

const { TextArea } = Input;
const { Option } = Select
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


const NewsUpdate = (props) => {
    const [form] = Form.useForm();
    const id = props.match.params.id
    const [state, setState] = useState('')
  
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
            api().get(`news/${id}`)
                .then(result => {
                    result.data.status == 200 && setState(result.data.data)
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

        let result = await api().put(`news/${values.id}`, data)
        if (result && result.data.status === 200) {
            props.history.push('/news')
            noti('success', "news update successful.")
        } else {
            noti('error', "Something wrong")
        }
    }

    const onFinishFailed = (error) => {
        console.log(error)
    }

    return (
        state && <div>
            <Card title="Create News">
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
                    rules={[{ required: true, message: 'Please input your news!' }]}
                >
                   <TextArea rows={8}/>
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
    )
}

export default withRouter(NewsUpdate);