import { Route, Routes } from "react-router-dom";
import { Login, Signup } from "./pages";
import HomePage from './landingPage/home/HomePage';
import AboutPage from './landingPage/about/AboutPage';
import ProductsPage from './landingPage/products/ProductsPage';
import PricingPage from './landingPage/pricing/PricingPage';
import SupportPage from './landingPage/support/SupportPage';
import NotFound from './landingPage/NotFound';


function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<HomePage/>} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path='/about' element={<AboutPage/>}/>
        <Route path='/products' element={<ProductsPage/>}/>
        <Route path='/pricing' element={<PricingPage/>}/>
        <Route path='/support' element={<SupportPage/>}/>
        <Route path='*' element={<NotFound/>}/>
      </Routes>
    </div>
  );
}

export default App;