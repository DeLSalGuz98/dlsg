import './App.css'
import { Nav } from './components/nav/nav'

//import { Container } from './components/containerApp/container'
// import { Home } from './pages/home/home'
// import { Habilities } from './pages/habilities/habilities'
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
