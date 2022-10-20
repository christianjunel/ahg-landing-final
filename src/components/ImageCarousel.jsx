import Carousel from 'react-bootstrap/Carousel';
import '../styles/ImageCarousel.css'
import firstSlide from '../imgs/carousel-images-1.png'
import secondSlide from '../imgs/carousel-images-2.png'
import thirdSlide from '../imgs/carousel-images-3.png'

const ImageCarousel = props => {
    return(
        <Carousel fade>
            <Carousel.Item>
                <img 
                    className='d-block w-100'
                    src={firstSlide}
                    alt='first slide'
                />
                <Carousel.Caption>
                    <h3>Zenaida Bosch</h3>
                    <p>CEO & Founder</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
        <img
          className="d-block w-100"
          src={secondSlide}
          alt="Second slide"
        />

        <Carousel.Caption>
          <h3>Jay Charisson</h3>
          <p>Operations Manager</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={thirdSlide}
          alt="Third slide"
        />

        <Carousel.Caption>
          <h3>Jane Doe</h3>
          <p>
            Human Resources
          </p>
        </Carousel.Caption>
      </Carousel.Item>
        </Carousel>
        
    )
}

export default ImageCarousel;