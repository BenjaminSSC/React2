import React from 'react';
import { useState } from 'react';
import NavigationBar from './components/Navbar';
import Home from './components/Home';
import Footer from './components/Footer';
import Register from './components/Register';
import Login from './components/Login';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

function App() {
  const [showLogin, setShowLogin] = useState(false);

  return (
    <div className="App">
      <NavigationBar />
      {/*<Home />*/}
      {showLogin ? <Login /> : <Register setShowLogin={setShowLogin} />}
      <Footer />
    </div>
  );
}

export default App;