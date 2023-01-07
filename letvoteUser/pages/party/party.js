import React, { useState, useEffect } from 'react'
import { withRouter } from "react-router-dom";
import { PlusOutlined, EyeOutlined, EditOutlined, DeleteOutlined } from '@ant-design/icons';
import { Card, Table, Button, Col, Row, Space } from 'antd'
import api from '../../api'
import { serverUrl, imgUrl } from '../../pages/utils/helper'
//ပြည်သူ့ရှေ့ဆောင်ပါတီ

const url = `${serverUrl}`
const imgAddress = `${imgUrl}party/`


const Party = (props) => {

    const [data, setData] = useState([])

    useEffect(() => {
        (async () => {
            let result = await api().get(`party`)
            result.data.status === 200 && setData(result.data.data)
        })()
    }, [])

    return <Row>
        <Row style={{ marginLeft: '100px' }}><h3><b>၂၀၂၀ ခုနှစ် အထွေထွေရွေးကောက်ပွဲကြီး တွင် ပါ၀င် ယှဉ်ပြိုင်ကြမည့် ပါတီများ </b></h3></Row><br /><br />

        {
            data && data.length > 0 ? <>
                {
                    data.map((item) => {
                        // console.log(item, "item")
                        // console.log(imgAddress, "imgAddress")
                        return <div>
                                    <div style={{ float: "left", marginLeft: "20px" }}>
                                        <img src={`${imgAddress}${item.image}`} width="150px" height="150px" border="2px solid black" />
                                        <br /><br />
                                    </div>
                                    <div style={{ float: "right" }}>
                                        <br /> <br />

                                        <p><a href={item.link} style={{ color: 'black' }} target="_blank">{item.name}</a></p>
                                        {/* <a onClick={() => props.history.push("/newDetail")}> <b>{item.name}</b></a> */}
                                    </div>
                                     {/* <hr style={{ border: '1px dotted black' }} /> */}
                                       
                                   
                        </div>

                    })
                }
            </> : <div>No Record Found ....</div>
        }
        {/* <a onClick={() => props.history.push(`/party`)} 
                                    style={{ float: "left",buttom: "0",marginleft:"10px",fontSize: "20px" }}>SeeMore...</a> */}
    </Row>


}


export default withRouter(Party);
