import '../styles/HeroImage.css';
import Button from 'react-bootstrap/Button';
// import { Link } from "react-router-dom"


const HeroImage = props => {
    
    return(
        <div>
            <div className='banner-image d-flex justify-content-center align-items-center'>    
                    <div className="flexbox-item-row-1 main-title">
                        <h1 className='text-white title'>Celebrating 20 Years Of Giving.</h1>
                        <p className='text-white sub-title'><strong>Altruvita</strong> has served immigrants for over 150 years. Our city greeted them with dignity and respect and took action to ensure their basic needs were met. <strong>Altruvita</strong> is looking to support the new arrivals in any way we can!</p>
                        <Button className="donate-btn" eventkey={2} href="#" variant="light">Donate Now</Button>
                    </div>
                    <div className="flexbox-item-row-1 empty-column">
                        {/* <img id='hero-png' src={trainers} alt="healthy body"/> */}
                    </div>           
            </div>         
        </div>
    );
}

export default HeroImage;