import './home.css'
import { Container } from "../../components/containerApp/container"
import { Link } from 'react-router-dom'
export function Home(){
    return(
        <Container>
            <div className='cols-2'>
                <div className='information'>
                    <h2 className='title'>Hola, Soy 
                    <br />
                    Denilson
                    </h2>
                    <hr className='line'/>
                    <p className='text'>
                    Terminé la Universidad en enero de 2022, estudie Ingenieria de Sistemas e Informatica y entre todas las cosas que aprendí, lo que más me entusiasmó fue el desarrollo de software.
                    </p>
                    <p className='text'>
                    Algunos de mis objetivos actuales son mejorar mis habilidades de programación, aprender a gestionar proyectos.
                    </p>
                    <Link className='bigBtn' to={"/projects"}>Mis Proyectos</Link>
                    {/* <input className='bigBtn' type="button" value="Mis Proyectos" /> */}
                </div>
                <img className='dlsg' src="/public/img/dlsg.jpg" alt="me" />
            </div>
        </Container>
    )
}