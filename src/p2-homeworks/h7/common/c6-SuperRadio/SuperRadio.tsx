import React, {ChangeEvent, InputHTMLAttributes, DetailedHTMLProps} from 'react'
import style from "./radio.module.css"


type DefaultRadioPropsType = DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>

type SuperRadioPropsType = DefaultRadioPropsType & {
    options?: any[]
    onChangeOption?: (option: any) => void
}

const SuperRadio: React.FC<SuperRadioPropsType> = (
    {
        type, name,
        options, value,
        onChange, onChangeOption,
        ...restProps
    }
) => {
    const onChangeCallback = (event: ChangeEvent<HTMLInputElement>) => {
        // onChange, onChangeOption
        onChange && onChange(event)
        let target = options?.find(e => e === event.currentTarget.value)

        onChangeOption && onChangeOption(target)
    }


    const mappedOptions: any[] = options ? options.map((o, i) => ( // map options with key
        <label key={name + '-' + i}>
            <input
                className={style.radio}
                type={'radio'}
                onChange={onChangeCallback}
                value={options[i]}
                name={name}
                checked={options[i] === value}
                // name, checked, value, onChange
            />
            {o}
        </label>
    )) : []

    return (
        <>
            {mappedOptions}
        </>
    )
}

export default SuperRadio
