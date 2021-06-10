import React from 'react'
import "./about.css";

export default function About() {
    return (

     <>
     <div className = "parintcard">
     <div>
     <h2 className="our">Our Team</h2>
      
      <div className="row">
          <div className="column">
           <div className="card">
            <img src="" alt="roaa" ></img>
             <div className="container">
             <h2>Roaa</h2>
             <p className="title">CEO and Founder</p>
             <p>anything</p>
             <p>Roaa@gmail.com</p>
             <p><button className="button">Contact</button></p>

             </div>
           </div>
          </div>
      </div>
     </div>

<div className="column">
    <div className="card">
      <img src="" alt="yazan" style={{width:"100%"}}></img>
    <div className="container">

    <h2>Yazan</h2>
    <p className="title">Designer</p>
    <p>some text</p>
    <p>yazan@gmail.com</p>
    <p><button class="button">Contact</button></p>
    </div>
    </div>
</div>


<div className="column">
    <div className="card">
      <img src="" alt="mohammed" style={{width:"100%"}}></img>
    <div className="container">

    <h2>mohammed</h2>
    <p className="title">Designer</p>
    <p>some text</p>
    <p>mohammed@gmail.com</p>
    <p><button class="button">Contact</button></p>
    </div>
    </div>
</div>


<div className="column">
    <div className="card">
      <img src="" alt="loay" style={{width:"100%"}}></img>
    <div className="container">

    <h2>loay</h2>
    <p class="title">Designer</p>
    <p>some text</p>
    <p>loay@gmail.com</p>
    <p><button class="button">Contact</button></p>
    </div>
    </div>
</div>
</div>

     </>



    )
}
