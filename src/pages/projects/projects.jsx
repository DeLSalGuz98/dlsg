import './projects.css'
import { Container } from '../../components/containerApp/container'
import { Card } from '../../components/card/card'
const projects = [
    {
        id:"1",
        name: "Aplicacion Web - Tienda Online",
        img: "store.png",
        tools:['React JS', 'Node JS', 'CSS', 'MySQL'],
        github: 'https://github.com/DeLSalGuz98/store-project' 
    },
    {
        id:"2",
        name: "Aplicacion Web del Clima",
        img: "weather-app.png",
        tools:['React JS', 'Node JS', 'CSS', 'Webpack'],
        github: 'https://github.com/DeLSalGuz98/WeatherApp-devchallenges.io-' 
    },
    {
        id:"3",
        name: "Aplicacion Web - Escuela Online",
        img: "school.png",
        tools:['HTML', 'CSS', 'JavaScript', 'JSON server'],
        github: 'https://github.com/DeLSalGuz98/school-app' 
    },
    {
        id:"4",
        name: "SPA - Copia de la pagina Dota 2",
        img: "web-clone.png",
        tools:['HTML', 'CSS'],
        github: 'https://github.com/DeLSalGuz98/page-clone' 
    },
]

export function Projects() {
    return(
        <Container>
            <div className='projectContainer'>
                <h3>Mis Projectos Personales</h3>
                <hr className='line'/>
                <div className='projects'>
                    {
                        projects.map(p=>{
                            return(
                                <Card
                                    key={p.id}
                                    project={p.name}
                                    image={p.img}
                                    github={p.github}
                                />
                            )
                        })
                    }
                </div>
            </div>
        </Container>
    )
}