import { Container } from '../../components/containerApp/container'
import './habilities.css'
import html from '../../assets/img/html.png'
import css from '../../assets/img/css.png'
import js from '../../assets/img/js.png'
import react from '../../assets/img/react.png'
import mysql from '../../assets/img/mysql.svg'
import node from '../../assets/img/node.png'
import git from '../../assets/img/git.svg'
import bootstrap from '../../assets/img/bootstrap.svg'
export function Habilities(){
    return(
        <Container>
            <div className='habilitiesContainer'>
                <div className='habilitiesSubcontainer'>
                    <h2>Herramientas Frontend</h2>
                    <hr className='line'/>
                    <div className='containerTools'>
                        <img loading='lazy' className='imgTools' src={html} alt="html" />
                        <img loading='lazy' className='imgTools' src={css}  alt="css" />
                        <img loading='lazy' className='imgTools' src={js}  alt="js" />
                        <img loading='lazy' className='imgTools' src={react}  alt="react" />
                        <img loading='lazy' className='imgTools' src={bootstrap}  alt="bootstrap" />
                    </div>
                </div>
                <div className='habilitiesSubcontainer'>
                    <h2>Habilidades</h2>
                    <hr className='line'/>
                    <ul className='habilitiesList'>
                        <li>Autodidacta</li>
                        <li>Responsable</li>
                        <li>Organizado</li>
                        <li>Disciplinado</li>
                    </ul>
                </div>
                <div className='habilitiesSubcontainer'>
                    <h2>Otras Herramientas</h2>
                    <hr className='line'/>
                    <div className='containerTools'>
                        <img loading='lazy' className='imgTools' src={mysql} alt="mysql" />
                        <img loading='lazy' className='imgTools' src={node} alt="nodejs" />
                        <img loading='lazy' className='imgTools' src={git} alt="git" />
                    </div>
                </div>
            </div>
        </Container>
    )
}