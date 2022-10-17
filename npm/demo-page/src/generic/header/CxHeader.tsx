

import React from 'react';

import { Button, MainNavigation, IconButton } from "cx-portal-shared-components";
import { Box } from '@mui/material';

export const CxHeader = () => {
  return <MainNavigation  items={[
                            {
                                href: '/',
                                title: 'Home'
                            },
                            {
                                href: '/whitepaper',
                                title: 'White Paper'
                            }
                          ]}>
  <Box
    component="img"
    src="https://portal.dev.demo.catena-x.net/_storybook/static/media/cx-logo-text.f8e6f8d2eac697fa3bf571b08596729f.svg"
    sx={{
      display: 'inline-block',
      height: '40px',
      width: '170px'
    }}
  />
  <Box>
    <Button
      color="secondary"
      size="small"
      sx={{
        backgroundColor: 'white',
        marginRight: '16px'
      }}
      variant="contained"
    >
      Help
    </Button>

  </Box>
</MainNavigation>
};