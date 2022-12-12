import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Nav from '../components/Nav';
import About from '../pages/About';
import Contact from '../pages/Contact';
import Home from '../pages/Home';
import ProductDetails from '../pages/ProductDetails';
import ProductList from '../pages/ProductList';
    
const AppRouter =()=> {
      return (
        <BrowserRouter>
        <Nav/>
          <div className="container">
          <Routes>
              <Route path="/" element={<Home/>}></Route>
              <Route path="/about" element={<About/>}></Route>
              <Route path="products" element={<ProductList/>}></Route>
              <Route path="products/:urlid" element={<ProductDetails/>}></Route>
              <Route path="/contact" element={<Contact/>}></Route>
          </Routes>
          </div>
        </BrowserRouter>
      );
  }

export default AppRouter