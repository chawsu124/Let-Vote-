// state_division
// wards
// office
// candidates


// district
// village_tract
// village
// party
// election
// parliament


// township
// town
// constituency
// voter_list

// var wards = [
//   {
//     id: 1,
//     code: 'MMR007001701519',
//     town_id: 1,
//     name: '2 Road',
//     created_by: 'admin',
//     updated_by: 'admin',
//     status: 'ACTIVE'
//   },
//   {
//     id: 2,
//     code: 'MMR007001701520',
//     town_id: 1,
//     name: '4 Road',
//     created_by: 'admin',
//     updated_by: 'admin',
//     status: 'ACTIVE'
//   },
//   {
//     id: 3,
//     code: 'MMR007001701513',
//     town_id: 2,
//     name: '5 Road',
//     created_by: 'admin',
//     updated_by: 'admin',
//     status: 'ACTIVE'
//   }
// ];
// var village_tract = [
//   {
//     id: 1,
//     code: 'MMR017024072',
//     town_id: 2,
//     name: 'Kan Su (East)',
//     created_by: 'admin',
//     updated_by: 'admin',
//     status: 'ACTIVE'
//   },
//   {
//     id: 2,
//     code: 'MMR017024078',
//     town_id: 3,
//     name: 'Kwin Gyi',
//     created_by: 'admin',
//     updated_by: 'admin',
//     status: 'ACTIVE'
//   },
//   {
//     id: 3,
//     code: 'MMR017024077',
//     town_id: 2,
//     name: 'Kyon Sa Lu',
//     created_by: 'admin',
//     updated_by: 'admin',
//     status: 'ACTIVE'
//   }
// ];
// var village = [
//   {
//     id: 1,
//     village_tract_id: 2,
//     code: 'MMR007001029',
//     name: 'မြို့ကလေး',
//     latitude: '17.2984199523926',
//     longitude: '96.4904327392578',
//     created_by: 'admin',
//     updated_by: 'admin',
//     status: 'ACTIVE'
//   },
//   {
//     id: 2,
//     village_tract_id: 3,
//     code: 'MMR007001029',
//     name: 'ရဲဒင်းစုကျွဲဖြူအင်း',
//     latitude: '17.2984199523926',
//     longitude: '96.4904327392578',
//     created_by: 'admin',
//     updated_by: 'admin',
//     status: 'ACTIVE'
//   },
//   {
//     id: 3,
//     village_tract_id: 3,
//     code: 'MMR007001029',
//     name: 'ကျွဲဖြူအင်း',
//     latitude: '17.2984199523926',
//     longitude: '96.4904327392578',
//     created_by: 'admin',
//     updated_by: 'admin',
//     status: 'ACTIVE'
//   }
// ];
// var election = [
//   {
//     id: 1,
//     name: 'Parlimen',
//     created_by: 'admin',
//     updated_by: 'admin',
//     status: 'ACTIVE'
//   },
//   {
//     id: 2,
//     name: 'KyarPhut',
//     created_by: 'admin',
//     updated_by: 'admin',
//     status: 'ACTIVE'
//   },
//   {
//     id: 3,
//     name: 'CCC',
//     created_by: 'admin',
//     updated_by: 'admin',
//     status: 'ACTIVE'
//   }
// ];
// var parliament = [
//   {
//     id: 1,
//     name: 'aaa',
//     created_by: 'admin',
//     updated_by: 'admin',
//     status: 'ACTIVE'
//   },
//   {
//     id: 2,
//     name: 'bbb',
//     created_by: 'admin',
//     updated_by: 'admin',
//     status: 'ACTIVE'
//   },
//   {
//     id: 3,
//     name: 'ccc',
//     created_by: 'admin',
//     updated_by: 'admin',
//     status: 'ACTIVE'
//   }
// ];

// var office = [
//   {
//     id: 1,
//     name: 'Bago',
//     address: 'Myoe Thit',
//     village_id: 1,
//     ward_id: 1,
//     ph_no: '095236482',
//     ph1: '09788652346',
//     ph2: '09485216354',
//     email: 'office@gmail.com',
//     building_type: 'R12' ,
//     rental: 'U',
//     created_by: 'admin',
//     updated_by: 'admin',
//     status: 'ACTIVE'
//   },
//   {
//     id: 2,
//     name: 'Yangon',
//     address: 'Yangon',
//     village_id: 2,
//     ward_id: 2,
//     ph_no: '095236482',
//     ph1: '0978865276',
//     ph2: '0948521625',
//     email: 'office@gmail.com',
//     building_type: 'R16' ,
//     rental: 'UB',
//     created_by: 'admin',
//     updated_by: 'admin',
//     status: 'ACTIVE'
//   },
//   {
//     id: 3,
//     name: 'Phyu',
//     address: 'Phyu',
//     village_id: 3,
//     ward_id: 3,
//     ph_no: '095236482',
//     ph1: '09788652346',
//     ph2: '09485216354',
//     email: 'office@gmail.com',
//     building_type: 'R11' ,
//     rental: 'UC',
//     created_by: 'admin',
//     updated_by: 'admin',
//     status: 'ACTIVE'
//   }
// ];
// var party = [
//   {
//     id: 1,
//     name: 'NLD',
//     office_id: 1,
//     created_by: 'admin',
//     updated_by: 'admin',
//     status: 'ACTIVE'
//   },
//   {
//     id: 2,
//     name: 'UDP',
//     office_id: 2,
//     created_by: 'admin',
//     updated_by: 'admin',
//     status: 'ACTIVE'
//   },
//   {
//     id: 3,
//     name: 'KYT',
//     office_id: 3,
//     created_by: 'admin',
//     updated_by: 'admin',
//     status: 'ACTIVE'
//   }
// ];
// var constituency = [
//   {
//     id: 1,
//     town_id: 1,
//     election_id: 1,
//     code1: '001',
//     code2: '002',
//     created_by: 'admin',
//     updated_by: 'admin',
//     status: 'ACTIVE'
//   },
//   {
//     id: 2,
//     town_id: 2,
//     election_id: 2,
//     code1: '001',
//     code2: '002',
//     created_by: 'admin',
//     updated_by: 'admin',
//     status: 'ACTIVE'
//   },
//   {
//     id: 3,
//     town_id: 3,
//     election_id: 3,
//     code1: '001',
//     code2: '002',
//     created_by: 'admin',
//     updated_by: 'admin',
//     status: 'ACTIVE'
//   }
// ];
// var candidates = [
//   {
//     id:1,
//     name: 'U Myint',
//     party_id: 1,
//     constituency_id: 1,
//     parliament_id: 1,
//     image: 'aaa',
//     election_id: 1,
//     dob: '1985-6-21',
//     fathername: 'U Ba',
//     religion: 'aaa',
//     nrc_no: '75636',
//     education: 'UCST',
//     occupation: 12,
//     permanent_address: 'Phyu',
//     created_by: 'admin',
//     updated_by: 'admin',
//     status: 'ACTIVE'
//   },
//   {
//     id:2,
//     name: 'U Aye',
//     party_id: 1,
//     constituency_id: 1,
//     parliament_id: 1,
//     image: 'aaa',
//     election_id: 1,
//     dob: '1957-6-1',
//     fathername: 'U Ni',
//     religion: 'ccc',
//     nrc_no: '75636',
//     education: 'UCSY',
//     occupation: 53,
//     permanent_address: 'Taungoo',
//     created_by: 'admin',
//     updated_by: 'admin',
//     status: 'ACTIVE'
//   },
//   {
//     id:3,
//     name: 'U Hla',
//     party_id: 3,
//     constituency_id: 3,
//     parliament_id: 1,
//     image: 'aaa',
//     election_id: 2,
//     dob: '1968-6-21',
//     fathername: 'U Pu',
//     religion: 'aaa',
//     nrc_no: '75636',
//     education: 'UCST',
//     occupation: 33,
//     permanent_address: 'MyoeThit',
//     created_by: 'admin',
//     updated_by: 'admin',
//     status: 'ACTIVE'
//   }
// ];
// var voter_list = [
//   {
//     id: 1,
//     name: 'Mg Mg',
//     village_id: 2,
//     ward_id: 1,
//     election_id: 2,
//     parliament_id: 2,
//     nrc_no: '424',
//     dob: '1954-2-1',
//     religion: 'aaa',
//     permanent_address: 'Swa',
//     created_by: 'admin',
//     updated_by: 'admin',
//     status: 'ACTIVE'
//   },
//   {
//     id: 2,
//     name: 'Su Su',
//     village_id: 2,
//     ward_id: 3,
//     election_id: 1,
//     parliament_id: 1,
//     nrc_no: '454',
//     dob: '1997-2-1',
//     religion: 'aaa',
//     permanent_address: 'taungoo',
//     created_by: 'admin',
//     updated_by: 'admin',
//     status: 'ACTIVE'
//   },
//   {
//     id: 3,
//     name: 'Hla Hla',
//     village_id: 2,
//     ward_id: 1,
//     election_id: 2,
//     parliament_id: 2,
//     nrc_no: '411',
//     dob: '1952-2-1',
//     religion: 'aaa',
//     permanent_address: 'Phyu',
//     created_by: 'admin',
//     updated_by: 'admin',
//     status: 'ACTIVE'
//   }
// ]