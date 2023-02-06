import { Component } from 'react';
import { Typography } from 'cx-portal-shared-components';
import MarkdownComponent from '../../generic/markdown/MarkdownComponent';



class DifferentialPrivacyApp extends Component <{}, { [key: string]: string }> {

    constructor(props: any) {
        super(props);
      }
  
    
      render() {
    
        return (<>
  
              <div className='Demos-container'>
  
                  <div className='Demos-description'>
                      <MarkdownComponent contentUrl="/md-content/demos/federated-learning.md"></MarkdownComponent>
                  </div>
  
              </div>
  
  
              <div className='Demo-demonstration'>
                  
              </div>
              
          </>)
    }
  }
  
  export default DifferentialPrivacyApp;