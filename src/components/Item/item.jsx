import { useContext } from 'react'
import { CartContext } from '../context/cart-context'
import './item.css'

const Item =({item})=>{

    const {addToCart} = useContext(CartContext) ;
    return(
        <>
           <section className='item-box'>
             <article className='item-image'>
                <img src={item?.imageurl} alt="gameimage" />
             </article>
             <article className='item-title'>
                Title : {item?.title}
             </article>
             <article>
                Description of game :  {item?.description}
             </article>
             <article>
                Price of game :  {item?.price}
                <div>
                <button className='itembtn' onClick={()=> addToCart(item)}>Add to Cart</button>

                </div>
             </article>
           </section>
        </>
    )
}

export default Item