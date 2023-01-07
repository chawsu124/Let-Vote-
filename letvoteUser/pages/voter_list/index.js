import React, { useState, useEffect } from 'react'
import { withRouter } from "react-router-dom";
import { PlusOutlined, EyeOutlined, EditOutlined, DeleteOutlined } from '@ant-design/icons';
import { Card, Table, Button, Col, Row, Space, Form ,Select, Input } from 'antd'
import api from '../../api'
import { noti } from '../../component/noti';
const { Option } = Select;

const VoterList = (props) => {

    const [form] = Form.useForm();

    const [data, setData] = useState([])
    const [reload, setReload] = useState(false)
    const [state_division, setStateDivision] = useState([])
    const [district, setDistrict] = useState([])
    const [township, setTownship] = useState([])
    const [town, setTown] = useState([])
    const [wards, setWards] = useState([])
    const [village_tract, setVillageTract] = useState([])
    const [village, setVillage] = useState([])
    const [voter_list,setVoterlist]=useState([])




    useEffect(() => {
        (async () => {
            api().get('voter_list')
                .then(result => {
                    result.data.status == 200 && setVoterlist(result.data.data)
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
            api().get('wards')
                .then(result => {
                    result.data.status == 200 && setWards(result.data.data)
                })
                api().get('village_tract')
                .then(result => {
                    result.data.status == 200 && setVillageTract(result.data.data)
                })
                api().get('village')
                .then(result => {
                    result.data.status == 200 && setVillage(result.data.data)
                })
        })()
    }, [reload])


    // const handleDelete = (id) => {
    //     id && api().delete(`voter_list/${id}`)
    //         .then(res => {
    //             if (res && res.data.status === 200) {
    //                 setReload(!reload)
    //                 noti('success', "Record delete successful.")
    //             } else {
    //                 noti('error', "Something wrong")
    //             }
    //         })
    // }
    const onChangeStateDivision= (value) => {
        value && form.setFieldsValue({
            state_division_id: value
        })
        api().get(`getVoterListByStateDivisionId/${value}`)
        .then(result => {
            result.data.status == 200 && setData(result.data.data)
        })
        
    }
    const onChangedistrict= (value) => {
        value && form.setFieldsValue({
            district_id: value
        })
        api().get(`getVoterListByDistrictId/${value}`)
        .then(result => {
            result.data.status == 200 && setData(result.data.data)
        })
        
       
    }
    const onChangetownship= (value) => {
        value && form.setFieldsValue({
            township_id: value
        })
        api().get(`getVoterListByTownshipId/${value}`)
        .then(result => {
            result.data.status == 200 && setData(result.data.data)
        })
        
        
    }
   
    const onChangetown= (value) => {
        value && form.setFieldsValue({
            town_id: value
        })
        api().get(`getVoterListByTownId/${value}`)
        .then(result => {
            result.data.status == 200 && setData(result.data.data)
        })
       
    }
    const onChangeWard= (value) => {
        value && form.setFieldsValue({
            ward_id: value
        })
        api().get(`getVoterListByWardId/${value}`)
        .then(result => {
            result.data.status == 200 && setData(result.data.data)
        })
        
        
    }
    const onChangevillagetract= (value) => {
        value && form.setFieldsValue({
            village_tract_id: value
        })
        api().get(`getVoterListByVillageTractId/${value}`)
        .then(result => {
            result.data.status == 200 && setData(result.data.data)
        })
        
        
    }
    
    const onChangeVillage= (value) => {
        value && form.setFieldsValue({
            id: value
        })
        api().get(`getVoterListByVillageId/${value}`)
        .then(result => {
            result.data.status == 200 && setData(result.data.data)
        })
        
        
    }

    

    const columns = [
        
        {
            title: 'အမည်',
            dataIndex: 'name',
            key: 'name',
        },
        {
            title: 'မှတ်ပုံတင်အမှတ် ',
            dataIndex: 'nrc_no',
            key: 'nrc_no',
        },
        {
            title: 'မွေးသက္ကရာဇ်',
            dataIndex: 'dob',
            key: 'dob',
        },
        {
            title: 'ကိုးကွယ်သည့်ဘာသာ',
            dataIndex: 'religion',
            key: 'religion',
        },
        {
            title: 'နေရပ်လိပ်စာ',
            dataIndex: 'permanent_address',
            key: 'permanent_address',
        },
        
        
    ]
    


    return <div>
    <Row gutter={16}>
        <Col span={3}>
            <Form.Item

                name="state_division_id"
                rules={[{ required: true, message: 'Please input your  state division id!' }]}
            >
                {/* <Input /> */}
               <b> <Select
                    showSearch
                    style={{ width: 150}}
                    placeholder="တိုင်း/ ပြည်နယ်"
                    optionFilterProp="children"
                    onChange={onChangeStateDivision}
                >
                    {
                        state_division&& state_division.length > 0 && state_division.map((item) => {
                            return <Option value={item.id}>{item.name}</Option>
                        })
                    }
                </Select></b>

            </Form.Item>
        </Col>
        <Col span={3}>
            <Form.Item

                name="district_id"
                rules={[{ required: true, message: 'Please input your  district id!' }]}
            >
                {/* <Input /> */}
              <b>  <Select
                    showSearch
                    style={{ width: 150 }}
                    placeholder="  ခရိုင်  "
                    optionFilterProp="children"
                    onChange={onChangedistrict}
                >
                    {
                        district && district.length > 0 && district.map((item) => {
                            return <Option value={item.id}>{item.name}</Option>
                        })
                    }
                </Select></b>

            </Form.Item>
        </Col>
        <Col span={3}> <Form.Item
            
            name="township_id"
            rules={[{ required: true, message: 'Please input your  township id!' }]}
        >
            {/* <Input /> */}
           <b> <Select
                showSearch
                style={{ width: 150}}
                placeholder=" မြို့နယ်"
                optionFilterProp="children"
                onChange={onChangetownship}
            >
                {
                    township && township.length > 0 && township.map((item) => {
                        return <Option value={item.id}>{item.name}</Option>
                    })
                }
            </Select></b>

        </Form.Item></Col>
        <Col span= {3}> <Form.Item
                
                name="town_id"
                rules={[{ required: true, message: 'Please input your  town id!' }]}
            >
                {/* <Input /> */}
               <b> <Select
                    showSearch
                    style={{ width: 150 }}
                    placeholder="မြို့"
                    optionFilterProp="children"
                    onChange={onChangetown}
                >
                    {
                        town && town.length > 0 && town.map((item) => {
                            return <Option value={item.id}>{item.name}</Option>
                        })
                    }
                </Select></b>

            </Form.Item></Col>
            {/* <Col span= {3}> <Form.Item
            >
                <Select defaultValue=" ရပ်ကွက်/ကျေးရွာအုပ်စု" style={{ width: 150 }}>
                    <Option value="ရပ်ကွက်">ရပ်ကွက်</Option>
                    <Option value="ကျေးရွာအုပ်စု">ကျေးရွာအုပ်စု</Option>
      
      
                </Select>

            </Form.Item></Col> */}
            <Col span = {3}>
            <Form.Item
                    
                    name="wards_id"
                    rules={[{ required: true, message: 'Please input your  wards id!' }]}
                >
                    {/* <Input /> */}
                    <b><Select
                        showSearch
                        style={{ width: 150 }}
                        placeholder="ရပ်ကွက်"
                        optionFilterProp="children"
                        onChange={onChangeWard}
                    >
                        {
                            wards && wards.length > 0 && wards.map((item) => {
                                return <Option value={item.id}>{item.name}</Option>
                            })
                        }
                    </Select></b>

                </Form.Item>
                </Col>
                <Col span = {3} >

                <Form.Item
                  
                    name="village_tract_id"
                    rules={[{ required: true, message: 'Please input your  village_tract id!' }]}
                >
                    {/* <Input /> */}
                    <b>   <Select
                        showSearch
                        style={{ width: 150 }}
                        placeholder="ကျေးရွာအုပ်စု"
                        optionFilterProp="children"
                        onChange={onChangevillagetract}
                    >
                        {
                            village_tract && village_tract.length > 0 && village_tract.map((item) => {
                                return <Option value={item.id}>{item.name}</Option>
                            })
                        }
                    </Select></b>

                </Form.Item></Col>
                <Col span = {3}>

            <Form.Item
                   
                    name="village_id"
                    rules={[{ required: true, message: 'Please input your village id!' }]}
                >
                    {/* <Input /> */}
                   <b><Select
                        showSearch
                        style={{ width: 150 }}
                        placeholder="ကျေးရွာ"
                        optionFilterProp="children"
                        onChange={onChangeVillage}
                    >
                        {
                            village && village.length > 0 && village.map((item) => {
                                return <Option value={item.id}>{item.name}</Option>
                            })
                        }
                    </Select></b> 

                </Form.Item>
                </Col>

                
                
    </Row>
    <Row>
    <Col span={24}>
        <Table dataSource={data} columns={columns} />
    </Col>
</Row>


</div>
}
export default withRouter(VoterList);

