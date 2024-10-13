import React, {useMemo, useState} from "react";

export default {
    title: 'react use memo'
}

export const Example1 = () => { 
    const [a, setA] = useState<number>(0)
    const [b, setB] = useState<number>(0)

    let resultA = 1
    let resultB = 1

    resultA = useMemo(() => {
        let tempResultA = 1
        for (let i = 1; i <= a; i++) {
            let fake = 0
            while (fake < 100000000) {
                fake++
                const fakeValue = Math.random()
            }
            tempResultA = tempResultA * i
        }

        return tempResultA
    }, [a])

    for (let i = 1; i <= b; i++) {
        resultB = resultB * i
    }

    return <>
        <input value={a} onChange={(e) => setA(Number(e.currentTarget.value))}/>
        <input value={b} onChange={(e) => setB(Number(e.currentTarget.value))}/>
        <hr/>
        <div>
            Result for a: {resultA}
        </div>
        <div>
            Result for b: {resultB}
        </div>
    </>
}

const UsersSecret = (props: {users: string[]}) => {
    console.log('users secret')
    return <div>{
        props.users.map((u, i) => <div key={i}>{u}</div>)
    }</div>
}

const Users = React.memo(UsersSecret)

export const Example2 = () => {
    console.log('example 2')
    const [counter, setCounter] = useState(0)
    const [users, setUsers] = useState(['Vika', 'Alina', 'Misha', 'Anya'])

    const newArr = useMemo(() => {
        return users.filter(u => u.toLowerCase().indexOf('n') > -1)
    }, [users])

    return <>
        <button onClick={() => setCounter(counter+1)}>+</button>
        {counter}
        <Users users={newArr}/>
    </>
}