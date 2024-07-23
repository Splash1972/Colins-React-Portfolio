import React from 'react'
import { Outlet } from 'react-router-dom'
import NavBar from './components/NavBar'
// import Body from './components/Body'
import Footer from './components/Footer'


import 'bootstrap/dist/css/bootstrap.min.css';
import Slides from './components/Carousel';

function App() {
  return (
  <main>
    <NavBar />
    <Slides />
    <Outlet />
    <Footer />
  </main>
  );
}

export default App
