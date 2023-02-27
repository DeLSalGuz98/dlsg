import './home.css'
import { Container } from "../../components/containerApp/container"
import { useNavigate } from 'react-router-dom'
import { onProjectContext } from '../../context/onProject';
import { useContext } from 'react';
export function Home(){
    //set in true for update the nav component
    const {setIsTrue} = useContext(onProjectContext);
    //call hook navigate to redirect projects page
    const navigate = useNavigate();
    const handlerClick = ()=>{
        navigate('/projects');
        setIsTrue(true);
    }
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
                    {/* <Link className='bigBtn' to={"/projects"}>Mis Proyectos</Link> */}
                    <input className='bigBtn' type="button" value="Mis Proyectos" onClick={handlerClick}/>
                </div>
                <img loading='lazy' className='dlsg' src="/src/assets/img/dlsg.png" alt="denilson" />
            </div>
        </Container>
    )
}