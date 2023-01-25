import "bootstrap/dist/css/bootstrap.css";
import './App.css';
import "font-awesome/css/font-awesome.css";
import { BrowserRouter, Routes, Route,useLocation } from 'react-router-dom';

import Navbar from './components/Navbar';
import Home from './components/Home';
import Cart from './components/Cart';
import NotFound from "./components/NotFound";


function App() {
  let location = useLocation();

  return (
    <div className="App">
      
       {
        location.pathname == '/' || location.pathname == '/cart' ? <Navbar />  : null
       }
        
        <Routes>
          <Route exact path='/' element={<Home />} />
          <Route path='/cart' element={<Cart />} />
          <Route path="*" element={<NotFound />} />
        </Routes>

    </div>
  );
}

export default App;
