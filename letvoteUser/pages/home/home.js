import React from 'react';
import { Layout } from 'antd';
import '../../component/layout/layout.css'
import { Row, Col,Button } from 'antd';
import { Link } from 'react-router-dom'
import Car from './caro';
import News from '../../pages/news/news';
import Party from '../party/party';


const Home = (props) => {
        return <Layout className="site-layout">
                <Row>
                    <Col span={24} style={{ padding: 0, height: '550px' }}>
                        
                        <Car />
                        <div className="sub-content">
                            <div><b>အများယုံကြည်လက်ခံသည့် ရွေးကောက်ပွဲမှသည် ဒီမိုကရေစီနိုင်ငံသို့....</b>
                            <img src="https://ucstaungoo-my.sharepoint.com/personal/ingyinnphyu_ucstaungoo_edu_mm/Documents/Microsoft%20Teams%20Chat%20Files/Myanmar-_Burma_-flag-pole-removebg-preview.png" width= "50px" height= "50px" /></div>
                            <div><b>အထွေထွေရွေးကောက်ပွဲကြီး  ကျင်းပရန် ရက်ပေါင်း(၇၈)သာ ကျန်ရှိပါတော့သည်။</b></div>
                        </div>
                    </Col>
                </Row>
                <Row style={{ background: '#32a87f',margin: 'auto',textAlign: 'center', fontSize: '20px' }}>
                    <Col span={12}><br /><Party /></Col>
                    <Col span={12}><br /><News /></Col>
                </Row>
                
            </Layout>
}
export default Home;