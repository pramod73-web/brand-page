import React from 'react'

const navigation = () => {
  return (
    <div>
        <nav className="container">
      <div className="logo">
      <img src="/images/brand_logo.png" alt="brand_logo" srcset="" />
      </div>
      <ul>
        <li href="#">MENU</li>
        <li href="#">LOCATION</li>
        <li href="#">ABOUT</li>
        <li href="#">CONTACT</li>
      </ul>
      <button className="login">LOGIN</button>
    </nav>
    </div>
  )
}

export default navigation
