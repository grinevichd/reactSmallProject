import React, {ChangeEvent} from 'react'


import style from './doubleInput.module.css'


type SuperDoubleRangePropsType = {
    onChangeRange?: (value: [number, number]) => void
    value: [number, number]
    min : string
    max : string
    // min, max, step, disable, ...
}

const SuperDoubleRange: React.FC<SuperDoubleRangePropsType> = (
    {
        onChangeRange, value,
        min,max
        // min, max, step, disable, ...
    }
) => {
    const firstRange = (e: ChangeEvent<HTMLInputElement>) => {

        onChangeRange && onChangeRange([+e.currentTarget.value,value[1]])
    }
    const secondRange = (e: ChangeEvent<HTMLInputElement>) => {
        onChangeRange && onChangeRange([value[0],+e.currentTarget.value])
    }


    // сделать самому, можно подключать библиотеки

    return (
        <>
            <div className={style.slider}>
                <div className={style.progress}></div>
                <div className={style.rangeInput}>
                    <input type="range" className={style.rangeMin} min={min} value={value[0]} onChange={firstRange}/>
                    <input type="range" className={style.rangeMax} max={max} value={value[1]} onChange={secondRange}/>
                </div>
            </div>







        </>
    )
}

export default SuperDoubleRange
