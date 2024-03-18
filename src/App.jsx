import './App.css'
import { Home } from './pages/Home'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Navbar } from './components/Navbar/Navbar';
import { Footer } from './components/Footer/Footer';
import ProfileEdit from './components/ProfileEdit/ProfileEdit'
import Profile from './components/ProfileInformation/Profile'
import Address from './components/Address/Address'
import OrderSummary from './components/OrderSummary/OrderSummary'
import ShoppingCart from './pages/Shopingcart';
import OrderDetails from './components/OrderDetails/OrderDetail'
function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/profile' element={<Profile/>} />
          <Route path='/profile-edit' element={<ProfileEdit/>} />
          <Route path='/address-edit' element={<Address/>} />
          <Route path='/Orders' element={<OrderDetails/>} />
          <Route path='/cart' element={<ShoppingCart/>} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
