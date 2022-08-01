import React from 'react'
import SuperButton from '../h4/common/c2-SuperButton/SuperButton'
import {useDispatch, useSelector} from "react-redux";
import {AppStoreType} from "./bll/store";
import {loadingAC} from "./bll/loadingReducer";
import img from "./Infinity-1s-191px.svg"

function HW10() {
    // useSelector, useDispatch

    console.log(1)

    const loader = useSelector<AppStoreType,boolean>(state=>state.loading.loader)
    const dispatch = useDispatch()
    debugger
    const loading = loader

    const setLoading = () => {
        dispatch(loadingAC(true))
        setTimeout(()=>dispatch(loadingAC(false)),1500)
        console.log('loading...')
    };

    return (
        <div>
            <hr/>
            homeworks 10

            {/*should work (должно работать)*/}
            {loading
                ? (
                    <div><img style={{width:"100px",height:"97px"}} src={img} alt=""/></div>
                ) : (
                    <div style={{height: "100px"}}>
                        <SuperButton onClick={setLoading}>set loading...</SuperButton>
                    </div>
                )
            }

            <hr/>
            {/*для личного творчества, могу проверить*/}
            {/*<Alternative/>*/}
            <hr/>
        </div>
    )
}

export default HW10
