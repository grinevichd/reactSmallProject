import React, {Dispatch, SetStateAction} from 'react'

import {AffairType, FilterType} from './HW2'
import Affair from "./Affair";
import style from "./Affairs.module.css"
type AffairsPropsType = { // need to fix any
    data: AffairType[]
    setFilter: (value : FilterType) => void
    deleteAffairCallback: (id:number)=>void
    filter : FilterType

}

function Affairs(props: AffairsPropsType) {

    const mappedAffairs = props.data.map((a: AffairType,) => (

        <Affair // should work
            key={a._id} // кеи ОБЯЗАТЕЛЬНЫ в 99% - так что лучше их писать всегда при создании компонент в мапе
            affair={a}
            deleteAffairCallback={props.deleteAffairCallback}
        />

    ))

    const setAll = () => {props.setFilter("all")} // need to fix
    const setHigh = () => {props.setFilter("high")}
    const setMiddle = () => {props.setFilter("middle")}
    const setLow = () => {props.setFilter("low")}

    return (
        <div className={style.container}>
            <div className={style.wrapper}>
            {mappedAffairs}
            </div>
            <div className={style.buttonContainer}>
            <button  className={`${style.button} ${props.filter === "all"?style.checkedButton : ""}`} onClick={setAll}>All</button>
            <button  className={`${style.button} ${props.filter === "high"?style.checkedButton : ""}`}  onClick={setHigh}>High</button>
            <button  className={`${style.button} ${props.filter === "middle"?style.checkedButton : ""}`}  onClick={setMiddle}>Middle</button>
            <button  className={`${style.button} ${props.filter === "low"?style.checkedButton : ""}`}  onClick={setLow}>Low</button>

            </div>
        </div>
    )
}

export default Affairs
