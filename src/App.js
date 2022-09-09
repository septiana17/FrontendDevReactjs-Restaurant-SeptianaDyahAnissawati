import './App.css'
import React from 'react'
import Navigation from './components/main/navigation/Navigation'
import Header from './components/main/header/Header'
import Section from './components/main/section/Section'
import DetailView from './components/detail/DetailView'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

function App() {
  return (
    <div>
          <Header />
          <Navigation />
          <Section />
          {/* <DetailView /> */}
    </div>
  );
}

export default App;
