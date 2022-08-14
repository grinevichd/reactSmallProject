import React from "react";
import s from "./HW12.module.css";
import SuperSelect from "../h7/common/c5-SuperSelect/SuperSelect";
import {useDispatch, useSelector} from "react-redux";
import {AppStoreType} from "../h10/bll/store";
import {changeThemeC} from "./bll/themeReducer";

const themes = ['dark', 'red', 'some'];

function HW12() {
    // const theme = 'some'; // useSelector
    const theme = useSelector<AppStoreType,string>(state => state.themes.color)
    console.log(theme)
    const dispatch = useDispatch()
    // useDispatch, onChangeCallback
    const onChangeCallback = (value : string)=>{
        dispatch(changeThemeC(value))
    }
    return (
        <div className={s[theme]}>
            <hr/>
            <span className={s[theme + '-text']}>
                homeworks 12
            </span>
            <SuperSelect
                options={themes}
                onChangeOption={onChangeCallback}
                value = {theme}
            />
            {/*should work (должно работать)*/}
            {/*SuperSelect or SuperRadio*/}

            <hr/>
        </div>
    );
}

export default HW12;
