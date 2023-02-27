import { Container } from '../../components/containerApp/container'
import './habilities.css'
export function Habilities(){
    return(
        <Container>
            <div className='habilitiesContainer'>
                <div className='habilitiesSubcontainer'>
                    <h3>Herramientas</h3>
                    <hr className='line'/>
                    <div className='containerTools'>
                        <img loading='lazy' className='imgTools' src="/public/img/html.png" alt="html" />
                        <img loading='lazy' className='imgTools' src="/public/img/css.png" alt="css" />
                        <img loading='lazy' className='imgTools' src="/public/img/js.png" alt="js" />
                        <img loading='lazy' className='imgTools' src="/public/img/react.png" alt="react" />
                    </div>
                </div>
                <div className='habilitiesSubcontainer'>
                    <h3>Habilidades</h3>
                    <hr className='line'/>
                    <ul className='habilitiesList'>
                        <li>Autodidacta</li>
                        <li>Responsable</li>
                        <li>Organizado</li>
                    </ul>
                </div>
                <div className='habilitiesSubcontainer'>
                    <h3>Herramientas en proceso de Aprendizaje</h3>
                    <hr className='line'/>
                    <div className='containerTools'>
                        <img loading='lazy' className='imgTools' src="/public/img/mysql.png" alt="mysql" />
                        <img loading='lazy' className='imgTools' src="/public/img/node.png" alt="nodejs" />
                    </div>
                </div>
            </div>
        </Container>
    )
}