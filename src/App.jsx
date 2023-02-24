import './App.css'
import { Nav } from './components/nav/nav'
import { Outlet } from 'react-router-dom'
function App() {

  return (
    <div className="App">
      <Nav/>
      <section className="container">
        <Outlet/>
      </section>
    </div>
  )
}

export default App
