import React from 'react'
import Android from '../Images/Android.png'
import Ios from '../Images/Ios.png'

const Contact = () => {
  return (
    <>
      <div className="contact_one">
        <h1>Contact Customer Service</h1>
        <h3>Call us from the Netflix app</h3>
        <p>Contacting Netflix is now easier than ever when you contact us from the Netflix app on your Android or iOS phone or tablet! Calling through the app is free - all you need is an internet or cellular connection.</p>
        <h5>Download the Netflix app:</h5>
        <div>
          <img src={Android} alt="Android" /><img src={Ios} alt="Ios" />
        </div>
      </div>


      {/* div two */}
      <div className="contact_two">
        <h3>Call us from any phone</h3>
        <p>You will need a landline or cellular phone service.</p>
        <p>123456789</p>
      </div>
    </>
  )
}

export default Contact