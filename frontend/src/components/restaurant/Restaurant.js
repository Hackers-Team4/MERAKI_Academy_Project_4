
import React , {useState , useEffect} from 'react';
import axios from 'axios';
import "./Restaurant.css"
/* Restaurant */


const Restaurant = ()=>{
   const  [restaurant, setRestaurant] = useState()
    useEffect(()=>{    
      axios.get(`http://localhost:5000/restaurants` )
       .then((response)=>{
        setRestaurant(response.data)
        console.log(response.data)
    
      }).catch((err)=>{
        console.log("Error")
      })
     },[])
      return (
        <>

   <div className="parantrestaurant">
            {restaurant&&restaurant.map((elem,i)=>{
               return (<div className="childrestaurant">
               <div className="imag">    
               <img src ={`${elem.images[0]}`} />
               </div>
               <div className="par">
               <p>{elem.restaurantName}</p>
               <p>{elem.typeOfFood}</p>
               <button>more details</button>

               </div>

               </div>) 
            })}
        </div>
        
        </>
      );
    }
    export default Restaurant