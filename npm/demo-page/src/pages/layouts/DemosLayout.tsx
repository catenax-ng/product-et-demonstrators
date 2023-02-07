import { Outlet } from "react-router-dom";

import React from 'react';

class DemosLayout extends React.Component{

  
    constructor(props: any) {
  
      super(props);
    }
  
    render() {
  
      return (

          <Outlet />
      )
    }
  }
  
  export default DemosLayout;