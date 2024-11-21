import React, {useEffect, useState} from "react";

export default {
    title: 'useEffect demo'
}

export const SimpleExample = () => {

    const [counter, setCounter] = useState(1)
    const [fake, setFake] = useState(1)

    console.log('SimpleExample')

    useEffect(() => {
        console.log('useEffect every render')
        document.title = counter.toString()
    })

    useEffect(() => {
        console.log('useEffect only first render (componentDidMount)')
        document.title = counter.toString()
    }, [])

    useEffect(() => {
        console.log('useEffect first render and every counter change')
        document.title = counter.toString()
    }, [counter])

    return <>
        Hello, {counter}, fake{fake}
        <button onClick={() => setCounter(counter + 1)}>counter +</button>
        <button onClick={() => setFake(fake + 1)}>fake +</button>
    </>
}
export const SetTimeoutExample = () => {

    const [counter, setCounter] = useState(1)
    const [fake, setFake] = useState(1)

    console.log('SetTimeoutExample')

    useEffect(() => {
        const timeoutId = setTimeout(() => {
            console.log('setTimeout')
            document.title = counter.toString()
        }, 1000)

        return () => {
            clearTimeout(timeoutId)
        }
    }, [counter])

    return <>
        Hello, {counter}, fake{fake}
        <button onClick={() => setCounter(counter + 1)}>counter +</button>
        <button onClick={() => setFake(fake + 1)}>fake +</button>
    </>
}
export const SetIntervalExample = () => {

    const [counter, setCounter] = useState(1)
    const [fake, setFake] = useState(1)

    console.log('SetIntervalExample')

    useEffect(() => {
        const intervalID = setInterval(() => {
            console.log('tick ' + counter)
            setCounter(state => state + 1)
        }, 1000)

        return () => {
            clearInterval(intervalID)
        }
    }, [])

    return <>
        Hello, {counter}, fake{fake}
    </>
}

export const ResetEffectExample = () => {

    const [counter, setCounter] = useState(1)

    console.log('Component rendered')

    useEffect(() => {
        console.log('Effect done')
    }, [])

    return <>
        Hello, {counter} <button onClick={() => setCounter(counter + 1)}>+</button>
    </>
}

export const KeysTrackerExample = () => {

    const [text, setText] = useState('')

    console.log('Component rendered ' + text)

    useEffect(() => {
        const handler = (e: KeyboardEvent) => {
            //setText((state) => state + e.key)
            setText(text + e.key)
        }

        window.addEventListener('keypress', handler)

        return () => {
            window.removeEventListener('keypress', handler)
        }
    }, [text])

    return <>
        Typed text: {text}
    </>
}