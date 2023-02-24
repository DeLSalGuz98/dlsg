import { Nav } from '../../components/nav/nav'
import { Container } from '../../components/containerApp/container'
import { Link } from 'react-router-dom'
export function ErrorPage(params) {
    return(
        <div className="App">
            <section className="container">
                <Container>
                    <h3>Error 404: Not Found</h3>
                    <hr className="line" />
                    <Link className='bigBtn' to={"/"}>Regresar</Link>
                </Container>
            </section>
        </div>
    )
}