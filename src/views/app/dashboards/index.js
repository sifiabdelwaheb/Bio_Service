import React, { Suspense } from "react";
import { Redirect, Route, Switch } from "react-router-dom";
import { connect } from "react-redux";

const Home = React.lazy(() =>
  import(/* webpackChunkName: "dashboard-default" */ "./home")
);

const Identify = React.lazy(() =>
  import(/* webpackChunkName: "dashboard-default" */ "./Identify")
);
const Dashboard = React.lazy(() =>
  import(/* webpackChunkName: "dashboard-default" */ "./dashbord")
);
const Database = React.lazy(() =>
  import(/* webpackChunkName: "dashboard-default" */ "./database")
);

const Contact = React.lazy(() =>
  import(/* webpackChunkName: "dashboard-default" */ "./Contact")
)
const About = React.lazy(() =>
  import(/* webpackChunkName: "dashboard-default" */ "./about")
)
const Dialysis = React.lazy(() =>
  import(/* webpackChunkName: "dashboard-default" */ "./department/dialysis")
)

  

const Dashboards = ({ match, role }) => (
  <Suspense fallback={<div className="loading" />}>
    <Switch>
      <Route
        path={`${match.url}/home`}
        render={(props) => <Home {...props} />}
      />
      <Route
        path={`${match.url}/identify`}
        render={(props) => <Identify {...props} />}
      />
      <Route
        path={`${match.url}/dashboard`}
        render={(props) => <Dashboard {...props} />}
      />
      <Route
        path={`${match.url}/database`}
        render={(props) => <Database {...props} />}
      />
       <Route
        path={`${match.url}/contact`}
        render={(props) => <Contact {...props} />}
      />
       <Route
        path={`${match.url}/about`}
        render={(props) => <About {...props} />}
      />
       <Route
        path={`${match.url}/department/dialysis`}
        render={(props) => <Dialysis {...props} />}
      /> 



      <Redirect to="/error" />
    </Switch>
  </Suspense>
);

const mapStateToProps = (state) => {
  return {
    role: state.auth.response,
  };
};
export default connect(mapStateToProps)(Dashboards);
