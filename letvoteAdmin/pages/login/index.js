import React, { useContext } from 'react'
import { Form, Input, Button, Checkbox } from 'antd';
import { DispatchContext } from '../../context/global'
import { noti } from '../../component/noti'
import api from '../../api'
import { withRouter } from 'react-router-dom';
import Password from 'antd/lib/input/Password';

const layout = {
    labelCol: { span: 8 },
    wrapperCol: { span: 8 },
};

const tailLayout = {
    wrapperCol: { offset: 8, span: 8 },
};
const logoLayout = {
    wrapperCol: { offset: 10, span: 6 },
};
const headerLayout = {
    wrapperCol: { offset: 10, span: 6 },
};


const Login = (props) => {

    const dispatch = useContext(DispatchContext);


    const onFinish = async (values) => {

        let result = await api().post('login', values)

        if (result && result.data && result.data.status === 200) {
            dispatch({ type: 'SET_USER', user: result.data.data })
            noti('success', "Login successful.")
            props.history.push("/state-division")
        } else {
            noti('error', "Username or password is incorrect")
        }
    };

    const onFinishFailed = errorInfo => {
        console.log('Failed:', errorInfo);
    };

    return (

        <div id="login" style={{ maxHeight: '500px' }}>
            <Form
                {...layout}
                name="login"
                onFinish={onFinish}
                onFinishFailed={onFinishFailed}
            >
                <Form.Item {...logoLayout}>
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcT94sb9rADtoKiSuQa-zPaPd5gObCZG-j6-hg&usqp=CAU" width="150" height="150" />
                </Form.Item>
                <Form.Item {...headerLayout}
                >
                    <h1>Admin Login</h1>
                </Form.Item>
                <Form.Item
                    label="Username"
                    name="username"
                    rules={[{ required: true, message: 'Please input your username!' }]}
                >
                    <Input />
                </Form.Item>

                <Form.Item
                    label="Password"
                    name="password"
                    rules={[{ required: true, message: 'Please input your password!' }]}
                >
                    <Input.Password />
                </Form.Item>

                <Form.Item {...tailLayout}>
                    <Checkbox style={{ color: "#fff" }}>Remember Me</Checkbox><br />
                    <Button type="primary" htmlType="submit" >
                        Login
                    </Button>

                    <Button type="primary" htmlType="submit" danger style={{ marginLeft: "20px" }}>
                        Forget Password
                    </Button>
                </Form.Item>
            </Form>
        </div>
    );
};

export default withRouter(Login);