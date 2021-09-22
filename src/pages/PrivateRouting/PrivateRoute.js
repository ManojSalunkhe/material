import { Redirect, Route } from 'react-router-dom'

function PrivateRoute({ component: Component, ...rest }) {
    return (
        <Route
            {...rest}
            render={(props) => {
                return localStorage.getItem("auth") ? (
                    <Component {...props} />
                ) : (
                    <Redirect
                        to={{
                            pathname: "/login"
                        }}
                    />
                )
            }}
        />
    )
}

export default PrivateRoute
