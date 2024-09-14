import React from 'react';
import Navbar from './components/Navbar';
import Main from './components/Page';
import Menu from './components/Menu';
import Order from './components/Order';
import Bill from './components/Bill';
import Footer from './components/Footer';
import LoginPage from './components/Loginpage';
import Tableselect from './components/Tableselect'
import Border from './components/Border';


const App = () => {
  return (
    <div>
      <Navbar />
      <Main />
      <Border/>
      <LoginPage id="loginPage"/>
      <Footer />
    </div>
  );
};

export default App;