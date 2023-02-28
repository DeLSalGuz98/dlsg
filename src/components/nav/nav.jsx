import { useContext, useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import './nav.css'
import { onProjectContext } from '../../context/onProject';
export function Nav(){
    const {isTrue, setIsTrue} = useContext(onProjectContext);
    let url = location.pathname.split('/')[1];
    const pages = {
        home: "navItem",
        habilities: "navItem",
        projects: "navItem",
        education: "navItem",
        contact: "navItem",
    }
    const [classValue, setClassValue] = useState(pages);
    const [changeLink, setChangeLink] = useState(false);
    useEffect(()=>{
        if(url == ""){
            setClassValue({...classValue, "home":"navItemSelected"})
        }else{
            setClassValue({...classValue, [url]:"navItemSelected"})
        }
        if(isTrue){
            setClassValue(pages);
        }
        setChangeLink(false)
        setIsTrue(false)
    },[changeLink, isTrue]);
    const handlerClick = ()=>{
        setClassValue(pages);
        setChangeLink(true)
    }
    return(
        <nav>
            <ul className="navContainer">
                <li><NavLink className={classValue.home} to={'/'} onClick={handlerClick}><ion-icon className="navIcon" name="home-outline"></ion-icon></NavLink></li>
                <li><NavLink className={classValue.habilities} to={'/habilities'} onClick={handlerClick}><ion-icon className="navIcon" name="shapes-outline"></ion-icon></NavLink></li>
                <li><NavLink className={classValue.projects} to={"/projects"} onClick={handlerClick}><ion-icon className="navIcon" name="flask-outline"></ion-icon></NavLink></li>
                <li><NavLink className={classValue.education} to={"/education"} onClick={handlerClick}><ion-icon className="navIcon" name="school-outline"></ion-icon></NavLink></li>
                <li><NavLink className={classValue.contact} to={"/contact"} onClick={handlerClick}><ion-icon className="navIcon" name="at-outline"></ion-icon></NavLink></li>
            </ul>
        </nav>
    )
}