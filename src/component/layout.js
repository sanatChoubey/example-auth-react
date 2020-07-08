import React from 'react';

const Layout = ({children}) => {
  return (
    <div style={{background:'red', width:'100%',height:'100vh'}}>
      {children}
    </div>
  )
}
export default Layout;
