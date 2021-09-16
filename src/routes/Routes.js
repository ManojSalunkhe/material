// import React from 'react'
// import { Route } from 'react-router-dom'
import Home from '../pages/Home/Home'
import Customerslist from '../pages/Customers/CustomersList'
import Login from '../pages/LogIn'
import User from '../pages/Customers/User'



const routes = [
    {
        path: "/",
        component: Home,
        name: "Home",
        exact: true,
    },
    {
        path: "/login",
        component: Login,
        name: "Login",
        exact: true,
    },
    {
        path: "/customer-list",
        component: Customerslist,
        name: "Customerslist",
        exact: true,
        childComponents: [
            {
                path: "/customer-list/:id",
                component: User,
                name: "User",
                exact: true,
            },
        ],
    }
];

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
