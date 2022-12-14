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
                      <MarkdownComponent contentUrl="/md-content/demos/multi-party-computation.md"></MarkdownComponent>
                  </div>
  
  
                  <div className='Demos-links'>
                      <Typography variant="h6">External links</Typography>
                      <p>
                          <a href="google.com">google.com</a>
                      </p>
                  </div>
              </div>
  
  
              <div className='Demo-demonstration'>
                  
              </div>
              
          </>)
    }
  }
  
  export default DifferentialPrivacyApp;