import React, {ChangeEvent, DetailedHTMLProps, InputHTMLAttributes} from 'react'



type defaultType = DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>

type AlternativeSuperCheckboxType = defaultType & {
    callbackClick ?: (checked : boolean) => void

}

export const AlternativeSuperCheckbox: React.FC<AlternativeSuperCheckboxType> = ({callbackClick,...rest}) => {

    const changeInputValue = (e:ChangeEvent<HTMLInputElement>) =>{
        callbackClick && callbackClick(e.currentTarget.checked)
    }

    return (
        <input onChange={changeInputValue}
        type={"checkbox"}
        />
    )
}


