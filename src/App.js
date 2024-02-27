import './App.css';
import Product from './pages/Product';
import Cart from './pages/Cart';
import Loginsignup from './pages/Loginsignup';
import Navbar from './components/navbar/Navbar';
import {BrowserRouter as Router,Route, Routes, BrowserRouter} from 'react-router-dom';
import Shop from './pages/Shop'; 
import ShopCategory from './pages/ShopCategory';
import Footer from './components/newCollections/footer/Footer';
import men_banner from './components/assets/man_banner.webp';
import women_banner from './components/assets/woman_banner.webp';
import kid_banner from './components/assets/kid_banner.webp';
import ProductDisplay from './components/product_display/ProductDisplay';
import BreadCrum from './components/breadcrum/BreadCrum';
import DescriptionBox from './descriptionBox/DescriptionBox';



function App() {
  return (
    <div >
      <BrowserRouter>
      <Navbar />

          <Routes>
          <Route>
          <Route path="/Shop" element={<Shop/>}/>
          <Route path="/men" element={<ShopCategory banner={men_banner} category="men"/>}/>
          <Route path="/women" element={<ShopCategory banner={women_banner} category="women"/>}/>
          <Route path="/kid" element={<ShopCategory banner={kid_banner} category="kid"/>}/>
          <Route path="/product" element={<Product />}/>
          <Route path=":productId" element={<Product/>}/>
          </Route>
          
          <Route path='/Cart' element={<Cart />}/>;
          <Route path='/Loginsignup' element={<Loginsignup />}/>;
          </Routes>
       </BrowserRouter>

      <ProductDisplay/>
      <BreadCrum/>
      <DescriptionBox/>
      {/* <RelatedProducts/> */}
       <Footer/>
       {/* <Home/> */}
    </div>
  );
}

export default App;
