import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import './signup.css';
import App from './App' ;
import NavBar from './landingPage/Navbar';
import Footer from './landingPage/Footer';
import { CookiesProvider } from 'react-cookie';
import{BrowserRouter,Routes,Route} from "react-router-dom";
import 'react-toastify/dist/ReactToastify.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <CookiesProvider>
  <BrowserRouter>
     <Routes>
        <Route path="*" element={
          <>
            <NavBar />
            <App />
            <Footer />
          </>
        } />
      </Routes>
  </BrowserRouter>
  </CookiesProvider>
);

