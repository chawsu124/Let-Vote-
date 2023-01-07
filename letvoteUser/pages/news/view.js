// import React, { useState, useEffect } from 'react'
// import { withRouter } from "react-router-dom";
// import { Row, Button } from 'antd'
// import api from '../../api'
// import { serverUrl, imgUrl } from '../../pages/utils/helper'

// const url = `${serverUrl}`
// const imgAddress = `${imgUrl}news/`
// const id = props.match.params.id

// const News = (props) => {

//     const [data, setData] = useState([])
//     const [state, setState] = useState('')
//     const [reload, setReload] = useState(false)

//     useEffect(() => {
//         (async () => {
//             let result = await api().get(`news/${id}`)
//             //console.log(result, "result")
//             result.data.status === 200 && setState(result.data.data)
//         })()
//     }, [reload])

//     // useEffect(() => {
//     //             (async () => {
//     //                 api().get(`news/${id}`)
//     //                     .then(result => {
//     //                         result.data.status == 200 && setState(result.data.data)
//     //                     })
//     //             })()
//     //         }, [])


//     return <div>
//         <div style={{ float: "left" }}>
//             <img src={`${imgAddress}${state.image}`} width="300px" height="300px" border="2px solid black" />
//             <br /><br />
//         </div>
//         <div style={{ float: "right" }}>
//             <br />
//             <a> <b>{state.title}</b></a>
//         </div>
//         <br />
//         <div>
//             <p>{state.news_name}</p>
//         </div>
//         <Button onClick={() => props.history.push("/news")}>
//             Cancel
//         </Button>
//     </div>


// }
// export default withRouter(News);

import React, { useState, useEffect } from 'react'
import { withRouter } from "react-router-dom";
import { Card, Form, Input, Button,Col } from 'antd'
import api from '../../api'
import { serverUrl, imgUrl } from '../utils/helper'

const url = `${serverUrl}`
const imgAddress = `${imgUrl}news/`

const { TextArea } = Input;

const NewDetail = (props) => {
    const id = props.match.params.id
    const [state, setState] = useState('')

    useEffect(() => {
        (async () => {
            api().get(`news/${id}`)
                .then(result => {
                    result.data.status == 200 && setState(result.data.data)
                })
        })()
    }, [])

    const layout = {
        labelCol: { span: 8 },
        wrapperCol: { span: 8 },
    };

    const tailLayout = {
        wrapperCol: { offset: 8, span: 16 },
    };

    return <div>
        <br/>
        <Col span={24} style={{ height: "500px"}}>
        
            <div style={{ textAlign:'center'}}>
                <a style={{fontSize:'20px'}}> <b>{state.title}</b></a><br /><br />
                    <img src={`${imgAddress}${state.image}`} width="80%" height="500px" border="2px solid black" />
                    <br /><br />
                    
                    <br /><br/>
                
                    <p style={{textJustify:'justify'}}><b>{state.news_name}</b></p>
            </div>
                <br />
                <hr style={{border:'1px solid black'}}/>
                <div>
                    <Button onClick={() => props.history.push("/home")} type="primary" style={{float: "right",marginRight: "100px",marginBottom:'30px',marginTop:'30px'}}>
                        Cancel
                    </Button>
                    
                </div>
           
        </Col>
        
    </div>


}

export default withRouter(NewDetail);
