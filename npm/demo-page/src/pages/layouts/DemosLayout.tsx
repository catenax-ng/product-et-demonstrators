import { Outlet } from "react-router-dom";

import React from 'react';

class DemosLayout extends React.Component{


    style: {};
  
    constructor(props: any) {
  
      super(props);

      this.style = {padding: '30px 20px'}
    }
  
    render() {
  
      return (

        <div style={this.style}>
          <Outlet />
        </div>
      )
    }
  }
  
  export default DemosLayout;