import {useState} from "react";
import {requestApi} from "./requestApi";
import SuperCheckbox from "../h4/common/c3-SuperCheckbox/SuperCheckbox";
import SuperButton from "../h4/common/c2-SuperButton/SuperButton";

export const Request = () => {
    const [checked, setChecked] = useState<boolean>(false)
    const [error, setError] = useState<string | null>(null)
    const [success, setSuccess] = useState<string | null>(null)
    console.log(checked)
    const changeCheckbox = (value: boolean) => {
        setChecked(value)
    }
    const serverRequest = () => {
        requestApi.changeCheckBox({success: checked})
            .then(res => {
                if(res.status === 200){
                    error && setError(null)
                    setSuccess(res.data.errorText)
                }
            })
            .catch(error => {
                success && setSuccess(null)
                setError(error.code)
            })
    }
    const message = error || success
    return (
        <>
            <SuperCheckbox checked={checked} onChangeChecked={changeCheckbox}/>
            <SuperButton onClick={serverRequest}>Request</SuperButton>
            <div> {message} </div>
        </>
    )

}