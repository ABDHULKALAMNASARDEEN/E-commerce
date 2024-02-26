import React from 'react'
import "./NewsLetter.css";

const NewsLetter = () => {
  return (
    <div className='newsLetter'>
        <h1>Get the exclusive offer on your email</h1>
        <p>Subscribe to our NewsLetter and stay updated</p>
        <div>
            <input type="email" placeholder='Enter your email'/>
            <button>Subscribe</button>
        </div>
      
    </div>
  )
}

export default NewsLetter
