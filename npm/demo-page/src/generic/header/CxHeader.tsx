

import React from 'react';

import { Button, MainNavigation, IconButton } from "cx-portal-shared-components";
import { Box } from '@mui/material';
import { Navigate } from "react-router-dom";

export const CxHeader = () => {

  const pages = [ { href: '/', title: 'Home' },
                  { href: 'https://www.google.com/', title: 'White paper' } ]

  const header_style = {color: 'black'}


  /*  -> Header with name
    <Box >
      <div style={{position: "absolute"}}>
        <img src="https://portal.dev.demo.catena-x.net/_storybook/static/media/cx-logo-text.f8e6f8d2eac697fa3bf571b08596729f.svg" style={{display: 'inline-block', height: '40px', width: '170px'}}/>
        <b style={{position: "relative", left: "22px", top: "-13px", color: "black"}}></b>
      </div>
    </Box>
  */


  return (<MainNavigation  items={pages}>

  <a href="/">
    <Box
      component="img"
      src="https://portal.dev.demo.catena-x.net/_storybook/static/media/cx-logo-text.f8e6f8d2eac697fa3bf571b08596729f.svg"
      sx={{display: 'inline-block', height: '40px', width: '170px'}}
    />
  </a>


  <Box>
    <Button
      color="secondary"
      size="small"
      sx={{backgroundColor: 'white', marginRight: '16px'}}
      variant="contained"
      onClick={function goTo(){window.location.href = '/about'}}
    >
      About
    </Button>

  </Box>
  
</MainNavigation>)
};