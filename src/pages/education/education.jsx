import './education.css'
import { Container } from '../../components/containerApp/container'

const files = [
    {
        id:"1",
        image: "javascript.png",
        name:"file-js"
    },
    {
        id:"2",
        image: "frontend.png",
        name:"file-forntend"
    },
    {
        id:"3",
        image: "poo.png",
        name:"file-poo"
    },
    {
        id:"4",
        image: "react.png",
        name:"file-react"
    },
    {
        id:"5",
        image: "form.png",
        name:"file-form"
    },
    {
        id:"6",
        image: "mysql.png",
        name:"file-mysql"
    },
] 

export function Education() {
    return(
        <Container>
            <h3>Mi Proceso</h3>
            <hr className="line" />
            <div className="fileContainer">
                <div className="fileRotate">
                    {
                        files.map(f =>{
                            return(
                                <div className="fileItem" key={f.id}>
                                    <img loading='lazy' className='fileImage' src={`/src/assets//img/education/${f.image}`} alt={f.name} />
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </Container>
    )
}