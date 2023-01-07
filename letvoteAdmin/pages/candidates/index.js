import React, { useState, useEffect } from 'react'
import { withRouter } from "react-router-dom";
import { PlusOutlined, EyeOutlined, EditOutlined, DeleteOutlined } from '@ant-design/icons';
import { Card, Table, Button, Col, Row, Space } from 'antd'
import api from '../../api'
import { noti } from '../../component/noti';

const Candidates = (props) => {

    const [data, setData] = useState([])
    const [reload, setReload] = useState(false)

    useEffect(() => {
        (async () => {
            api().get('candidates')
                .then(result => {
                    result.data.status == 200 && setData(result.data.data)
                })
        })()
    }, [reload])


    const handleDelete = (id) =>{
        id && api().delete(`candidates/${id}`)
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
        // {
        //     title: 'DOB',
        //     dataIndex: 'dob',
        //     key: 'dob',
        // },
        
        {
            title: 'Party',
            dataIndex: 'party_name',
            key: 'party_name',
        },
        {
            title: 'Parliament',
            dataIndex: 'parliament_name',
            key: 'parliament_name',
        },
        {
            title: 'Election_Name',
            dataIndex: 'election_name',
            key: 'election_name',
        },
        {
            title: 'Consti_Code1',
            dataIndex: 'constituency_code1',
            key: 'constituency_code1',
        },
        // {
        //     title: 'Image',
        //     dataIndex: 'image',
        //     key: 'image',
        // },
        {
            title: 'Fathername',
            dataIndex: 'fathername',
            key: 'fathername',
        },
        {
            title: 'Religion',
            dataIndex: 'religion',
            key: 'religion',
        },
        {
            title: 'NRC_no',
            dataIndex: 'nrc_no',
            key: 'nrc_no',
        },
        {
            title: 'Education',
            dataIndex: 'education',
            key: 'education',
        },
        {
            title: 'Occupation',
            dataIndex: 'occupation',
            key: 'occupation',
        },
        {
            title: 'address',
            dataIndex: 'permanent_address',
            key: 'permanent_address',
        },
        {
            title: 'Action',
            key: 'action',
            render: (text, record) => {
                return <Space>
                    <a onClick={() => props.history.push(`/candidates/${record.id}`)}><EyeOutlined /></a>
                    <a onClick={() => props.history.push(`/candidates/edit/${record.id}`)}><EditOutlined /></a>
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
                    onClick={() => props.history.push("/candidates/create")}
                    style={{ marginBottom: '20px' }}
                >
                    Create Candidates
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
export default withRouter(Candidates);

