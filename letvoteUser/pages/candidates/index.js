import React, { useState, useEffect } from 'react'
import { withRouter } from "react-router-dom";
import { Table, Col, Row } from 'antd'
import api from '../../api'
import { Form, Input, Select, Space } from 'antd'
import '../../index'
const { Option } = Select

const Town = (props) => {
    const [form] = Form.useForm();
    const [data, setData] = useState([])
    const [reload, setReload] = useState(false)
    const [state_division, setStateDivision] = useState([])
    const [district, setDistrict] = useState([])
    const [township, setTownship] = useState([])
    const [town, setTown] = useState([])
    const [wards, setWards] = useState([])

    useEffect(() => {
        (async () => {
            api().get('candidates')
                .then(result => {
                    result.data.status == 200 && setData(result.data.data)
                })
            api().get('state_division')
                .then(result => {
                    result.data.status == 200 && setStateDivision(result.data.data)
                })
            api().get('district')
                .then(result => {
                    result.data.status == 200 && setDistrict(result.data.data)
                })
            api().get('township')
                .then(result => {
                    result.data.status == 200 && setTownship(result.data.data)
                })
            api().get('town')
                .then(result => {
                    result.data.status == 200 && setTown(result.data.data)
                })
    
        })()
    }, [reload])

    const columns = [
        {
            title: 'အမည် ',
            dataIndex: 'name',
            key: 'name',
        },
        {
            title: 'အဖအမည်',
            dataIndex: 'fathername',
            key: 'fathername',

        },
        {
            title: 'ရွေးကောက်ပွဲအမည်',
            dataIndex: 'election_name',
            key: 'election_name',
        },
        {
            title: 'ပါတီ',
            dataIndex: 'party_name',
            key: 'party_name',
        },
    
        {
            title: 'လွှတ်တော်',
            dataIndex: 'parliament_name',
            key: 'parliament_name',
        },
       
        {
            title: 'အသေးစိတ်အချက်အလက်',
            key: 'action',
            render: (text, record) => {
                return <Space>
                    <a onClick={() => props.history.push(`/view/${record.id}`)}>အသေးစိတ်ကြည့်ရှုရန်</a>
                    
                </Space>
            }
        }
    ]
    const onChangeStateDivision = (value) => {
        value && form.setFieldsValue({
            state_division_id: value
        })
        api().get(`getCandidatesByStateDivisionId/${value}`)
        .then(result => {
            result.data.status == 200 && setData(result.data.data)
        })
    }

    const onChangeDistrict = (value) => {
        value && form.setFieldsValue({
            district_id: value
        })
        api().get(`getCandidatesByDistrictId/${value}`)
        .then(result => {
            result.data.status == 200 && setData(result.data.data)
        })
    }

    const onChangeTownship = (value) => {
        value && form.setFieldsValue({
            township_id: value
        })

        api().get(`getCandidatesByTownshipId/${value}`)
        .then(result => {
            result.data.status == 200 && setData(result.data.data)
        })
    }
    const onChangeTown = (value) => {
        value && form.setFieldsValue({
            town_id: value
        })
        api().get(`getCandidatesByTownId/${value}`)
        .then(result => {
            result.data.status == 200 && setData(result.data.data)
        })
    }
  
    return <Row>
       <Col span={24}> 
            <Row>
            <Col span={6}> 
                <Select
                    showSearch
                    style={{ width: 200 }}
                    placeholder="တိုင်း/ ပြည်နယ်"
                    optionFilterProp="children"
                    onChange={onChangeStateDivision}
                >
                    {
                        state_division && state_division.length > 0 && state_division.map((item) => {
                            return <Option value={item.id}>{item.name}</Option>
                        })
                    }
                </Select></Col>
                <Col span={6}> 
                <Select
                    showSearch
                    style={{ width: 200 }}
                    placeholder=" ခရိုင်  "
                    optionFilterProp="children"
                    onChange={onChangeDistrict}

                >
                    {
                        district && district.length > 0 && district.map((item) => {
                            return <Option value={item.id}>{item.name}</Option>
                        })
                    }
                </Select></Col>
                <Col span={6}> 
                <Select
                    showSearch
                    style={{ width: 200 }}
                    placeholder="မြို့နယ်"
                    optionFilterProp="children"
                    onChange={onChangeTownship}
                >
                    {
                        township && township.length > 0 && township.map((item) => {
                            return <Option value={item.id}>{item.name}</Option>
                        })
                    }
                </Select></Col>
                <Col span={6}> 
                <Select
                    showSearch
                    style={{ width: 200 }}
                    placeholder="မြို့"
                    optionFilterProp="children"
                    onChange={onChangeTown}
                >
                    {
                        town && town.length > 0 && town.map((item) => {
                            return <Option value={item.id}>{item.name}</Option>
                        })
                    }
                </Select></Col>
            </Row>
     <Row>
                <Col span={24}>
                    <Table dataSource={data} columns={columns} style={{ margin: '30px' }} className="ant-table-content" bordered />

                </Col>
            </Row> 
             

        </Col>
    </Row>
}
export default withRouter(Town);


