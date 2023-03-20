import './projects.css'
import { Container } from '../../components/containerApp/container'
import { Card } from '../../components/card/card'
import { useState } from 'react'
import store from '../../assets/img/projects/store.jpg'
import weather from '../../assets/img/projects/weather-app.jpg'
import news from '../../assets/img/projects/News.jpg'
import clone from '../../assets/img/projects/web-clone.jpg'
import homepage from '../../assets/img/projects/homepage.jpg'
const projects = [
    {
        id:"2",
        name: "Weather App - DevChallenge",
        img: weather,
        tools:['React JS', 'Node JS', 'CSS', 'Webpack'],
        github: 'https://github.com/DeLSalGuz98/WeatherApp-devchallenges.io-',
        site: 'https://weather-app-devchallenges-io-mu.vercel.app/' 
    },
    {
        id:"3",
        name: "Room Homepage - Fronend Mentor",
        img: homepage,
        tools:['HTML', 'CSS', 'JavaScript'],
        github: 'https://github.com/DeLSalGuz98/Room-homepage-solution',
        site: 'https://delsalguz98.github.io/Room-homepage-solution/'
    },
    {
        id:"4",
        name: "News Homepage - Fronend Mentor",
        img: news,
        tools:['HTML', 'CSS'],
        github: 'https://github.com/DeLSalGuz98/newsHomepage',
        site: 'https://zingy-pavlova-8bf224.netlify.app/' 
    },
    {
        id:"1",
        name: "Aplicacion Web - Tienda Online",
        img: store,
        tools:['React JS', 'Node JS', 'CSS', 'MySQL'],
        github: 'https://github.com/DeLSalGuz98/store-project',
        site: 'null' 
    },
    {
        id:"5",
        name: "SPA - Copia de la pagina Dota 2",
        img: clone,
        tools:['HTML', 'CSS'],
        github: 'https://github.com/DeLSalGuz98/page-clone',
        site: 'null' 
    },
]

export function Projects() {
    const [projectSelected, setProjectSelected] = useState({
        name: "Weather App - DevChallenge",
        img: weather,
        tools:['React JS', 'Node JS', 'CSS', 'Webpack'],
        github: 'https://github.com/DeLSalGuz98/WeatherApp-devchallenges.io-',
        site: 'https://weather-app-devchallenges-io-mu.vercel.app/'  
    });
    const handlerClick = (project)=>{
        setProjectSelected({...projectSelected, 
            name: project.name,
            img: project.img,
            tools: project.tools,
            github: project.github,
            site: project.site
        })
    }
    return(
        <Container>
            <div className='projectContainer'>
                <h2>Mis Projectos Personales</h2>
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
                                            {
                                                p.site !== 'null'? <a className="cardBtn" target={'_blank'} href={p.site}>Ver Web</a>:<></>
                                            }
                                            
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
                        {
                            projectSelected.site !== 'null'? <a className='previewBtn' target={'_blank'} href={projectSelected.site}>Ver Web</a>: <></>
                        }
                        {/* <a className='previewBtn' target={'_blank'} href={projectSelected.site}>Ver Web</a> */}
                    </div>
                </div>
            </div>
        </Container>
    )
}