import React, {useState, useEffect} from 'react';
import Genes from './components/Genes';
import Diseases from './components/Diseases';
import Gene from './components/Gene';
import Disease from './components/Disease';
import Search from './components/Search';
import EnhancedTable from './components/Table';
import './App.css';
import { BrowserRouter as Router, Switch, Route, Link, useRouteMatch, useParams } from "react-router-dom";

export default function App() {
  return (
    <Router>
      <div>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/gene">Genes</Link>
          </li>
          <li>
            <Link to="/disease">Diseases</Link>
          </li>
          <li>
            <Link to="/search">Search</Link>
          </li>
          <li>
            <Link to="/table">Table</Link>
          </li>
        </ul>

        <Switch>
          <Route path="/about">
            <About />
          </Route>
          <Route path={`/gene/:geneName`}>
            <Gene />
          </Route>
          <Route path={`/disease/:diseaseName`}>
            <Disease />
          </Route>
          <Route path="/gene">
            <Genes />
          </Route>
          <Route path="/disease">
            <Diseases />
          </Route>
          <Route path="/search">
            <Search />
          </Route>
          <Route path="/table">
            <EnhancedTable />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

function Home() {
  return <h2>Home</h2>;
}

function About() {
  return <h2>About</h2>;
}
