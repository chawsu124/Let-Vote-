import React, { useState, useEffect } from 'react'
import { withRouter } from "react-router-dom";
import { PlusOutlined, EyeOutlined, EditOutlined, DeleteOutlined } from '@ant-design/icons';
import { Table, Card, Button, Row, Col, Space } from 'antd'
import { noti } from '../../component/noti'
import api from '../../api'

const VillageTract = (props) => {

    const [data, setData] = useState([])
    const [reload, setReload] = useState(false)

    useEffect(() => {
        (async () => {
            api().get('village_tract')
                .then(result => {
                    result.data.status == 200 && setData(result.data.data)
                })
        })()
    }, [reload])

    const handleDelete = (id) =>{
        id && api().delete(`village_tract/${id}`)
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
            title: 'Code',
            dataIndex: 'code',
            key: 'code',
        },
        {
            title: 'Town_Name',
            dataIndex: 'town_name',
            key: 'town_name',
        },
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
                    <a onClick={() => props.history.push(`/village_tract/${record.id}`)}><EyeOutlined /></a>
                    <a onClick={() => props.history.push(`/village_tract/edit/${record.id}`)}><EditOutlined /></a>
                    <a onClick={() => handleDelete(record.id)}><DeleteOutlined /></a>
                </Space>
            }
        }
    ];

    return <Card size="small" >
        <Row>
            <Col span={18}>
                <Button
                    type="primary"
                    shape="round"
                    icon={<PlusOutlined />}
                    onClick={() => props.history.push("/village_tract/create")}
                    style={{marginBottom: '20px'}}
                >
                    Create VillageTract
                </Button>
            </Col>
        </Row>
        <Row>
            <Col span={18}>
                <Table dataSource={data} columns={columns} />
            </Col>
        </Row>
    </Card>
}
export default withRouter(VillageTract);

