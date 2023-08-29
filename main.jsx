// src/main.jsx

import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Login from 'AQUI A GENTE BOTA A PAGINA DE ROTA  DA PAG LOGIN EX: ./Main23/Login';

function AdminDashboard() {
  return <h2>Admin Dashboard</h2>;
}

function EmployeeDashboard() {
  return <h2>Employee Dashboard</h2>;
}

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/login" component={Login} />
        <Route path="/PAGINA DO ADM" component={AdminDashboard} />
        <Route path="/PAGDO FUNCIOANRIO" component={EmployeeDashboard} />
      </Switch>
    </Router>
  );
}

ReactDOM.render(<App />, document.getElementById('root'));
