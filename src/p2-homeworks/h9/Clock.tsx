import React, {useState} from 'react'
import SuperButton from '../h4/common/c2-SuperButton/SuperButton'

function Clock() {
    const [timerId, setTimerId] = useState<number>(0)
    const [date, setDate] = useState<Date>(new Date())
    const [show, setShow] = useState<boolean>(false)


    const stop = () => {
        clearInterval(timerId)
    }
    const start = () => {
        stop()
        const id: number = window.setInterval(() => {
            const date = new Date()
            date.getSeconds()
            setDate(date)

        }, 1000)
        setTimerId(id)
    }

    const onMouseEnter = () => {
        setShow(true)
    }
    const onMouseLeave = () => {
        setShow(false)
    }

    const test = date.getSeconds()
    console.log(typeof test)

    const setZero = (value:number) => {
        return value < 10 ?  value.toString().padStart(2, "0") : value
    }


    const stringTime = `${setZero(date.getHours())}:${setZero(date.getMinutes())}:${setZero(date.getSeconds())}`
    const stringDate = `${setZero(date.getDate())} ${setZero(date.getMonth())} ${date.getFullYear() }` // fix with date

    return (
        <div>
            <div
                onMouseEnter={onMouseEnter}
                onMouseLeave={onMouseLeave}
            >
                {stringTime}
            </div>

            {show ? (
                <div>
                    {stringDate}
                </div>
            ):
                <br/>
            }

            <SuperButton onClick={start}>start</SuperButton>
            <SuperButton onClick={stop}>stop</SuperButton>

        </div>
    )
}

export default Clock
