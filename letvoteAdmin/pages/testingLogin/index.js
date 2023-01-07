import React from 'react';
import {Card, Form, Button} from 'antd';
import './style.css'

const Login = () => {
    // const layout={
//         labelCol: {span:3},
//         wrapperCol; {span:9}
//     
// }


return <Card id = "login_from" style={{ textAlign: "center" , width: "50%", margin: "auto" }}>

<div class = "img">
    <Form>
        <Form.Item>
        
        <img src = "https://www.freelogodesign.org/Content/img/logo-samples/sophia.png" width = "100px"  />
        </Form.Item>
        <Form.Item>
            <h1>Myanmar Election 2020</h1>
        </Form.Item>
        <Form.Item>
            <Button id="lgo_btn" type="primary" shape= "round" size="middle" ghost="true">Admin</Button>
        </Form.Item>
        <Form.Item>
            <Button id="lgo_btn" type="primary" shape= "round" size="middle" ghost="true">User</Button>
        </Form.Item>
    </Form>
</div>
</Card>
}
export default Login;
