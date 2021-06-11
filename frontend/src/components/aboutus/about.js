import React from 'react'
import "./about.css";

export default function About() {
    return (

     <>
     <h2 className="our">Our Team</h2>
     <div className = "parintcard">
     
     
      
      
         
           <div className="card">
             <div className="img">

             <img src="" alt="roaa" ></img>
             </div>
             <div className="container">
             
             <h2>Roaa</h2>
             <p className="title">CEO and Founder</p>
             <p>anything</p>
             <p>Roaa@gmail.com</p>
             <p><button className="button">Contact</button></p>

             </div>
           </div>
         
     
    


    <div className="card">

    <div className="img">

    <img src="https://upload.wikimedia.org/wikipedia/commons/3/3f/TechCrunch_Disrupt_2019_%2848834434641%29_%28cropped%29.jpg" alt="yazan" ></img>
 </div>
      
    <div className="container">

    <h2>Yazan</h2>
    <p className="title">Designer</p>
    <p>some text</p>
    <p>yazan@gmail.com</p>
    <p><button class="button">Contact</button></p>
    </div>
    </div>




    <div className="card">
    <div className="img">

    <img src="" alt="mohammed" style={{width:"100%"}}></img>
   </div>
      
    <div className="container">

    <h2>mohammed</h2>
    <p className="title">Designer</p>
    <p>some text</p>
    <p>mohammed@gmail.com</p>
    <p><button class="button">Contact</button></p>
    </div>
    </div>




    <div className="card">
    <div className="img">

    <img src="" alt="loay" style={{width:"100%"}}></img>
    </div>
     
    <div className="container">

    <h2>loay</h2>
    <p class="title">Designer</p>
    <p>some text</p>
    <p>loay@gmail.com</p>
    <p><button class="button">Contact</button></p>
    </div>
    </div>

</div>

     </>



    )
}
