import './nav.css'
export function Nav(){
    return(
        <nav>
            <ul className="navContainer">
                <li><a className="navItem" href="#"><ion-icon name="home-outline"></ion-icon></a></li>
                <li><a className="navItem" href="#"><ion-icon name="shapes-outline"></ion-icon></a></li>
                <li><a className="navItem" href="#"><ion-icon name="flask-outline"></ion-icon></a></li>
                <li><a className="navItem" href="#"><ion-icon name="school-outline"></ion-icon></a></li>
                <li><a className="navItem" href="#"><ion-icon name="at-outline"></ion-icon></a></li>
            </ul>
        </nav>
    )
}