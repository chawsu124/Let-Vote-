import React from 'react';
import {Form, Button, Card} from 'antd';
import {Checkbox} from 'antd';
import './loginstyle.css';
import { UserOutlined } from '@ant-design/icons';

const LoginForm = () =>{
    // const layout={
//         labelCol: {span:3},
//         wrapperCol; {span:9}
//     
// }

return <Card class = "lgn_form" style = {{width: "50%", margin: "auto"}}>
    <div class = "lgn_form">
        <Form>
            <Form.Item>
                <img class="img" src = "https://www.aushidhi.org/images/login-img.png" width = "100px" height = "100px"></img>
            </Form.Item>
            <Form.Item>
                <h1>Admin Login</h1>
            </Form.Item>
            <Form.Item>
                <input type="text" id="username" name="username" placeholder="username" prefix={<UserOutlined />} />
            </Form.Item>
            <Form.Item>
            <input type="text" id="password" name="password" placeholder="password" prefix={<UserOutlined />} />
            </Form.Item>
            <Form.Item>
                <div class = "left"><Checkbox class="ch1">Remember me!</Checkbox></div>
                <div class = "right"><a href="#" class="link">Forget Password?</a></div>
            </Form.Item>
            <Form.Item>
                <Button type="submit" id="lgo_btn">Login</Button>
            </Form.Item>
        </Form>
    </div>
</Card>

}
export default LoginForm;