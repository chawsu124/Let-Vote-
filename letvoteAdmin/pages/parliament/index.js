import React, { useState, useEffect } from 'react'
import { withRouter } from "react-router-dom";
import { PlusOutlined, EyeOutlined, EditOutlined, DeleteOutlined } from '@ant-design/icons';
import { Card, Table, Button, Col, Row, Space } from 'antd'
import api from '../../api'
import { noti } from '../../component/noti';

const Parliament = (props) => {

    const [data, setData] = useState([])
    const [reload, setReload] = useState(false)

    useEffect(() => {
        (async () => {
            api().get('parliament')
                .then(result => {
                    result.data.status == 200 && setData(result.data.data)
                })
        })()
    }, [reload])


    const handleDelete = (id) =>{
        id && api().delete(`parliament/${id}`)
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
            title: 'Remark',
            dataIndex: 'remark',
            key: 'remark',
        },
        {
            title: 'Action',
            key: 'action',
            render: (text, record) => {
                return <Space>
                    <a onClick={() => props.history.push(`/parliament/${record.id}`)}><EyeOutlined /></a>
                    <a onClick={() => props.history.push(`/parliament/edit/${record.id}`)}><EditOutlined /></a>
                    <a onClick={() => handleDelete(record.id)}><DeleteOutlined /></a>
                </Space>
            }
        }
    ]


    return <Card size="small">
        <Row>
            <Col span={24}>
                <Button
                    type="primary"
                    shape="round"
                    icon={<PlusOutlined />}
                    onClick={() => props.history.push("/parliament/create")}
                    style={{ marginBottom: '20px' }}
                >
                    Create parliament
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
export default withRouter(Parliament);

