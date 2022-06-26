import React, {ChangeEvent, DetailedHTMLProps, KeyboardEvent, InputHTMLAttributes} from 'react'
import styles from "./AlternativeSuperInput.module.css"

type DetailedHTMLPropsType = DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>

type  AlternativeSuperInputTextType = DetailedHTMLPropsType & {
    onChangeText?: (value: string) => void
    onKeyPr?: () => void
    error?: string
    errorClassName?: string
}


const AlternativeSuperInputText: React.FC<AlternativeSuperInputTextType> = (
    {
        onChangeText, onKeyPr,
        onChange, error, errorClassName,className
        , onKeyPress, ...rest
    }) => {

    const inputTextValues = (e: ChangeEvent<HTMLInputElement>) => {
        debugger
        if (onChange) onChange(e)

        onChangeText && onChangeText(e.currentTarget.value)


    }
    const keyPressValue = (e: KeyboardEvent<HTMLInputElement>) => {
        onKeyPress && onKeyPress(e)

        onKeyPr
        && e.key === "Enter"
        && onKeyPr()
        if (onKeyPr) {
            e.key === "Enter" && onKeyPr()
        }

    }

    const inputStyles = error? className : styles.border

    return (
        <>
            <input className={inputStyles}
                onKeyPress={keyPressValue}
                onChange={inputTextValues}
                type={"password"}
                {...rest}
            />
            {error && <div className={errorClassName}>{error}</div>}
        </>
    )
}


export default AlternativeSuperInputText
