
import React from 'react';
import MarkdownComponent from '../../generic/markdown/MarkdownComponent';

class Introduction extends React.Component{
  
    constructor(props: any) {
  
      super(props);

    }
  
    render() {
  
      return (

        <MarkdownComponent contentUrl="/md-content/introduction.md"></MarkdownComponent>

      )
    }
  }
  
  export default Introduction;