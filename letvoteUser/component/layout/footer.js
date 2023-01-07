import React from 'react'
import { Layout } from 'antd';
import { EnvironmentOutlined, PhoneOutlined, ContactsOutlined, MailOutlined } from '@ant-design/icons';
import { Row, Col } from 'antd'
import './layout.css'
import { Link } from 'react-router-dom'

const { Footer } = Layout;

const Background = "https://ucstaungoo.sharepoint.com/sites/In-CampusInternshipProgram/Shared%20Documents/General/133582526-parliament-election-in-myanmar-3d-rendering-removebg-preview@2x.png"
const FooterMenu = () => {
    // return (
    // // <Footer style={{ textAlign: 'center' , height: '200px' , background: 'white'}}>Ant Design ©2018 Created by Ant UED</Footer>
    // <Footer style={{ position: "relative",bottom: "0", backgroundColor: "#048052"}}>
    //     <Row>
    //         <Col span={6} style={{color: "white"}}>
    //             <h1 style={{color: "white"}}><b>CONTACT US</b></h1><br/><br/>
    //             <EnvironmentOutlined />   Kanyo Village, 3 miles from northen Taungoo, Myanmar<br/>
    //             Area-It has 30 Areas Wide<br/><hr style={{color: "green"}}/>
    //             <PhoneOutlined/> Rector(09-5026008)<br/><hr />
    //             <ContactsOutlined /><Link to="/contact">   Contact Us</Link> <br /><hr />
    //             <MailOutlined/><a href="#" style={{color: "white"}}>   rector@ucstaungoo.edu.mm</a>
    //         </Col>
    //         <Col span={6} >
    //             <br/>
    //             <Link to="/">မူလစာမျက်နှာ</Link><br/><hr/>
    //             <Link to="/candidate">ကိုယ်စားလှယ်လောင်း</Link><br/><hr/>
    //             <Link to="/party">ပါတီရုံး</Link><br/><hr/>
    //             <Link to="/voter-list">မဲဆန္ဒရှင်</Link><br/><hr/>
    //             <Link to="/about">ရွေးကောက်ပွဲ အကြောင်း</Link><br/>
    //         </Col>
    //         <Col span={6} style={{backgroundImage: `url(${Background})`  }}>
    //             <br/><br/>
    //             <h1 style={{color: "white", textAlign: "center"}}><b>ABOUT THE WEBSITE</b></h1><br/><br/>
    //             <p style={{color: "white", textAlign: "center"}}>The website is developed by In-Campus Internship students of Computer Studies,Taungoo using Adobe</p>
    //         </Col>
    //         <Col span={6} style={{color: "white"}}>
    //             <br/><br/>
    //             <img src="https://i.pinimg.com/originals/41/b0/ed/41b0edd10bd1fcca1833c2e651fcfdaa.png" style={{width: "30px", height: "30px"}}/><a href="https://www.facebook.com/ucstaungoo/">   UCSTaungoo Facebook Page</a><br/><br/><br/>
    //             <img src="https://cdn2.iconfinder.com/data/icons/social-icons-circular-color/512/gmail-512.png" style={{width: "30px", height: "30px"}}/><a href="http://ucstaungoo.edu.mm/" >  ucstaungoo.edu.mm</a><br/><br/><br/>
    //             <img src="https://www.wikipedia.org/portal/wikipedia.org/assets/img/Wikipedia-logo-v2.png" style={{width: "30px", height: "30px"}}/><a href="https://en.wikipedia.org/wiki/University_of_Computer_Studies_(Taungoo)">  UCSTaungoo Wikipedia</a><br/><br/><br/>
    //         </Col>
    //     </Row>


    //         <div className="sub-footer">Copyright@2019-2020 Incampus Internship Program of <br/>Computer Studies,Taungoo
    //         </div>


    // </Footer>
    // )

    return <>
        <div className="footer">
        {/* <div id="contatus"><br/> */}
        <Col span={6} style={{color: "white"}}><br/>
                 <h1 style={{color: "white",textAlign: "center"}}><b>CONTACT US</b></h1><br/>
                 <EnvironmentOutlined style={{ fontSize: '20px'}}/>   Kanyo Village, 3 miles from northen Taungoo, Myanmar<br/><br />
                 Area-It has 30 Areas Wide<br/><br />
                 <PhoneOutlined style={{ fontSize: '20px'}}/> Rector(09-5026008)<br/><br />
                 <ContactsOutlined style={{ fontSize: '20px'}}/><Link to="/contact" >   Contact Us</Link> <br /><br />
                 <MailOutlined style={{ fontSize: '20px'}}/>   rector@ucstaungoo.edu.mm
             </Col>
             {/* </div> */}
            <div id="link">

                <br /><br/>
                <Link to="/" >မူလစာမျက်နှာ</Link><br /><br />
                <Link to="/candidate" >ကိုယ်စားလှယ်လောင်း</Link><br /><br />
                <Link to="/office" >ပါတီရုံး</Link><br /><br />
                <Link to="/voter_list" >မဲဆန္ဒရှင်</Link><br /><br />
                <Link to="/about" >ရွေးကောက်ပွဲ အကြောင်း</Link><br /><br />
            </div>
            <div id="footerdiv" style={{ backgroundImage: `url(${Background})` }}>                
                
                <br />
                <h1 style={{ color: "white", textAlign: "center" }}><b>ABOUT THE WEBSITE</b></h1><br />
                <p style={{ color: "white", textAlign: "center" }}><b>The website is developed by<br /><br />In-Campus Internship<br /><br />students of Computer Studies,Taungoo<br /><br />using Adobe</b></p>
            </div>
            <div>               
                
                <br /><br /><br />
                <img src="https://pngimg.com/uploads/facebook_logos/facebook_logos_PNG19754.png" style={{width: "50px", height: "50px"}}/><a href="https://www.facebook.com/uecmyanmar/">   UEC Facebook Page</a><br/><br/><br/>
                <img src="https://cdn2.iconfinder.com/data/icons/social-icons-circular-color/512/gmail-512.png" style={{width: "40px", height: "40px"}}/><a href="info@uecmyanmar.org">  UEC Email</a><br/><br/><br/>
                <img src="https://www.wikipedia.org/portal/wikipedia.org/assets/img/Wikipedia-logo-v2.png" style={{width: "30px", height: "30px"}}/><a href="https://en.wikipedia.org/wiki/UEC">  UEC Wikipedia</a><br/><br/><br/>
            </div>
        </div>
        <div className="sub-footer">
            Copyright @ 2019-2020 Incampus Internship Program <br /> University of Computer Studies (Taungoo)
    </div>
     </>
}

export default FooterMenu