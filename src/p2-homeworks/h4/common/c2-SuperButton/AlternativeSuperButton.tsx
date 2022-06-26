import React, {ButtonHTMLAttributes, DetailedHTMLProps} from 'react'
import style from "./AlternativeSuperButton.module.css"


type defaultButtonTypes = DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>

type AlternativeSuperButtonType = defaultButtonTypes & {
    da?: boolean
}



export const AlternativeSuperButton : React.FC<AlternativeSuperButtonType> =({da,className,...rest}) => {

    const buttonStyle = da ? className : style.button

    return (
        <button className={buttonStyle} {...rest}/>
    // <button/>
    )
}

export default AlternativeSuperButton
