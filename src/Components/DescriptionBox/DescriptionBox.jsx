import React from 'react'
import "./DescriptionBox.css"

const DescriptionBox = () => {
  return (
    <div className='descriptionbox'>
        <div className="descriptionbox-navigator">
          <div className="descriptionbox-nav-box">Description</div>
          <div className="descriptionbox-nav-box fade">Reviews (122)</div>
        </div>
        <div className="descriptionbox-description">
          <p>An e-commerce website is an online platform that facilitate
            buying and selling of products or services over the internet serves
            as a virtual marketplace where businesses and individual showcase
            their products,interact with customers, and conduct transactions without
            the need for a physical presence.E-commerece websites have gained immense 
            popularity dure to thier convience accessibility, and the global reach they offer
          </p>
          <p>
            E-commerce website typically products orr services and their detailed descriptions,images,prices,and any available varaiables(e.g, sizes,colors).
            Each product usally has its own dedicated details with relevant information 
          </p>
        </div>
  
    </div>
  )
}

export default DescriptionBox
