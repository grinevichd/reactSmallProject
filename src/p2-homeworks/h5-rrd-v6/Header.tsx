import React from 'react'
import {NavLink} from "react-router-dom";
import s from "./pages/Header.module.css"


let activeStyle = {
    textDecoration: "underline",
};

function Header() {

    return (
        <div className={s.wrapper}>
            <NavLink to="/pre-junior" className={s.component} style={(pa) => {
                return {color: pa.isActive ? "red" : "black"}
            }}>
                pre-junior
            </NavLink>
            <NavLink className={s.component} to="/junior" style={(pa) => {
                return {color: pa.isActive ? "red" : "black"}
            }}>
                junior
            </NavLink>
            <NavLink className={s.component} to="/junior+" style={(pa) => {
                return {color: pa.isActive ? "red" : "black"}
            }}>
                junior+
            </NavLink>
            <span className={s.square}/>
        </div>
    )
}

export default Header
