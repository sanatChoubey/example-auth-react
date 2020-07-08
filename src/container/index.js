import React from 'react';
import {Route} from 'react-router-dom';
import Layout from '../component/layout';
import Login from '../component/login';
import App from '../App';
import PrivateRoute from './protectedRoute';

const Routehandler =()=> {
  return <Layout>
    <Route  exact path="/login" >
    <PrivateRoute type="public" component={<Login/>} />
      
    </Route>
    <Route  exact path="/" >
      <PrivateRoute type="private" component={<App/>} />
    </Route>
  </Layout> 
}
export default Routehandler;
