import React from "react";
import ReactDOM from "react-dom/client";
import { CookiesProvider } from "react-cookie";
import { BrowserRouter,Routes,Route} from "react-router-dom";
import 'react-toastify/dist/ReactToastify.css';
import MainHome from "./components/MainHome";
import './index.css';


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <CookiesProvider>
    <BrowserRouter>
      <Routes>
        <Route path="/*" element={<MainHome />} />
      </Routes>
    </BrowserRouter>
    </CookiesProvider>
  </React.StrictMode>
);

