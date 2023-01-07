const Router = require('koa-router');

// import router files
const indexRoutes = require('./index');

const StateDivisonRoutes = require('./state_division_router')
const districtRoutes = require('./district_router.js')
const TownshipRoutes = require('./township_router')
const TownRoutes = require('./town_router')
const WardsRouters = require('./wards_router')
const VillageTractRouters = require('./village_tract_router')
const VillageRouters = require('./village_router')
const ElectionRouters = require('./election_router')
const ParliamentRouters = require('./parliament_router')
const OfficeRouters = require('./office_router')
const PartyRouters = require('./party_router')
const ConstituencyRoutes = require('./constituency_router')
const CandidatesRoutes = require('./candidates_router')
const VoterListRoutes = require('./voter_list_router')
const UserRoutes = require('./user_router')
const NewsRoutes = require('./news_router')
const ContactRoutes = require('./contact_us_router')

const router = new Router({ prefix: '/api/v1'});




// use router files
router.use(indexRoutes.routes(), router.allowedMethods());

router.use(StateDivisonRoutes.routes(), router.allowedMethods());
router.use(districtRoutes.routes(), router.allowedMethods());
router.use(TownshipRoutes.routes(), router.allowedMethods());
router.use(TownRoutes.routes(), router.allowedMethods());
router.use(WardsRouters.routes(), router.allowedMethods());
router.use(VillageTractRouters.routes(), router.allowedMethods());
router.use(VillageRouters.routes(), router.allowedMethods());
router.use(ElectionRouters.routes(), router.allowedMethods());
router.use(ParliamentRouters.routes(),router.allowedMethods());
router.use(OfficeRouters.routes(), router.allowedMethods());
router.use(PartyRouters.routes(), router.allowedMethods());
router.use(ConstituencyRoutes.routes(), router.allowedMethods());
router.use(CandidatesRoutes.routes(), router.allowedMethods());
router.use(VoterListRoutes.routes(), router.allowedMethods());
router.use(UserRoutes.routes(), router.allowedMethods());
router.use(NewsRoutes.routes(), router.allowedMethods());
router.use(ContactRoutes.routes(), router.allowedMethods());

module.exports = router; 