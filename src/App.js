//import logo from './logo.svg';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Home from './pages/Home'
import Registro from './pages/Registro'
import Calculadora from './pages/Calculadora'

function App() {
  return (
    <div className='App'>
    <Router>
      <Switch>
        <Route exact path="/" component={Home}/>
        <Route path="/registrar" component={Registro}/>
        <Route path="/calculadora" component={Calculadora}/>
      </Switch>
    </Router>
    </div>
  );
}

export default App;
