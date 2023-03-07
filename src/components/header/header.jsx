import { useContext } from 'react';
import { useNavigate } from 'react-router-dom'
import { CartContext } from '../context/cart-context';
import './header.css'
const Header =()=>{
    const navigate = useNavigate() ;
    const {cartData} = useContext(CartContext) ;
    console.log("line8",cartData);
    return(
  
        <>
         <nav className='nav-bar' >
            <section className='cpn-name'> Easykart </section>
            <section>
                <span>{cartData?.length}</span>

              <img src="images\shopping cart.png" alt="carticon" className='cart-icon' onClick={()=> navigate("/cart")}/>
               
            </section>
         </nav>
        </>
    )
}

export default Header