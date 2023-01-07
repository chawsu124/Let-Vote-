import React, { useState, useEffect } from 'react'
import { withRouter } from "react-router-dom";
import { Card, Form, Input, Button } from 'antd'
import api from '../../api'
import { serverUrl, imgUrl } from '.././utils/helper'
import { Col, Row } from 'antd'
import '../../index'

const url = `${serverUrl}`
const imgAddress = `${imgUrl}candidate/`

const { TextArea } = Input;

const CandidateDetail = (props) => {
    const id = props.match.params.id
    const [state, setState] = useState('')

    useEffect(() => {
        (async () => {
            api().get(`candidates/${id}`)
                .then(result => {
                    result.data.status == 200 && setState(result.data.data)
                })
        })()
    }, [])

    const layout = {
        labelCol: { span: 6 },
        wrapperCol: { span: 8 },
    };

    return (
        state && <Row span={24} id="candidate_profile">
            <Col span={8}>
             
                <img src={`${imgAddress}${state.image}`} width="300px" height="350px" style={{  border: '4px solid #A19A9A' }}/>
            </Col>

            <Col span={10}>           
                <table width="500px" height="500px">
                    <tr>
                        <td>အမည်</td>
                        <td>{state.name}</td>
                    </tr>
                    <tr>
                        <td>အဖအမည် </td>
                        <td>{state.fathername}</td>
                    </tr>
                    <tr>
                        <td>ရွေးကောက်ပွဲအမည်</td>
                        <td>{state.election_name}</td>
                    </tr>
                    <tr>
                        <td>မွေးသက္ကရာဇ်</td>
                        <td>{state.dob}</td>
                    </tr>
                    <tr>
                        <td>ပါဝင်ယှဉ်ပြိူင်မည့်လွှတ်တော် </td>
                        <td>{state.parliament_name}</td>
                    </tr>
                    <tr>
                        <td>နိုင်ငံသားမှတ်ပုံတင်အမှတ်  </td>
                        <td>{state.nrc_no}</td>
                    </tr>
                    <tr>
                        <td>ကိုးကွယ်သည့်ဘာသာ​</td>
                        <td>{state.religion}</td>
                    </tr>
                    <tr>
                        <td>ပညာအရည်အချင်း </td>
                        <td>{state.education}</td>
                    </tr>
                 
                    <tr>
                        <td>ရွေးကောက်ပွဲအမည်</td>
                        <td>{state.occupation}</td>
                    </tr>
                    <tr>
                        <td>နေရပ်လိပ်စာ</td>
                        <td>{state.permanent_address}</td>
                    </tr>
                </table>
            </Col> 
            <Row id="remark">
                <p><b>The 8 November elections were a major waypoint in Myanmar’s transition from authoritarian rule. Holding a peaceful, orderly vote in a context of little experience of electoral democracy, deep political fissures and ongoing armed conflict in several areas was a major achievement for all political actors, the election commission and the country as a whole. </b></p>
            </Row>
            <Row>
                    <Button onClick={() => props.history.push("/candidate")} type="primary" style={{marginBottom:'30px',marginTop:'30px',marginLeft:'90%'}}>
                    ရှေ့သို့
                    </Button>
                    </Row>   
                    
           
        </Row>

    )
}

export default withRouter(CandidateDetail);
