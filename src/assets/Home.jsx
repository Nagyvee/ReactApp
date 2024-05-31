import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {fab} from "@fortawesome/free-brands-svg-icons"
import { library } from "@fortawesome/fontawesome-svg-core"
import './home.css'

library.add(fab)

export default function Home(){
    return(
        <>
        <div className="home-container">
            <div className="home-info-wrapper macbook">
              <h2>MacBook Pro</h2>
              <h3>Mind-blowing. Head turning</h3>
              <h5>Learn more&gt;</h5>
            </div>

            <div className="home-info-wrapper imac">
            <h2>iMac</h2>
              <h3>Packed with more juice.</h3>
              <h5>Learn more&gt;</h5>
            </div>

            <div className="home-info-wrapper iphone-15-pro">
            <h2>iPhone 15 pro</h2>
              <h3>Titanium so strong. So light. So Pro.</h3>
              <h5>Learn more &gt;</h5>
           </div>

            <div className="flex-wrapper">
            <div className="home-info-wrapper iphone-15">
            <h2>iPhone 15</h2>
              <h3>New Camera. New Design.</h3>
              <h5>Learn more&gt;</h5>
            </div>
            
            <div className="home-info-wrapper series-9">
            <h2><FontAwesomeIcon icon={['fab', 'apple']} />Watch</h2><span>Series 9</span>
              <h3>Smarter. Brighter</h3>
            <h5>Learn more&gt;</h5>
            </div>
            </div>
            
            <div className="flex-wrapper">
            <div className="home-info-wrapper ultra-2">
            <h2><FontAwesomeIcon icon={['fab', 'apple']} />Watch</h2><span>Ultra 2</span>
              <h3>Next-level adventure</h3>
              <h5>Learn more&gt;</h5>
            </div>

            <div className="home-info-wrapper ipad">
            <h2>iPad</h2>
              <h3>Leavable. Drawable. Magical.</h3>
              <h5>Learn more&gt;</h5>
            </div>
            </div>
        </div>
        </>
    )
}