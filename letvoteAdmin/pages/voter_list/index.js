import React, { useState, useEffect } from 'react'
import { withRouter } from "react-router-dom";
import { PlusOutlined, EyeOutlined, EditOutlined, DeleteOutlined } from '@ant-design/icons';
import { Card, Table, Button, Col, Row, Space } from 'antd'
import api from '../../api'
import { noti } from '../../component/noti';

const Voter = (props) => {

    const [data, setData] = useState([])
    const [reload, setReload] = useState(false)

    useEffect(() => {
        (async () => {
            api().get('voter_list')
                .then(result => {
                    result.data.status == 200 && setData(result.data.data)
                })
        })()
    }, [reload])


    const handleDelete = (id) =>{
        id && api().delete(`voter_list/${id}`)
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
            title: 'Village_Name',
            dataIndex: 'village_name',
            key: 'village_name',
        },
        {
            title: 'Ward_Name',
            dataIndex: 'ward_name',
            key: 'ward_name',
        },
        {
            title: 'Election_Name',
            dataIndex: 'election_name',
            key: 'election_name',
        },
        // {
        //     title: 'Parliament_Name',
        //     dataIndex: 'parliament_name',
        //     key: 'parliament_name',
        // },
        {
            title: 'NRC_no',
            dataIndex: 'nrc_no',
            key: 'nrc_no',
        },
        {
            title: 'DOB',
            dataIndex: 'dob',
            key: 'dob',
        },
        {
            title: 'Religion',
            dataIndex: 'religion',
            key: 'religion',
        },
        {
            title: 'Permanent_address',
            dataIndex: 'permanent_address',
            key: 'permanent_address',
        },
        {
            title: 'Action',
            key: 'action',
            render: (text, record) => {
                return <Space>
                    <a onClick={() => props.history.push(`/voter_list/${record.id}`)}><EyeOutlined /></a>
                    <a onClick={() => props.history.push(`/voter_list/edit/${record.id}`)}><EditOutlined /></a>
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
                    onClick={() => props.history.push("/voter_list/create")}
                    style={{ marginBottom: '20px' }}
                >
                    Create voter_list
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
export default withRouter(Voter);

