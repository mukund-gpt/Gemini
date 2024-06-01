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

          <div className="main-bottom">
            <div className="search-box">
              <input type="text" placeholder='Enter a prompt here' />
              <div>
                <img src={assets.gallery_icon} />
                <img src={assets.mic_icon} />
                <img src={assets.send_icon} />
              </div>

            </div>
            <p className='bottom-info'>Gemini may display inaccurate info, including about people, so double-check its responses.</p>
          </div>
        </div>
    </div>
  )
}

export default Main