import './card.css'
export const Card = ({image, project, children})=>{
    return(
        <div className="cardContainer">
            <img className="cardImage" src={`/src/assets/img/projects/${image}`} alt={project} />
            {
                children
            }
            {/* <div className="cardDescription">
                <span className='cardTitle'>{project}</span>
                <a className="cardBtn" target={'_blank'} href={github}>Ver Github</a>
            </div> */}
        </div>
    )
}