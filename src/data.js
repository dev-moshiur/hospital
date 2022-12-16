
// importing images

import doctor1 from './doctors/doctor1.png';
import doctor2 from './doctors/doctor2.png';
import doctor3 from './doctors/doctor3.png';
import doctor4 from './doctors/doctor4.png';
import doctor5 from './doctors/doctor5.png';
import doctor6 from './doctors/doctor6.png';
import doctor7 from './doctors/doctor7.png';
import doctor8 from './doctors/doctor8.jpg';
import doctor9 from './doctors/doctor9.png';
import doctor10 from './doctors/doctor10.png';
import room from './hospitalNews/room.jpg'
import operation from './hospitalNews/operation .jpg'
import surgery from './hospitalNews/surgery.jpg'

import doctor from './doctors-icon/doctor.png'
import services from './doctors-icon/service.png'
import syringe from './doctors-icon/syringe.png'
import blood from './doctors-icon/blood.png'
import pathology from './doctors-icon/pathology.png'
import kidney from './doctors-icon/kidney.png'
import smoke from './doctors-icon/smoke.png'
import checkup from './doctors-icon/checkup.png'
import aurthopedic from './doctors-icon/aurthopedic.png'
import consulting from './doctors-icon/consulting.png'
import plus from './doctors-icon/plus.png'
import account from './doctors-icon/account.png'
import { Favorite, Person, SmokingRooms, OpacitySharp, AccountBox } from '@material-ui/icons';



// making data
const doctors=[
    {
        name:'Md Shamim Islam',
        specialist:'Sextual',
        experience:'3',
        phone:'01887654321',
        id:1,
        img:doctor1
    },
    {
        name:'Md Ahasan Habib',
        specialist:'Urology',
        experience:'1',
        phone:'01383295794',
        id:2,
        img:doctor2
    },{
        name:'Md Al Amin Islam',
        specialist:'Hart',
        experience:'2',
        phone:'01383295794',
        id:3,
        img:doctor3
    },{
        name:'Md Ashik Islam',
        specialist:'Neurology',
        experience:'4',
        phone:'01383295794',
        id:4,
        img:doctor4
    },{
        name:'Md Abdullah Islam',
        specialist:'Face',
        experience:'7',
        phone:'01383295794',
        id:5,
        img:doctor5
    },{
        name:'Md Maruf Hasan',
        specialist:'Childen',
        experience:'4',
        phone:'01383295794',
        id:6,
        img:doctor6
    },{
        name:'Md Rokibul Islam',
        specialist:'Ginoloogy',
        experience:'6',
        phone:'01383295794',
        id:7,
        img:doctor7
    },{
        name:'Sri Bipul Chandro Roy',
        specialist:'Cancer',
        experience:'12',
        phone:'01383295794',
        id:8,
        img:doctor8
    },{
        name:'Md Motiur Rahman',
        specialist:'AIDS/HIV',
        experience:'9',
        phone:'01383295794',
        id:9,
        img:doctor9
    },{
        name:'Md Faruk Khan',
        specialist:'Diabetis',
        experience:'13',
        phone:'01383295794',
        id:10,
        img:doctor10
    },
];


const news=[
    {
        id:1,
        image:room,

        name:'Rokibul',
        comment:23,
        like:43,
        about:'medical',
        caption:'We have set up a operatiom room including modern techonlogy',
        text:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro accusantium aut illo cumque eveniet minima rerum odit voluptate nesciunt consequatur veniam non maxime nemo, numquam illum incidunt iure a tempora? Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sint doloribus,',



    },
    {
        id:1,
        image:operation,

        name:'Md Siam ahmed',
        comment:83,
        like:93,
        about:'',
        caption:'Another Risky Operation Success',
        text:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro accusantium aut illo cumque eveniet minima rerum odit voluptate nesciunt consequatur veniam non maxime nemo, numquam illum incidunt iure a tempora? Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sint doloribus,',



    },
    {
        id:1,
        image:surgery,

        name:'MD Ahasan Habib',
        comment:3,
        like:37,
        about:'',
        caption:'Our Medical Team Has Been completed a Surgery',
        text:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro accusantium aut illo cumque eveniet minima rerum odit voluptate nesciunt consequatur veniam non maxime nemo, numquam illum incidunt iure a tempora? Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sint doloribus,',



    }
]




const service=[
    {
        serviceName:'Qualified Doctors',
        serviceIcon:()=><Person/>,
        describtion:`Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tempore, vero repellendus facilis voluptatibus velit, voluptas, ipsa provident accusantium consequuntur ullam consequatur beatae ex a quisquam natus ab! Earum, at fugiat!
        `
        
    },
    {
        serviceName:'24/7 Service',
        serviceIcon:()=><Favorite/>,
        describtion:`Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tempore, vero repellendus facilis voluptatibus velit, voluptas, ipsa provident accusantium consequuntur ullam consequatur beatae ex a quisquam natus ab! Earum, at fugiat!
        `
    },{
        serviceName:'Cancer Clinic',
        serviceIcon:()=><SmokingRooms/>,
        describtion:`Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tempore, vero repellendus facilis voluptatibus velit, voluptas, ipsa provident accusantium consequuntur ullam consequatur beatae ex a quisquam natus ab! Earum, at fugiat!
        `
    },{
        serviceName:'Blood Test',
        serviceIcon:()=><OpacitySharp/>,
        describtion:`Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tempore, vero repellendus facilis voluptatibus velit, voluptas, ipsa provident accusantium consequuntur ullam consequatur beatae ex a quisquam natus ab! Earum, at fugiat!
        `
    },{
        serviceName:'Rehabitation',
        serviceIcon:()=><AccountBox/>,
        describtion:`Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tempore, vero repellendus facilis voluptatibus velit, voluptas, ipsa provident accusantium consequuntur ullam consequatur beatae ex a quisquam natus ab! Earum, at fugiat!
        `
    },{
        serviceName:'Pathology',
        serviceIcon:()=><AccountBox/>,
        describtion:`Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tempore, vero repellendus facilis voluptatibus velit, voluptas, ipsa provident accusantium consequuntur ullam consequatur beatae ex a quisquam natus ab! Earum, at fugiat!
        `
    },{
        serviceName:'Kidney Disesse',
        serviceIcon:()=><AccountBox/>,
        describtion:`Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tempore, vero repellendus facilis voluptatibus velit, voluptas, ipsa provident accusantium consequuntur ullam consequatur beatae ex a quisquam natus ab! Earum, at fugiat!
        `
    },{
        serviceName:'Smoke Prohabited',
        serviceIcon:()=><AccountBox/>,
        describtion:`Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tempore, vero repellendus facilis voluptatibus velit, voluptas, ipsa provident accusantium consequuntur ullam consequatur beatae ex a quisquam natus ab! Earum, at fugiat!
        `
    },{
        serviceName:'Primary Checkup',
        serviceIcon:()=><AccountBox/>,
        describtion:`Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tempore, vero repellendus facilis voluptatibus velit, voluptas, ipsa provident accusantium consequuntur ullam consequatur beatae ex a quisquam natus ab! Earum, at fugiat!
        `
    },{
        serviceName:'Orthopedic',
        serviceIcon:()=><AccountBox/>,
        describtion:`Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tempore, vero repellendus facilis voluptatibus velit, voluptas, ipsa provident accusantium consequuntur ullam consequatur beatae ex a quisquam natus ab! Earum, at fugiat!
        `
    },{
        serviceName:'Medical Consulting',
        serviceIcon:()=><AccountBox/>,
        describtion:`Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tempore, vero repellendus facilis voluptatibus velit, voluptas, ipsa provident accusantium consequuntur ullam consequatur beatae ex a quisquam natus ab! Earum, at fugiat!
        `
    },{
        serviceName:'Medicine Facilities',
        serviceIcon:()=><AccountBox/>,
        describtion:`Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tempore, vero repellendus facilis voluptatibus velit, voluptas, ipsa provident accusantium consequuntur ullam consequatur beatae ex a quisquam natus ab! Earum, at fugiat!
        `
    },
]


export {doctors,service,news};