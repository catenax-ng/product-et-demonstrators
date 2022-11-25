import { Typography } from 'cx-portal-shared-components';
import React from 'react';
import { BrowserRouter, Routes, Route, Navigate  } from "react-router-dom";
import IndexLayout from '../layouts/IndexLayout';



class DifferentialPrivacyApp extends React.Component{

    style_cont: {}
    style_desc: {};
    style_links: {};
    style_demo: {}
  
    constructor(props: any) {
  
      super(props);

      this.style_cont = { overflow: 'auto' }
      this.style_desc = {   width: '77%',
                            float: 'left',
                            padding: '20px 30px'
                        }
      this.style_links = {  float: 'right',
                            border: '1px',
                            borderColor: '#DCDCDC',
                            borderRadius: '20px',
                            borderStyle: 'solid',
                            width: '22%',
                            height: '100%',
                            padding: '28px',
                          }

      this.style_demo = {   border: '1px',
                            borderColor: '#DCDCDC',
                            borderRadius: '20px',
                            borderStyle: 'solid',
                            background: 'repeating-linear-gradient(45deg, #F3F3F3, #F3F3F3 3px, #CDCDCD 3px, #CDCDCD 4px)'
                        }
    }
  
    render() {
  
      return (

        <>
            <div style={this.style_cont}>
            <Typography variant="h2">Federated Learning</Typography>
                <div style={this.style_desc}>
                    Exacutive Summary
                    <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                    </p>
                </div>
                <div style={this.style_links}>
                    <Typography variant="h6">External links</Typography>
                    <p>
                        <a href="google.com">google.com</a>
                    </p>
                </div>
            </div>
            <div style={this.style_demo}>
                DEMO
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                </p>
                <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                </p>
            </div>
        </>
      )
    }
  }
  
  export default DifferentialPrivacyApp;