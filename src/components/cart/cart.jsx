import { useCallback, useContext } from "react"
import { CartContext } from "../context/cart-context"
import useRazorpay from "react-razorpay";
import { useNavigate } from "react-router-dom";


const Cart = () => {
    const navigate = useNavigate() ;

    const { cartData } = useContext(CartContext);
    let sum =0
    const Razorpay = useRazorpay();
    const handlePayment = useCallback(async(sum)=>{
         const options = {
            key : 'rzp_test_Uhe2TNvMVZCz1Y',
            amount :sum *100,
            currency : "INR",
            name : "EasyKart",
            description:"game transaction",
            handler :(res)=>{
                console.log(res);
            },
            prefill : {
                name : "Rohit",
                email : "rohit554514@gmail.com",
                contact:"8878719466"
            },
            notes: {
                address: "EasyKart Office Bhopal (M.P)",
              },
              theme: {
                color: "#3399cc",
              }
         }
         const rzpay = new Razorpay(options);
         rzpay.open();

    },[Razorpay]) 
    return (
        <>
            <section className="item-box">
             <section className="">
             {
                    cartData.map((item) => {
                        return (
                            <>
                            <article className="item-title">{item.title}</article>
                            <article>{item.price}</article>
                            </>
                     )
                    })
                }
             </section>
              <article className="item-title">Billing Information </article>
              <article> 
                   {
                      cartData.map((item)=>{
                          sum += item.price
                      })
                   }  
                   Total Amount : Rs {sum}
              </article>
              <article>
                <button className='itembtn' onClick={()=>{ handlePayment(sum)}}>Checkout</button>
              </article>
              <article>
                <button onClick={()=>{navigate("/")}} >Back TO Home</button>
              </article>
            </section>

        </>
    )
}

export default Cart