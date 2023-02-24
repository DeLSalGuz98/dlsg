import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './nav.css'
export function Nav(){
    let url = location.pathname.split('/')[1];
    const pages = {
        home: "navItem",
        habilities: "navItem",
        projects: "navItem",
        education: "navItem",
        contact: "navItem",
    }
    const [classValue, setClassValue] = useState(pages);
    const [changeLink, setChangeLink] = useState(false)
    useEffect(()=>{
        if(url == ""){
            setClassValue({...classValue, "home":"navItemSelected"})
        }else{
            setClassValue({...classValue, [url]:"navItemSelected"})
        }
        setChangeLink(false)
    },[changeLink]);
    const handlerClick = ()=>{
        setClassValue(pages);
        setChangeLink(true)
    }
    return(
        <nav>
            <ul className="navContainer">
                <li><Link className={classValue.home} to={'/'} onClick={handlerClick}><ion-icon className="navIcon" name="home-outline"></ion-icon></Link></li>
                <li><Link className={classValue.habilities} to={'/habilities'} onClick={handlerClick}><ion-icon className="navIcon" name="shapes-outline"></ion-icon></Link></li>
                <li><Link className={classValue.projects} to={"/projects"} onClick={handlerClick}><ion-icon className="navIcon" name="flask-outline"></ion-icon></Link></li>
                <li><Link className={classValue.education} to={"/education"} onClick={handlerClick}><ion-icon className="navIcon" name="school-outline"></ion-icon></Link></li>
                <li><Link className={classValue.contact} to={"/contact"} onClick={handlerClick}><ion-icon className="navIcon" name="at-outline"></ion-icon></Link></li>
            </ul>
        </nav>
    )
}