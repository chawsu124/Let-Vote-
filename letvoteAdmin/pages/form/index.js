import React,{useEffect,useContext} from 'react'
import { Form, Input, Button, Checkbox } from 'antd';
import {DispatchContext} from '../../context/global'
import { noti } from '../../component/noti'
import { withRouter } from 'react-router-dom';
import '../../index.css'
import {UserOutlined, LockOutlined} from '@ant-design/icons'
import api from '../../api'
import axios from 'axios'
const layout = {
    labelCol: { span: 8 },
    wrapperCol: { span: 8 },
};

const logoLayout={
    wrapperCol:{offset: 10,span: 10}
}

const bodyLayout={
    wrapperCol: {offset: 8, span: 8}
}

const tailLayout = {
    wrapperCol: { offset: 8, span: 8 },
};

const Forgot = (props) => {


    return (
        <div id="forgot">
            <Form
                {...layout}
                name="forgot"
                
            >
                <div id="intro">
                    Please wait a few minutes to receive you 6-digit code before trying again.
                </div>
                   
                <div>
                    Please check your device for a text message with your code .Your code is characters in length.
                </div>
               <h3>Enter the 6-digit code</h3>
                <Form.Item {...bodyLayout}>
                    <Input.Password placeholder="######" />
                </Form.Item>

                <Form.Item {...bodyLayout}>
                    <Button id="nextbtn">
                            Next
                    </Button>
                </Form.Item>
                <Form.Item {...bodyLayout}>
                    <Button id="cancelbtn">
                            Cancel
                    </Button>
                </Form.Item>

            </Form>
        </div>
    )
};
export default withRouter(Forgot);
