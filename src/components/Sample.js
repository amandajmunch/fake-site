import React from 'react';
import stockimage from '../images/stockimage.png';
import playbtn from '../images/playbtn.png';
import '../CSS/Sample.css';

const Sample = () =>{
  return (
    <div className="sample">
      <div className="sample-text">
       <h2>A sample of what is to come</h2>
       <p>Hosts are chefs, hikers, or just knowledgeable locals who want to show others little-known pockets of their community. They can host an experience of multiple ones over the course of a few days.</p>
      </div>
      <div className="imageContainer">
       <div className="stockimage image">
        <img src={stockimage}/>
       </div>
       <div className="playbtn image"><img src={playbtn}/></div>
       </div>
    </div>
    )
}

export default Sample;
