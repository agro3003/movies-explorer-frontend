import { Route, Redirect } from "react-router-dom";

function ProtectedRoute({ component: Component, ...props }) {
  const logged = props.loggedIn
  return (
    <Route>
      {() => (logged) ? <Component {...props} /> : <Redirect to="/sign-in" />}
    </Route>
  );
}

export default ProtectedRoute;