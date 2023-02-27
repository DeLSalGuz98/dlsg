import './constact.css'
import { Container } from '../../components/containerApp/container'

export function Contact() {
    return(
        <Container>
            <h3>Mis Redes</h3>
            <hr className="line" />
            <div className='contactContainer'>
                <ul>
                    <li><span className='contactIcon'><ion-icon name="logo-linkedin"></ion-icon></span><a className='contactText' target={'_blank'} href="https://www.linkedin.com/in/denilson-sg/">linkedin.com/in/denilson-sg/</a></li>
                    <li><span className='contactIcon'><ion-icon name="logo-github"></ion-icon></span><a className='contactText' target={'_blank'} href="https://github.com/DeLSalGuz98?tab=repositories">github.com/DeLSalGuz98</a></li>
                    <li><span className='contactIcon'><ion-icon name="mail-outline"></ion-icon></span><span className='contactMail'>@</span></li>
                </ul>
            </div>
            <div className='svgContainer'>
                <img className='svgImage' src="/public/img/deco.svg" alt="image-decoration" />
            </div>
        </Container>
    )
}