
import './service.scss'
import React from 'react';
import { service } from '../../data';
import ServiceCell from '../serviceCell/ServiceCell'



export default function Service() {
  return (
   <div className="service" id='services'>
       <div className="intro">
           <div className="header">
               Our <span>Service</span>
           </div>
           
       
            <div className="tittle">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque iste eum <br/>cumque accusantium molestias, sint illo porro, 
            </div>

            <div className="devider">

            </div>
       </div>

       <div className="cellContainer">
           {
               service.map((item)=><ServiceCell serviceName={item.serviceName} serviceIcon={item.serviceIcon} describtion={item.describtion} 
                />)
           }
       </div>

   </div>
  )
}
