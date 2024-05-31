import React from 'react'
import './Main.css'
import { assets } from '../../assets/assets'
const Main = () => {
  return (
    <div className="main">
        <div className="nav">
            <p>Gemini </p>
            <img className='img' src={assets.user_icon} alt="" />
        </div>

        <div className="main-container">
          <div className="greet">
            <p className='name'><span>Hello, Alpha</span></p>
            <p>How can I help you today?</p>
          </div>

          <div className="cards">
            <div className="card">
              <p>Explain how something works like an engineer</p>
              <img src={assets.bulb_icon} alt="" />
            </div>

            <div className="card">
              <p>Help me pick a movie to watch based on a genre</p>
              <img src={assets.compass_icon} alt="" />
            </div>

            <div className="card">
              <p>Outline an organized & logical sales pitch for a new product</p>
              <img src={assets.code_icon} alt="" />
            </div>

            <div className="card">
              <p>Give me phrases to learn a new language</p>
              <img src={assets.compass_icon} alt="" />
            </div>

            
          </div>
        </div>
    </div>
  )
}

export default Main