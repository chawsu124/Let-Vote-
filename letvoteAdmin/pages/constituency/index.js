import React, { useState, useEffect } from 'react'
import { withRouter } from "react-router-dom";
import { PlusOutlined, EyeOutlined, EditOutlined, DeleteOutlined } from '@ant-design/icons';
import { Card, Table, Button, Col, Row, Space } from 'antd'
import api from '../../api'
import { noti } from '../../component/noti';

const Constituency = (props) => {

    const [data, setData] = useState([])
    const [reload, setReload] = useState(false)

    useEffect(() => {
        (async () => {
            api().get('constituency')
                .then(result => {
                    result.data.status == 200 && setData(result.data.data)
                })
        })()
    }, [reload])


    const handleDelete = (id) =>{
        id && api().delete(`constituency/${id}`)
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
            title: 'Town Name',
            dataIndex: 'town_name',
            key: 'town_name',
        },
        
        {
            title: 'Election_Name',
            dataIndex: 'election_name',
            key: 'election_name',
        },
        
        {
            title: 'Code1',
            dataIndex: 'code1',
            key: 'code1',
        },
        {
            title: 'Code2',
            dataIndex: 'code2',
            key: 'code2',
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
                    <a onClick={() => props.history.push(`/constituency/${record.id}`)}><EyeOutlined /></a>
                    <a onClick={() => props.history.push(`/constituency/edit/${record.id}`)}><EditOutlined /></a>
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
                    onClick={() => props.history.push("/constituency/create")}
                    style={{ marginBottom: '20px' }}
                >
                    Create constituency
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
export default withRouter(Constituency);

