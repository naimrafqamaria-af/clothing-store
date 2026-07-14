import './App.css';
import Shop from './Pages/Shop';
import Navbar from './Components/Navbar/Navbar';
import { BrowserRouter,Routes, Route } from 'react-router-dom';
import ShopCategory from './Pages/Men';
import { Product } from './Pages/Product';
import Cart from './Pages/Cart';
import LoginSignup from './Pages/LoginSignup';
import Kids from './Pages/Kids';
import Women from './Pages/Women';
import Men from'./Pages/Men';
import Checkout from'./Pages/Checkout';
import Features from'./Pages/Features';
import Footer from './Pages/Footer';
import ForgotPassword from './Pages/ForgetPassword';
import OwnerDashboard from './Pages/OwnerDashboard';
import Signup from './Pages/Signup';
import Profile from './Pages/Profile';
import SearchResults from './Pages/SearchResults';
import AddProduct from './Pages/AddProduct';
function App() {
  return(
 <div >
  
<Navbar/>
<Routes>
  <Route path='/' element ={< Shop/>}/>
  <Route path='/mens' element ={< Men/>}/>
  <Route path='/womens' element ={< Women/>}/>
  <Route path='/kids'element ={< Kids/>}/>
  <Route path ="product" element={<Product/>}>
 <Route path=':productId' element= {<Product/>}/>
  </Route>
  <Route path='/cart' element ={< Cart/>}/>
  <Route path='/Login' element ={< LoginSignup/>}/>
   <Route path="/" element={<ShopCategory />} />
        <Route path="/cart" element={<Cart />} />
         <Route path="/" element={<LoginSignup />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/Features" element={<Features />} />
        <Route path="/Footer" element={<Footer />} />
         <Route path="/OwnerDashboard" element={<OwnerDashboard />} />
          <Route path="/ForgetPassword" element={<ForgotPassword />} />
           <Route path="/Signup" element={<Signup />} />
           <Route path="/Profile" element={<Profile />} />
           <Route path="/add-product" element={<AddProduct />} />
           <Route  path="/search/:keyword" element={<SearchResults />}
/>
</Routes>

 </div>
  );

}

export default App;


