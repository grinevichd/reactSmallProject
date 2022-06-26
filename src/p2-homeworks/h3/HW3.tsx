import React, {useState} from 'react'
import GreetingContainer from './GreetingContainer'
import {v1} from "uuid";
import s from "./Greeting.module.css"

// types
export type UserType = {
    _id: string // need to fix any
    name: string // need to fix any
}


// уровень работы с глобальными данными
export function HW3() {
    const [users, setUsers] = useState<UserType[]>([]) // need to fix any

    const addUserCallback = (name: string) => { // need to fix any
        let messageName = {_id: v1(), name: name}
        setUsers([...users, messageName]) // need to fix


    }

    return (
        <div className={s.wrapper}>
            <hr/>
            homeworks 3

            {/*should work (должно работать)*/}
            <GreetingContainer users={users} addUserCallback={addUserCallback}/>

            <hr/>
            {/*для личного творчества, могу проверить*/}
            {/*<AlternativeGreeting/>*/}
            <hr/>
        </div>
    )
}

export default HW3
