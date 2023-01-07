import React, { useState, useEffect } from 'react'
import { withRouter } from "react-router-dom";
import { PlusOutlined, EyeOutlined, EditOutlined, DeleteOutlined } from '@ant-design/icons';
import { Card, Table, Button, Col, Row, Space } from 'antd'
import api from '../../api'
import { noti } from '../../component/noti';

const Office = (props) => {

    const [data, setData] = useState([])
    const [reload, setReload] = useState(false)

    useEffect(() => {
        (async () => {
            api().get('office')
                .then(result => {
                    result.data.status == 200 && setData(result.data.data)
                })
        })()
    }, [reload])


    const handleDelete = (id) =>{
        id && api().delete(`office/${id}`)
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
            title: 'Address',
            dataIndex: 'address',
            key: 'address',
        },
        {
            title: 'Village_Name',
            dataIndex: 'village_name',
            key: 'village_name',
        },
        {
            title: 'Ward_Name',
            dataIndex: 'wards_name',
            key: 'wards_name',
        },
        {
            title: 'Ph_no',
            dataIndex: 'ph_no',
            key: 'ph_no',
        },
        {
            title: 'Ph1',
            dataIndex: 'ph1',
            key: 'ph1',
        },
        {
            title: 'Ph2',
            dataIndex: 'ph2',
            key: 'ph2',
        },
        {
            title: 'Email',
            dataIndex: 'email',
            key: 'email',
        },
        {
            title: 'Building_type',
            dataIndex: 'building_type',
            key: 'building_type',
        },
        {
            title: 'Rental',
            dataIndex: 'rental',
            key: 'rental',
        },
        {
            title: 'Action',
            key: 'action',
            render: (text, record) => {
                return <Space>
                    <a onClick={() => props.history.push(`/office/${record.id}`)}><EyeOutlined /></a>
                    <a onClick={() => props.history.push(`/office/edit/${record.id}`)}><EditOutlined /></a>
                    <a onClick={() => handleDelete(record.id)}><DeleteOutlined /></a>
                </Space>
            }
        }
    ]


    return <Card size="small">
        <Row>
            <Col span={18}>
                <Button
                    type="primary"
                    shape="round"
                    icon={<PlusOutlined />}
                    onClick={() => props.history.push("/office/create")}
                    style={{ marginBottom: '20px' }}
                >
                    Create office
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
export default withRouter(Office);

