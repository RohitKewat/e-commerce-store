import './App.css';
import {BrowserRouter ,Routes,Route} from 'react-router-dom'
import Main from './components/home/main';
import Cart from './components/cart/cart';

function App() {
  return (
      <>
         <BrowserRouter>
           <Routes>
             <Route path='/' element={<Main/>} />
             <Route path='cart' element = {<Cart/>} />
           </Routes>
         </BrowserRouter>        
      </>
  );
}

export default App;
