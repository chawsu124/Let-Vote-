import React from 'react'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";

import StateDivision from '../pages/state_division'
import StateDivisionCreate from '../pages/state_division/create'
import StateDivisionUpdate from '../pages/state_division/update'
import StateDivisionDetail from '../pages/state_division/view'

import District from '../pages/district'
import DistrictCreate from '../pages/district/create'
import DistrictUpdate from '../pages/district/update'
import DistrictDetail from '../pages/district/view'



import Township from '../pages/township'
import TownshipCreate from '../pages/township/create'
import TownshipUpdate from '../pages/township/update'
import TownshipDetail from '../pages/township/view'


import Town from '../pages/town'
import TownCreate from '../pages/town/create'
import TownUpdate from '../pages/town/update'
import TownDetail from '../pages/town/view'


import Ward from '../pages/wards'
import WardCreate from '../pages/wards/create'
import WardUpdate from '../pages/wards/update'
import WardDetail from '../pages/wards/view'

import Village_tract from '../pages/village_tract'
import Village_tractCreate from '../pages/village_tract/create'
import Village_tractUpdate from '../pages/village_tract/update'
import Village_tractDetail from '../pages/village_tract/view'

import Village from '../pages/village'
import VillageCreate from '../pages/village/create'
import VillageUpdate from '../pages/village/update'
import VillageDetail from '../pages/village/view'

import Election from '../pages/election'
import ElectionCreate from '../pages/election/create'
import ElectionUpdate from '../pages/election/update'
import ElectionDetail from '../pages/election/view'

import Parliament from '../pages/parliament'
import ParliamentCreate from '../pages/parliament/create'
import ParliamentUpdate from '../pages/parliament/update'
import ParliamentDetail from '../pages/parliament/view'

import Office from '../pages/office'
import OfficeCreate from '../pages/office/create'
import OfficeUpdate from '../pages/office/update'
import OfficeDetail from '../pages/office/view'

import Party from '../pages/party'
import PartyCreate from '../pages/party/create'
import PartyUpdate from '../pages/party/update'
import PartyDetail from '../pages/party/view'

import Constituency from '../pages/constituency'
import ConstituencyCreate from '../pages/constituency/create'
import ConstituencyUpdate from '../pages/constituency/update'
import ConstituencyDetail from '../pages/constituency/view'

import Candidate from '../pages/candidates'
import CandidateCreate from '../pages/candidates/create'
import CandidateUpdate from '../pages/candidates/update'
import CandidateDetail from '../pages/candidates/view'

import Voter_list from '../pages/voter_list'
import Voter_listCreate from '../pages/voter_list/create'
import Voter_listUpdate from '../pages/voter_list/update'
import Voter_listDetail from '../pages/voter_list/view'

import Home from '../pages/home'

import News from '../pages/news'
import NewsCreate from '../pages/news/create'
import NewsUpdate from '../pages/news/update'
import NewsDetail from '../pages/news/view'

import Contact_us from '../pages/contact_us'
import Contact_usCreate from '../pages/contact_us/create'
import Contact_usUpdate from '../pages/contact_us/update'
import Contact_usDetail from '../pages/contact_us/view'

//import Layout from '../component/layout'

export default () => {
    return (
        <>
            <Switch>
                <Route path="/" exact={true}><Home /></Route>
                <Route path="/state_division" exact={true}><StateDivision /></Route>
                <Route path="/state_division/create" exact={true}><StateDivisionCreate /></Route>
                <Route path="/state_division/:id" exact={true}><StateDivisionDetail /></Route>
                <Route path="/state_division/edit/:id" exact={true}><StateDivisionUpdate /></Route>
            </Switch>
            <Switch>
                <Route path="/district" exact={true}><District /></Route>
                <Route path="/district/create" exact={true}><DistrictCreate /></Route>
                <Route path="/district/:id" exact={true}><DistrictDetail /></Route>
                <Route path="/district/edit/:id" exact={true}><DistrictUpdate /></Route>
            </Switch>

            <Switch>
                <Route path="/township" exact={true}><Township /></Route>
                <Route path="/township/create" exact={true}><TownshipCreate /></Route>
                <Route path="/township/:id" exact={true}><TownshipDetail /></Route>
                <Route path="/township/edit/:id" exact={true}><TownshipUpdate /></Route>
            </Switch>
            <Switch>
                <Route path="/town" exact={true}><Town /></Route>
                <Route path="/town/create" exact={true}><TownCreate /></Route>
                <Route path="/town/:id" exact={true}><TownDetail /></Route>
                <Route path="/town/edit/:id" exact={true}><TownUpdate /></Route>
            </Switch>
            <Switch>
                <Route path="/wards" exact={true}><Ward /></Route>
                <Route path="/wards/create" exact={true}><WardCreate /></Route>
                <Route path="/wards/:id" exact={true}><WardDetail /></Route>
                <Route path="/wards/edit/:id" exact={true}><WardUpdate /></Route>
            </Switch>

            <Switch>
                <Route path="/village_tract" exact={true}><Village_tract /></Route>
                <Route path="/village_tract/create" exact={true}><Village_tractCreate /></Route>
                <Route path="/village_tract/:id" exact={true}><Village_tractDetail /></Route>
                <Route path="/village_tract/edit/:id" exact={true}><Village_tractUpdate /></Route>
            </Switch>
            <Switch>
                <Route path="/village" exact={true}><Village /></Route>
                <Route path="/village/create" exact={true}><VillageCreate /></Route>
                <Route path="/village/:id" exact={true}><VillageDetail /></Route>
                <Route path="/village/edit/:id" exact={true}><VillageUpdate /></Route>
            </Switch>
            <Switch>
                <Route path="/election" exact={true}><Election /></Route>
                <Route path="/election/create" exact={true}><ElectionCreate /></Route>
                <Route path="/election/:id" exact={true}><ElectionDetail /></Route>
                <Route path="/election/edit/:id" exact={true}><ElectionUpdate /></Route>
            </Switch>
            <Switch>
                <Route path="/parliament" exact={true}><Parliament /></Route>
                <Route path="/parliament/create" exact={true}><ParliamentCreate /></Route>
                <Route path="/parliament/:id" exact={true}><ParliamentDetail /></Route>
                <Route path="/parliament/edit/:id" exact={true}><ParliamentUpdate /></Route>
            </Switch>
            <Switch>
                <Route path="/office" exact={true}><Office /></Route>
                <Route path="/office/create" exact={true}><OfficeCreate /></Route>
                <Route path="/office/:id" exact={true}><OfficeDetail /></Route>
                <Route path="/office/edit/:id" exact={true}><OfficeUpdate /></Route>
            </Switch>
            <Switch>
                <Route path="/party" exact={true}><Party/></Route>
                <Route path="/party/create" exact={true}><PartyCreate /></Route>
                <Route path="/party/:id" exact={true}><PartyDetail /></Route>
                <Route path="/party/edit/:id" exact={true}><PartyUpdate /></Route>
            </Switch>
            <Switch>
                <Route path="/constituency" exact={true}><Constituency/></Route>
                <Route path="/constituency/create" exact={true}><ConstituencyCreate /></Route>
                <Route path="/constituency/:id" exact={true}><ConstituencyDetail /></Route>
                <Route path="/constituency/edit/:id" exact={true}><ConstituencyUpdate /></Route>
            </Switch>
            <Switch>
                <Route path="/candidates" exact={true}><Candidate/></Route>
                <Route path="/candidates/create" exact={true}><CandidateCreate /></Route>
                <Route path="/candidates/:id" exact={true}><CandidateDetail /></Route>
                <Route path="/candidates/edit/:id" exact={true}><CandidateUpdate /></Route>
            </Switch>
            <Switch>
                <Route path="/voter_list" exact={true}><Voter_list/></Route>
                <Route path="/voter_list/create" exact={true}><Voter_listCreate /></Route>
                <Route path="/voter_list/:id" exact={true}><Voter_listDetail /></Route>
                <Route path="/voter_list/edit/:id" exact={true}><Voter_listUpdate /></Route>
            </Switch>
            <Switch>
                <Route path="/news" exact={true}><News/></Route>
                <Route path="/news/create" exact={true}><NewsCreate /></Route>
                <Route path="/news/:id" exact={true}><NewsDetail /></Route>
                <Route path="/news/edit/:id" exact={true}><NewsUpdate /></Route>
            </Switch>
            <Switch>
                <Route path="/contact_us" exact={true}><Contact_us/></Route>
                <Route path="/contact_us/create" exact={true}><Contact_usCreate /></Route>
                <Route path="/contact_us/:id" exact={true}><Contact_usDetail /></Route>
                <Route path="/contact_us/edit/:id" exact={true}><Contact_usUpdate /></Route>
            </Switch>
            <Switch>
                <Route path="/home" exact={true}><Home /></Route>
            
                {/* <Route path="/component/layout" exact={true}><Layout /></Route> */}
            </Switch>
        </>
    )
}