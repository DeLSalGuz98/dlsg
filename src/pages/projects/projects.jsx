import './projects.css'
import { Container } from '../../components/containerApp/container'
import { Card } from '../../components/card/card'
import { useState } from 'react'
import store from '../../assets/img/projects/store.jpg'
import weather from '../../assets/img/projects/weather-app.jpg'
import school from '../../assets/img/projects/school.jpg'
import clone from '../../assets/img/projects/web-clone.jpg'
const projects = [
    {
        id:"1",
        name: "Aplicacion Web - Tienda Online",
        img: store,
        tools:['React JS', 'Node JS', 'CSS', 'MySQL'],
        github: 'https://github.com/DeLSalGuz98/store-project' 
    },
    {
        id:"2",
        name: "Aplicacion Web del Clima",
        img: weather,
        tools:['React JS', 'Node JS', 'CSS', 'Webpack'],
        github: 'https://github.com/DeLSalGuz98/WeatherApp-devchallenges.io-' 
    },
    {
        id:"3",
        name: "Aplicacion Web - Escuela Online",
        img: school,
        tools:['HTML', 'CSS', 'JavaScript', 'JSON server'],
        github: 'https://github.com/DeLSalGuz98/school-app' 
    },
    {
        id:"4",
        name: "SPA - Copia de la pagina Dota 2",
        img: clone,
        tools:['HTML', 'CSS'],
        github: 'https://github.com/DeLSalGuz98/page-clone' 
    },
]

export function Projects() {
    const [projectSelected, setProjectSelected] = useState({
        name: "Aplicacion Web - Tienda Online",
        img: store,
        tools:['React JS', 'Node JS', 'CSS', 'MySQL'],
        github: 'https://github.com/DeLSalGuz98/store-project' 
    });
    const handlerClick = (project)=>{
        setProjectSelected({...projectSelected, 
            name: project.name,
            img: project.img,
            tools: project.tools,
            github: project.github
        })
    }
    return(
        <Container>
            <div className='projectContainer'>
                <h3>Mis Projectos Personales</h3>
                <hr className='line'/>
                <div className='projects'>
                    {
                        projects.map(p=>{
                            return(
                                <div className='cardShadow' key={p.id} onClick={()=>{handlerClick(p)}}>
                                    <Card
                                    project={p.name}
                                    image={p.img}
                                    >
                                        <div className="cardDescription">
                                            <span className='cardTitle'>{p.name}</span>
                                            <a className="cardBtn" target={'_blank'} href={p.github}>Ver Github</a>
                                        </div>
                                    </Card>
                                </div>
                            )
                        })
                    }
                </div>
                <div className='maxPreviewProject'>
                    <img loading='lazy' className='previewImg' src={projectSelected.img} alt={projectSelected.name} />
                    <div className='previewInformation'>
                        <span className='previewTitle'>{projectSelected.name}</span>
                        <ul className='previewList'>
                            {
                                projectSelected.tools.map(t=>{
                                    return(
                                        <li key={t}>{t}</li>
                                    )
                                })
                            }
                        </ul>
                        <a className='previewBtn' target={'_blank'} href={projectSelected.github}>Ver Github</a>
                    </div>
                </div>
            </div>
        </Container>
    )
}