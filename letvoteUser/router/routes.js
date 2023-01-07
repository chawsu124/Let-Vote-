import React from 'react'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";

import Home from '../pages/home/home'
import Candidate from '../pages/candidates/index'
import CandidateDetail from '../pages/candidates/view'
import Party from '../pages/party/party'
import Office from '../pages/office/index'
import VoterList from '../pages/voter_list/index'
import About from '../pages/election/index'
import NewDetail from '../pages/news/view'
import New from '../pages/news/news'
import Contact from '../pages/contact/create'

const Routes = () => {
    return <Switch>
        <Route path="/" exact={true}>
            <Home />
        </Route>
        <Route path="/news" exact={true}>
            <New />
        </Route>
        <Route path="/candidate" exact={true}>
            <Candidate />
        </Route>
        <Route path="/view/:id" exact={true}>
            <CandidateDetail />
        </Route>
        <Route path="/party" exact={true}>
            <Party />
        </Route>
        <Route path="/office" exact={true}>
            <Office />
        </Route>
        <Route path="/voter_list" exact={true}>
            <VoterList />
        </Route>
        <Route path="/about" exact={true}>
            <About />
        </Route> 
        <Route path="/contact" exact={true}>
            <Contact />
        </Route> 
        <Route path="/home" exact={true}>
            <Home />
        </Route>
        <Route path="/news/:id" exact={true}>
            <NewDetail />
        </Route>
    </Switch>
}

export default Routes;