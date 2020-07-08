import React, { useContext } from 'react';
import { Redirect } from 'react-router-dom'
import AuthContext from '../component/AuthContext';

const PrivateRoute = ({component, type}) => {
  const authToken = useContext(AuthContext)
  console.log('hey', authToken)
  if(type ==="public"){
    return  component
  }
  return authToken? component :<Redirect to="/login" /> 
}
export default PrivateRoute;
