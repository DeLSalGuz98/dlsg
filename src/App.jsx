import './App.css'
import { Nav } from './components/nav/nav'

function App() {

  return (
    <div className="App">
      <Nav/>
      <section className="container">
        <div className='subcontainer'>
          <div>
            <h2 className='title'>Hola, Soy 
              <br />
              Denilson
            </h2>
            <hr className='line'/>
            <p>
              Terminé la Universidad en enero de 2022, estudie Ingenieria de Sistemas e Informatica y entre todas las cosas que aprendí, lo que más me entusiasmó fue el desarrollo de software.
            </p>
            <p>
              Algunos de mis objetivos actuales son mejorar mis habilidades de programación, aprender a gestionar proyectos.
            </p>
            <input className='bigBtn' type="button" value="Mis Proyectos" />
          </div>
          <img className='dlsg' src="/public/img/dlsg.jpg" alt="me" />

        </div>
      </section>
    </div>
  )
}

export default App
