
import { Typography } from 'cx-portal-shared-components';
import React from 'react';

class AboutApp extends React.Component{
  
    constructor(props: any) {
  
      super(props);

    }
  
    render() {
  
      return (
  
        <>
            <Typography variant="h4">Emerging Technologies demonstrator space</Typography>
            <p>
            Hello World! Website and project description
            <br />
            (Executive Summary)
            </p>
  
        </>
      )
    }
  }
  
  export default AboutApp;