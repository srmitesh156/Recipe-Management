import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Form from './comp/pages/Form'
import ViewUser from './comp/pages/ViewUser'
import './index.css'
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import Header from './comp/layout/Header';
import Footer from './comp/layout/Footer';
import './comp/pages/style.css'
import UpdateUser from './comp/pages/UpdateUser';
import Menu from './comp/pages/Menu'
import Data from './comp/pages/Data'
import Contact from './comp/pages/Contact'

function App() {
  return (
    <Router>
       <Header/>
      <Routes>
        <Route path="/" element={<Form />} />
        <Route path="/ViewUser" element={<ViewUser />} />
        <Route path="/update-user/:id" element={<UpdateUser />} />
        <Route path="/Menu" element={<Menu />} />
        <Route path="/Data/:id" element={<Data />}  />
        <Route path="/Contact" element={<Contact />}  />

      </Routes>
      <Footer/>
    </Router>
  );
}

export default App;
