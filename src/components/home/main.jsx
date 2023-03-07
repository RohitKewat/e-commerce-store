
import axios from 'axios'
import { useEffect, useState } from 'react'
import Header from '../header/header'
import Item from '../Item/item'
import './main.css'
const Main = () => {
    const [bestSellerData, setbestSellerdata] = useState([])
    const [actionGamesData, setactionGamesData] = useState([])
    console.log(actionGamesData);
    useEffect(() => {

        //------------------------ getting data of bestSeller games -----------------------
        axios.get("http://localhost:1337/api/best-sellers").then( async(bestSeller) => {
           await setbestSellerdata(bestSeller.data.data);
        }).catch((e) => {
            console.log(e);
        }).finally(() => {

        })
        //------------------------ getting data of action games -----------------------
        axios.get("http://localhost:1337/api/action-games").then((actionGames) => {
            setactionGamesData(actionGames.data.data);
        }).catch((e) => {
            console.log(e);
        }).finally(() => {

        })
    }, [])

    return (
        <>
            <Header/>

            <section className='gamezone'>Best Seller Games</section>
           {  bestSellerData.map((data)=>{  
            
               return (
                   <div key={data.id}>
                       <Item item = {data.attributes}/>    
                   </div>
                   )
           })}
   
       <section className='gamezone'>Action Games </section>

           {
            actionGamesData.map((data)=>{
               return <Item item = {data.attributes} />    

            })
           }

           
        </>
    )
}

export default Main