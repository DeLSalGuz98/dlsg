import './card.css'
export const Card = ({image, project, github})=>{
    return(
        <div className="cardContainer">
            <img className="cardImage" src={`/public/img/projects/${image}`} alt={project} />
            <div className="cardDescription">
                <span className='cardTitle'>{project}</span>
                <a className="cardBtn" target={'_blank'} href={github}>Ver Github</a>
            </div>
        </div>
    )
}