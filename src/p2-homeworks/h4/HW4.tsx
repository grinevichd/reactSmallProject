import React, {ChangeEvent, useState} from 'react'
import SuperInputText from './common/c1-SuperInputText/SuperInputText'
import s from './HW4.module.css'
import SuperButton from './common/c2-SuperButton/SuperButton'
import SuperCheckbox from './common/c3-SuperCheckbox/SuperCheckbox'
import AlternativeSuperInputText from "./common/c1-SuperInputText/AlternativeSuperInputText";
import AlternativeSuperButton from "./common/c2-SuperButton/AlternativeSuperButton";
import {AlternativeSuperCheckbox} from "./common/c3-SuperCheckbox/AlternativeSuperCheckbox";


export function HW4() {
    const [text, setText] = useState<string>('')
    const error = text ? '' : 'error'

    const showAlert = () => {
        debugger

        if (error) {
            alert('введите текст...')
        } else {
            alert(text) // если нет ошибки показать текст

        }


    }

    const [checked, setChecked] = useState<boolean>(false)
    const testOnChange = (e: ChangeEvent<HTMLInputElement>) => setChecked(e.currentTarget.checked)

    return (
        <div>
            <hr/>
            homeworks 4

            <div className={s.column}>
                <SuperInputText
                    value={text}
                    onChangeText={setText}
                    // onEnter={showAlert}
                    error={error}
                    // onChange={(e)=>setText(e.currentTarget.value)}
                    spanClassName={s.testSpanError}


                />


                <SuperInputText
                    className={`${s.blue} ${s.red}`} // проверьте, рабоет ли смешивание классов
                    onChange={(e) => setText(e.currentTarget.value)}

                    // onEnter={showAlert}


                />


                ----------------------------------------------------

                <SuperButton>
                    default
                </SuperButton>

                <SuperButton
                    red // пропсу с булевым значением не обязательно указывать true
                    onClick={showAlert}


                >
                    delete {/*// название кнопки попадёт в children*/}

                </SuperButton>

                <SuperButton disabled>
                    disabled
                </SuperButton>

                {/*----------------------------------------------------*/}

                <SuperCheckbox
                    checked={checked}
                    onChangeChecked={setChecked}
                >
                    Кнопочка {/*// этот текст попадёт в children*/}
                </SuperCheckbox>

                {/*// onChange тоже должен работать*/}
                <SuperCheckbox checked={checked} onChange={(e) => testOnChange(e)} className={s.chexbox}/>
            </div>

            <hr/>
            <AlternativeSuperInputText
                className={s.borders}
                // onChangeText = {setText}
                onChange={(e) => setText(e.currentTarget.value)}
                onKeyPr={showAlert}
                error={error}
                errorClassName={s.errorClassName}

            />

            <AlternativeSuperButton da onClick={() => showAlert()}
                                    className={s.buttonAlter}>d </AlternativeSuperButton>
            <AlternativeSuperCheckbox callbackClick={setChecked} checked={checked} />
            {/*для личного творчества, могу проверить*/}
            {/*<AlternativeSuperInputText/>*/}
            {/*<AlternativeSuperButton/>*/}
            {/*<AlternativeSuperCheckbox/>*/}
            <hr/>
        </div>
    )
}

export default HW4
