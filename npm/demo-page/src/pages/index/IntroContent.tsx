import { Typography } from 'cx-portal-shared-components';
import React from 'react';
import MarkdownComponent from '../../generic/markdown/MarkdownComponent';

class IntroContent extends React.Component{
  
    constructor(props: any) {
  
      super(props);

    }
  
    render() {
  
      return (
  
        <MarkdownComponent contentUrl="/md-content/introduction-content.md"></MarkdownComponent>
      )
    }
  }
  
  export default IntroContent;