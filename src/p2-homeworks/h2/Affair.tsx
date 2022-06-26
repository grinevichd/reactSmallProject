import React from 'react'
import {AffairType} from './HW2'
import style from "./Affairs.module.css"

type AffairPropsType = {
    // key не нужно типизировать
    affair: AffairType // need to fix any
    deleteAffairCallback: (id: number) => void // need to fix any
}

function Affair(props: AffairPropsType) {

    const deleteCallback = () => props.deleteAffairCallback(props.affair._id)

    return (
        <div className={style.column}>
            <span>{props.affair._id}</span>
            <span>{props.affair.name}</span>
            <span>{props.affair.priority}</span>
            <button className={style.deleteButton} onClick={deleteCallback}>X</button>
        </div>
    )
}

export default Affair

