import React, { useState, useEffect } from 'react'
import { withRouter } from "react-router-dom";
import { Table, Row ,Button} from 'antd'
import api from '../../api'
import { serverUrl, imgUrl } from '../../pages/utils/helper'
import NewDetail from './view'

const url = `${serverUrl}`
const imgAddress = `${imgUrl}news/`


const News = (props) => {

    const [data, setData] = useState([])
    const [state, setState] = useState('')
    const [reload, setReload] = useState(false)

    useEffect(() => {
        (async () => {
            let result = await api().get(`news`)
            //console.log(result, "result")
            result.data.status === 200 && setData(result.data.data)
        })()
    }, [reload])


    
    return <Row>
                <Row style={{marginLeft:'120px'}}><h3><b>ရွေးကောက်ပွဲဆိုင်ရာ နောက်ဆုံးရသတင်းများ</b></h3></Row><br/><br/>
        {
            
            data && data.length > 0 ? <>
                {
                    data.map((item) => {
                        // console.log(item, "item")
                        // console.log(imgAddress, "imgAddress")
                        return <div>
                            <div style={{ float: "left"}}>
                                <img src={`${imgAddress}${item.image}`} width="150px" height="150px" border-style="solid"/>
                                <br/><br/>
                            </div>
                                <div style={{ float: "left" }}>
                                    <br/>
                                <a> <b>{item.title}</b></a>
                                </div><br/><br/>
                                <div>
                                    <p>{item.news_name.substring(0,150)}......</p>
                                    <a onClick={() => props.history.push(`/news/${item.id}`)} 
                                    style={{ float: "right",buttom: "0",marginRight:"5px",fontSize: "20px" }}>SeeMore...</a>

                                    </div>
                                 </div>
                      
                    })
                }
                
            </> : <div>No Record Found ....</div>
            
        }
    </Row>

}
export default withRouter(News);
