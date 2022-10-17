//import './App.css';
//import { Button, Alert, Logo } from "cx-portal-shared-components";
//const App = () => <div><Button onClick={() => { alert('clicked') }}>Click me</Button> <Alert severity='error' children={<h1>This is an alert</h1>}></Alert></div>
//export default App;


import './App.css';
import { Button, Alert, MainNavigation, IconButton } from "cx-portal-shared-components";
import { Box } from '@mui/material';
import { CxHeader } from './generic/header/CxHeader';
import { IndexApp } from './pages/index/IndexApp';

function App() {

    const style = {padding: '10px'}

    return (
      <div>
        <CxHeader></CxHeader>
        
        <IndexApp></IndexApp>
      </div>
    )
}

export default App;
