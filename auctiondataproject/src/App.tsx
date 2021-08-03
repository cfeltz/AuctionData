import './App.css';
import { Container } from '@material-ui/core';

import NavigationBar from './components/NavigationBar/NavigationBar';
import Grid from './components/Grid/Grid';


const App = () => {

  return (
    <div>
      <Container>
        <NavigationBar/>
        <Grid/>
      </Container>
    </div>
  );
}

export default App;

