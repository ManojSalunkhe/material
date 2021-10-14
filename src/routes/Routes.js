// import React from 'react'
// import { Route } from 'react-router-dom'
import Home from '../pages/Home/Home'
import Customerslist from '../pages/Customers/CustomersList'
import Login from '../pages/LogIn'
import User from '../pages/Customers/User'
import Register from '../pages/Register';
import About from '../pages/About';
import HomeIcon from '@mui/icons-material/Home';
import NoteAltIcon from '@mui/icons-material/NoteAlt';
import LogoutIcon from '@mui/icons-material/Logout';
import InfoIcon from '@mui/icons-material/Info';
import GroupIcon from '@material-ui/icons/Group';

const routes = [
    {
        path: "/",
        component: Home,
        name: "Home",
        exact: true,
        icon: <HomeIcon />,
        drawerRoute: true
    },
    {
        path: "/register",
        component: Register,
        name: "Register",
        exact: true,
        icon: <NoteAltIcon />,
        drawerRoute: false
    },
    {
        path: "/about",
        component: About,
        name: "About",
        exact: true,
        icon: <InfoIcon />,
        drawerRoute: true
    },
    {
        path: "/login",
        component: Login,
        name: "Login",
        exact: true,
        icon: <HomeIcon />,
        drawerRoute: false
    },
    // {
    //     path: "/login",
    //     name: "Logout",
    //     exact: true,
    //     icon: <LogoutIcon />,
    //     drawerRoute: true
    // }
    // {
    //     path: "/customer-list",
    //     component: Customerslist,
    //     name: "Customerslist",
    //     exact: true,
    //     childComponents: [
    //         {
    //             path: "/customer-list/:id",
    //             component: User,
    //             name: "User",
    //             exact: true,
    //         },
    //     ],
    // }
];

export const privatess = [{
    path: "/customer-list",
    component: Customerslist,
    name: "Customers-list",
    exact: true,
    icon: <GroupIcon />,
    childComponents: [
        {
            path: "/customer-list/:id",
            component: User,
            name: "User",
            exact: true,
        },
    ],
},
{
    path: "/login",
    name: "Logout",
    exact: true,
    icon: <LogoutIcon />,
    drawerRoute: true
}
]


export default routes;


// function Routes(props) {

//     return (
//         <div>
//             {/* {
//                 routes.map((ele) => {
//                     return (
//                         <div key={ele.name} >
//                             <Route path={ele.path} component={ele.name} exact={ele.exact} />
//                         </div>
//                     )
//                 })
//             } */}
//             <Route path="/" component={Login} exact={true} />
//             <Route path="/customerslist" component={Customerslist} exact={true} />
//         </div>
//     )
// }

// export default Routes
