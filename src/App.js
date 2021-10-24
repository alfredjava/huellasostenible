//import logo from './logo.svg';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import CalculadoraState from './context/Calculadora/CalculadoraState';

import Home from './pages/Home';
import Registro from './pages/Registro';
import Calculadora from './pages/Calculadora';
import Resultado from './pages/Resultado';

function App() {
  return (
    <div className='App'>
      <Router>
        <Switch>
          <CalculadoraState>
            <Route exact path='/' component={Home} />
            <Route path='/registrar' component={Registro} />
            <Route path='/calculadora' component={Calculadora} />
            <Route path='/resultado' component={Resultado} />
          </CalculadoraState>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
