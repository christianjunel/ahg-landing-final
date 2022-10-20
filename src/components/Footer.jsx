import '../styles/Footer.css';
import footerLogo from '../imgs/altruvita-logo.svg';

const Footer = props => {
    return (
        <footer>
            <div>
                <div id="disclaimer">
                    <a href="/"><img className='footer-logo' src={footerLogo} alt="altruvita logo" width="300"/></a>
                    <p className='disclaimer'>875 Mabini Exterior,<br />Davao City, Philippines<br /><br />support@altruvita.com<br /><br />+63 927 297 1584</p><br/>
                </div>
                <div className="socmed-icons">
                    <a target="_blank" href="https://www.facebook.com/christianjunel.moriones.9" className="fa fa-facebook fa-lg" rel="noopener noreferrer"> </a>
                    <a target="_blank" href="https://twitter.com/juneldaexplorer" className="fa fa-twitter fa-lg" rel="noopener noreferrer"> </a>
                    <a target="_blank" href="https://www.instagram.com/cjmoriones/" className="fa fa-linkedin fa-lg" rel="noopener noreferrer"> </a>
                    <a target="_blank" href="https://www.linkedin.com/in/christianjunelmoriones/" className="fa fa-instagram fa-lg" rel="noopener noreferrer"> </a>
                    <a target="_blank" href="mailto:christianjunelm@gmail.com?subject=Inquiry Via Website&body=Hi there, I find your services interesting. Let's hop on a call?" className="fa fa-envelope fa-lg" rel="noopener noreferrer"> </a>
                </div>
                <p className='disclaimer'><br />All Rights © 2022 by Altruvita Org.</p>
            </div>
        </footer>
    );
}

export default Footer;