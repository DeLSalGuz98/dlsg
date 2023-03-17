import { Container } from '../../components/containerApp/container'
import './habilities.css'
import html from '../../assets/img/html.png'
import css from '../../assets/img/css.png'
import js from '../../assets/img/js.png'
import react from '../../assets/img/react.png'
import mysql from '../../assets/img/mysql.png'
import node from '../../assets/img/node.png'
export function Habilities(){
    return(
        <Container>
            <div className='habilitiesContainer'>
                <div className='habilitiesSubcontainer'>
                    <h2>Herramientas</h2>
                    <hr className='line'/>
                    <div className='containerTools'>
                        <img loading='lazy' className='imgTools' src={html} alt="html" />
                        <img loading='lazy' className='imgTools' src={css}  alt="css" />
                        <img loading='lazy' className='imgTools' src={js}  alt="js" />
                        <img loading='lazy' className='imgTools' src={react}  alt="react" />
                    </div>
                </div>
                <div className='habilitiesSubcontainer'>
                    <h2>Habilidades</h2>
                    <hr className='line'/>
                    <ul className='habilitiesList'>
                        <li>Autodidacta</li>
                        <li>Responsable</li>
                        <li>Organizado</li>
                    </ul>
                </div>
                <div className='habilitiesSubcontainer'>
                    <h2>Herramientas en proceso de Aprendizaje</h2>
                    <hr className='line'/>
                    <div className='containerTools'>
                        <img loading='lazy' className='imgTools' src={mysql} alt="mysql" />
                        <img loading='lazy' className='imgTools' src={node} alt="nodejs" />
                    </div>
                </div>
            </div>
        </Container>
    )
}