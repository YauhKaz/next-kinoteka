import * as React from 'react';
import { useSelector } from 'react-redux';

const Auth = () => {
  const token = useSelector(state => state.token);
  console.log(token.token);
  return (
    <p>Auth Page</p>
  )
}

export default Auth;