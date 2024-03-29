import React, {useState} from 'react'
import SuperRange from './common/c7-SuperRange/SuperRange'
import SuperDoubleRange from './common/c8-SuperDoubleRange/SuperDoubleRange'

function HW11() {
    const [value1, setValue1] = useState(0)
    const [value2, setValue2] = useState(100)
    const onChangeRange = (value : any) => {
        setValue1(value[0])
        setValue2(value[1])
    }
    return (
        <div>
            <hr/>
            homeworks 11

            {/*should work (должно работать)*/}
            <div>
                <span style={{width:"20px",display:"inline-block"}}>{value1}</span>
                <SuperRange
                    // сделать так чтоб value1 изменялось
                    onChangeRange = {setValue1}
                    value = {value1}
                />
            </div>

            <div>
                <span style={{width:"20px",display:"inline-block"}}>{value1}</span>
                <SuperDoubleRange
                    value={[value1,value2]}
                    onChangeRange={onChangeRange}
                    min={"0"}
                    max={"100"}
                    // сделать так чтоб value1 и value2 изменялось
                />
                <span >{value2}</span>
            </div>

            <hr/>
            {/*для личного творчества, могу проверить*/}
            {/*<AlternativeSuperRange/>*/}
            {/*<AlternativeSuperDoubleRange/>*/}
            <hr/>
        </div>
    )
}

export default HW11
