import React, {useMemo, useState} from "react";

export default {
    title: 'useState demo'
}

function generateNumber() {
    console.log('generateNumber')
    return 1515464
}

export const Example1 = () => {

    //const initValue = useMemo(generateNumber, [])

    const [counter, setCounter] = useState(generateNumber)

    const changer = (state: number) => {
        return state + 1
    }

    return <>
        <button onClick={() => setCounter(changer)}>+</button>
        {counter}
    </>
}