import React, { useState, useEffect } from 'react'
import { withRouter } from "react-router-dom";
import { PlusOutlined, EyeOutlined, EditOutlined, DeleteOutlined } from '@ant-design/icons';
import { Table, Card, Button, Row, Col, Space } from 'antd'
import { noti } from '../../component/noti'
import api from '../../api'

const Contact = (props) => {

    const [data, setData] = useState([])
    const [reload, setReload] = useState(false)

    useEffect(() => {
        (async () => {
            api().get('contact_us')
                .then(result => {
                    result.data.status == 200 && setData(result.data.data)
                })
        })()
    }, [reload])

    const handleDelete = (id) =>{
        id && api().delete(`contact_us/${id}`)
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
            title: 'Name',
            dataIndex: 'name',
            key: 'name',
        },
        {
            title: 'Email',
            dataIndex: 'email',
            key: 'email',
        },
        {
            title: 'Phone',
            dataIndex: 'phone',
            key: 'phone',
        },
        {
            title: 'Description',
            dataIndex: 'description',
            key: 'description',
        },
        {
            title: 'Action',
            key: 'action',
            render: (text, record) => {
                return <Space>
                    <a onClick={() => props.history.push(`/contact_us/${record.id}`)}><EyeOutlined /></a>
                    <a onClick={() => props.history.push(`/contact_us/edit/${record.id}`)}><EditOutlined /></a>
                    <a onClick={() => handleDelete(record.id)}><DeleteOutlined /></a>
                </Space>
            }
        }
    ];

    return <Card size="small" >
        <Row>
            <Col span={24}>
                <Button
                    type="primary"
                    shape="round"
                    icon={<PlusOutlined />}
                    onClick={() => props.history.push("/contact_us/create")}
                    style={{marginBottom: '20px'}}
                >
                    Create Contact
                </Button>
            </Col>
        </Row>
        <Row>
            <Col span={24}>
                <Table dataSource={data} columns={columns} />
            </Col>
        </Row>
    </Card>
}
export default withRouter(Contact);

