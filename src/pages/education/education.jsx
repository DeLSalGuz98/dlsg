import './education.css'
import { Container } from '../../components/containerApp/container'
import javascript from '../../assets/img/education/javascript.png'
import frontend from '../../assets/img/education/frontend.png'
import poo from '../../assets/img/education/poo.jpg'
import react from '../../assets/img/education/react.jpg'
import form from '../../assets/img/education/form.jpg'
import mysql from '../../assets/img/education/mysql.jpg'

const files = [
    {
        id:"1",
        image: javascript,
        name:"file-js"
    },
    {
        id:"2",
        image: frontend,
        name:"file-forntend"
    },
    {
        id:"3",
        image: poo,
        name:"file-poo"
    },
    {
        id:"4",
        image: react,
        name:"file-react"
    },
    {
        id:"5",
        image: form,
        name:"file-form"
    },
    {
        id:"6",
        image: mysql,
        name:"file-mysql"
    },
] 

export function Education() {
    return(
        <Container>
            <h2>Mi Proceso</h2>
            <hr className="line" />
            <div className="fileContainer">
                <div className="fileRotate">
                    {
                        files.map(f =>{
                            return(
                                <div className="fileItem" key={f.id}>
                                    <img loading='lazy' className='fileImage' src={f.image} alt={f.name} />
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </Container>
    )
}