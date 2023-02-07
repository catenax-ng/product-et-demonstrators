
import { Typography } from 'cx-portal-shared-components';
import React from 'react';
import MarkdownComponent from '../../generic/markdown/MarkdownComponent';

class AboutApp extends React.Component{
  
    constructor(props: any) {
  
      super(props);

    }
  
    render() {
  
      return (
        
        <div className='container'>
          <MarkdownComponent contentUrl="/md-content/about.md"></MarkdownComponent>
        </div>
      )
    }
  }
  
  export default AboutApp;