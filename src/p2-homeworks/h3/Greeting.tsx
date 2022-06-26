import React, {ChangeEvent, KeyboardEvent} from 'react'
import s from './Greeting.module.css'


type GreetingPropsType = {
    name: string // need to fix any
    setNameCallback: (e : ChangeEvent<HTMLInputElement>)=>void // need to fix any
    addUser: ()=> void // need to fix any
    error: string // need to fix any
    totalUsers: number // need to fix any
    keyPressCallback : (e: KeyboardEvent<HTMLInputElement>) => void
}

// презентационная компонента (для верстальщика)
const Greeting: React.FC<GreetingPropsType> = (
    {name, setNameCallback, addUser, error, totalUsers,keyPressCallback} // деструктуризация пропсов
) => {
    console.log(!!error)

    const inputClass = error ? s.error : s.input // need to fix with (?:)

    return (
        <div>
            <input value={name} onChange={setNameCallback} className={inputClass} onKeyPress={keyPressCallback}/>
            <span className={s.someClass}>{error}</span>
            <button onClick={addUser} className={s.button}>add</button>
            <span>{totalUsers}</span>
        </div>
    )
}

export default Greeting
