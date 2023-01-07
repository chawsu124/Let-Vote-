import React, { useState, useEffect } from 'react'
import { withRouter } from "react-router-dom";
import { Table, Col, Row } from 'antd'
import api from '../../api'
import { Form, Select } from 'antd'
//import '../../index'
const { Option } = Select

const Office = (props) => {
    const [form] = Form.useForm();
    const [data, setData] = useState([])
    const [reload, setReload] = useState(false)
    const [state_division, setStateDivision] = useState([])
    const [district, setDistrict] = useState([])
    const [township, setTownship] = useState([])
    const [town, setTown] = useState([])
    //const [wards, setWards] = useState([])

    useEffect(() => {
        (async () => {
            api().get('office')
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
            title: 'လိပ်စာ',
            dataIndex: 'address',
            key: 'address',
        },
        {
            title: 'စာတိုက်လိပ်စာအမှတ်',
            dataIndex: 'po_no',
            key: 'po_no',
        },
        {
            title: 'ဖုန်းနံပါတ်-၁',
            dataIndex: 'ph1',
            key: 'ph1',
        },
        {
            title: 'ဖုန်းနံပါတ်-၂',
            dataIndex: 'ph2',
            key: 'ph2',
        },
        {
            title: 'အိးမေးလ်',
            dataIndex: 'email',
            key: 'email',
        },
        {
            title: 'မဆောက်အအုံပုံစံ',
            dataIndex: 'building_type',
            key: 'building_type'
        },
        {
            title: 'အငှား/ကိုယ်ပိုင်',
            dataIndex: 'rental',
            key: 'rental',
        }
    ]
    const onChangeStateDivision = (value) => {
        value && form.setFieldsValue({
            id: value
        })
        api().get(`getOfficeByStateDivisionId/${value}`)
        .then(result => {
            result.data.status === 200 && setData(result.data.data)
        })
    }

    const onChangeDistrict = (value) => {
        value && form.setFieldsValue({
            id: value
        })
        api().get(`getOfficeByDistrictId/${value}`)
        .then(result => {
            result.data.status === 200 && setData(result.data.data)
        })
    }

    const onChangeTownship = (value) => {
        value && form.setFieldsValue({
            id: value
        })
        api().get(`getOfficeByTownshipId/${value}`)
        .then(result => {
            result.data.status === 200 && setData(result.data.data)
        })
    }

    const onChangeTown = (value) => {
        value && form.setFieldsValue({
            id: value
        })
        api().get(`getOfficeByTownId/${value}`)
        .then(result => {
            result.data.status === 200 && setData(result.data.data)
        })
    }
   

    return <>
                <br/><br/>
    <Row>
        
        <Col span={24}>
            <Row>
            <Col span={6}>
                <Select
                    showSearch
                    style={{ width: 200 }}
                    placeholder="Select a state division"
                    optionFilterProp="children"
                    onChange={onChangeStateDivision}
                >
                    {
                        state_division && state_division.length > 0 && state_division.map((item) => {
                            return <Option value={item.id}>{item.name}</Option>
                        })
                    }
                </Select>
                </Col>

                <Col span={6}>
                <Select
                    showSearch
                    style={{ width: 200 }}
                    placeholder="Select a district name"
                    optionFilterProp="children"
                    onChange={onChangeDistrict}

                >
                    {
                        district && district.length > 0 && district.map((item) => {
                            return <Option value={item.id}>{item.name}</Option>
                        })
                    }
                </Select>
                </Col>

                <Col span={6}>
                <Select
                    showSearch
                    style={{ width: 200 }}
                    placeholder="Select a township name"
                    optionFilterProp="children"
                    onChange={onChangeTownship}
                >
                    {
                        township && township.length > 0 && township.map((item) => {
                            return <Option value={item.id}>{item.name}</Option>
                        })
                    }
                </Select>
                </Col>

                <Col span={6}>
                <Select
                    showSearch
                    style={{ width: 200 }}
                    placeholder="Select a town name"
                    optionFilterProp="children"
                    onChange={onChangeTown}
                >
                    {
                        town && town.length > 0 && town.map((item) => {
                            return <Option value={item.id}>{item.name}</Option>
                        })
                    }
                </Select>
                </Col>
            </Row>
            <Row>
                <Col span={24}>
                    <Table dataSource={data} columns={columns} style={{ margin: '30px' }} className="ant-table-content" bordered />

                </Col>
            </Row>

        </Col>
    </Row>
    </>
}
export default withRouter(Office);


