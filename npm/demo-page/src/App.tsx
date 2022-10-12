//import './App.css';
//import { Button, Alert, Logo } from "cx-portal-shared-components";
//const App = () => <div><Button onClick={() => { alert('clicked') }}>Click me</Button> <Alert severity='error' children={<h1>This is an alert</h1>}></Alert></div>
//export default App;


import './App.css';
import { Button, Alert, MainNavigation, IconButton } from "cx-portal-shared-components";
import { Box } from '@mui/material';

function App() {
    return (
      <div>
        <MainNavigation
  items={[
    {
      href: '/home',
      title: 'Home'
    },
    {
      href: '/appmarktplace',
      title: 'App Marktplace'
    },
    {
      href: '/datamanagement',
      title: 'Data Management'
    },
    {
      href: '/partnernetwork',
      title: 'Partner Network'
    }
  ]}
>
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
    <IconButton
      color="primary"
      size="medium"
    >

    </IconButton>
  </Box>
</MainNavigation>
        <Button onClick={() => { alert('clicked') }}>Click me</Button>
        <Alert severity='error' children={<h1>This is an alert</h1>}></Alert>
      </div>
    )
}

export default App;
