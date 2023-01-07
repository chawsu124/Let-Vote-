import React from 'react'
import {
    Link,
} from "react-router-dom";
import Routes from '../../router/routes'

const Nav = () => {
    return <>
    <div className="menu">
        <div><Link to="/" style={{color:'white'}}>မူလစာမျက်နှာ</Link></div>
        <div><Link to="/candidate" style={{color:'white'}}>ကိုယ်စားလှယ်လောင်း</Link></div>
        <div><Link to="/office" style={{color:'white'}}>ပါတီရုံး</Link></div>
        <div><Link to="/voter_list" style={{color:'white'}}>မဲဆန္ဒရှင်</Link></div>
        <div><Link to="/about" style={{color:'white'}}>ရွေးကောက်ပွဲ အကြောင်း</Link></div>
    </div>
    
</>
}
export default Nav;