import React, { useState, useEffect } from 'react'
import { withRouter } from "react-router-dom";
import { PlusOutlined, EyeOutlined, EditOutlined, DeleteOutlined } from '@ant-design/icons';
import { Table, Card, Button, Row, Col, Space } from 'antd'
import { noti } from '../../component/noti'
import api from '../../api'

const News = (props) => {

    const [data, setData] = useState([])
    const [reload, setReload] = useState(false)

    useEffect(() => {
        (async () => {
            api().get('news')
            .then(result => {
                result.data.status == 200 && setData(result.data.data)
            })
        })()
    }, [reload])

    const handleDelete = (id) =>{
        id && api().delete(`news/${id}`)
        .then(res => {
            if(res && res.data.status === 200){
                setReload(!reload)
                noti('success', "Record delete successful.")
            }else{
                noti('error', "Something wrong")
            }
        })
    }

    const columns = [
        {
            title: 'Title',
            dataIndex: 'title',
            key: 'title',
        },
        {
            title: 'News Name',
            dataIndex: 'news_name',
            key: 'news_name',
        },
        {
            title: 'Created By',
            dataIndex: 'created_by',
            key: 'created_by',
        },
        {
            title: 'Action',
            key: 'action',
            render: (text, record) => {
                return <Space>
                    <a onClick={() => props.history.push(`/news/${record.id}`)}><EyeOutlined /></a>
                    <a onClick={() => props.history.push(`/news/edit/${record.id}`)}><EditOutlined /></a>
                    <a onClick={() => handleDelete(record.id)}><DeleteOutlined /></a>
                </Space>
            }
        }
    ];

    return <div >
        <Row>
            <Col span={24}>
                <Button
                    type="primary"
                    shape="round"
                    icon={<PlusOutlined />}
                    onClick={() => props.history.push("/news/create")}
                    style={{marginBottom: '20px'}}
                >
                    Create News
                </Button>
            </Col>
        </Row>
        <Row>
            <Col span={24}>
                <Table dataSource={data} columns={columns} />
            </Col>
        </Row>
    </div>
}
export default withRouter(News);

