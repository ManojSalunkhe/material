import React from 'react'
import { Route } from 'react-router-dom'
import Customerslist from '../pages/CustomersList'
import Login from '../pages/LogIn'

const routes = [
    {
        path: "/",
        component: Customerslist,
        name: "customerslist",
        exact: true
    }
]



function Routes(props) {

    return (
        <div>
            {
                routes.map((ele) => {
                    return (
                        <div key={ele.name} >
                            <Route path={ele.path} component={ele.name} exact={ele.exact} />
                        </div>
                    )
                })
            }
            {/* <Route path="/" component={Login} exact={true} />
            <Route path="/customerslist" component={Customerslist} exact={true} /> */}

        </div>
    )
}

export default Routes
