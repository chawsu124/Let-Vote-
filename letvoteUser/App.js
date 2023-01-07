import React, { useContext, useEffect, useState } from 'react';
import 'antd/dist/antd.css'
// import SideBar from './component/layout/sidebar'
import Content from './component/layout/content'
import { Layout } from 'antd';
import {
	BrowserRouter as Router,
	Route
} from "react-router-dom";
//import { GlobalContext } from './context/global'
//import Login from './pages/login'

function App() {

	//const state = useContext(GlobalContext)

	//const [user, setUser] = useState(false)

	// return (
	// 		<Router>
	// 			{
	// 				state.user ? <Layout style={{ minHeight: '100vh' }}>
	// 					<SideBar />
	// 					<Content />
	// 				</Layout> :
	// 					<Login />
	// 			}
	// 		</Router>
	// );

	
		return  <Router><Content /></Router>
	

// 	return (
// 		<Router>
// 			{
// 		<Layout style={{ minHeight: '100vh' }}>
// 					{/* <SideBar /> */}
// 					<Content />
// 				</Layout>
// 			}
// 		</Router>
// );
}

export default App;