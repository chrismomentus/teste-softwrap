import { Row } from 'react-bootstrap';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Login from './components/login';
import Signup from './components/signup';
import RouteAuth from './components/RouteAuth'
import { AuthProvider } from "./Assets/AuthContext";
import Home from "./components/Home";
import EsqueceuSenha from "./components/EsqueceuSenha";
import AtualizaUsuario from "./components/AtualizaUsuario";


function App() {
  return (
    <Row className="justify-content-md-center">
      
      <div className="col-md-8 offset-md-1"></div>
      <Router>
        <AuthProvider>
          <Switch>
            <RouteAuth exact path="/" component={Home} />
            <RouteAuth path="/update-profile" component={AtualizaUsuario} />
            <Route path="/signup" component={Signup} />
            <Route path="/login" component={Login} />
            <Route path="/forgot-password" component={EsqueceuSenha} />
          </Switch>
        </AuthProvider>
        
      </Router>
      
    </Row>
    
  );
}

export default App;
