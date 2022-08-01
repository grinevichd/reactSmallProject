import React, {SelectHTMLAttributes, DetailedHTMLProps, ChangeEvent} from 'react'
import style from "./select.module.css"

type DefaultSelectPropsType = DetailedHTMLProps<SelectHTMLAttributes<HTMLSelectElement>, HTMLSelectElement>

type SuperSelectPropsType = DefaultSelectPropsType & {
    options?: any[]
    onChangeOption?: (option: any) => void
}

const SuperSelect: React.FC<SuperSelectPropsType> = (
    {
        options,
        onChange, onChangeOption,
        ...restProps
    }
) => {
    const mappedOptions: any[] = options? options.map((el,i)=>{
      return  <option className={style.option} key={i}>{el}</option>
    }) : []; // map options with key

    const onChangeCallback = (event: ChangeEvent<HTMLSelectElement>) => {
        onChange && onChange(event)
        let target = options?.find(e=>e === event.currentTarget.value)
        onChangeOption && onChangeOption(target)
    }

    return (
        <select className={style.select} onChange={onChangeCallback} {...restProps}>
            {mappedOptions}
        </select>
    )
}

export default SuperSelect
