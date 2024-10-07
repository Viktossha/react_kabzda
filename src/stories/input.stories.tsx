import {useRef, useState} from "react";

export default {
    title: 'input',
}

export const UncontrolledInput = () => <input />
export const TrackValueOfUncontrolledInput = () => {
    const [value, setValue] = useState('')
    return <><input onChange={(e) => setValue(e.currentTarget.value)}/> - {value}</>
}

export const GetValueOfUncontrolledInputByButtonPress = () => {
    const [value, setValue] = useState('')
    const inputRef = useRef<HTMLInputElement>(null)

    const save = () => {
        const el = inputRef.current as HTMLInputElement
        setValue(el.value)
    }

    return <><input ref={inputRef}/> <button onClick={save}>save</button> - actual value: {value}</>
}
export const ControlledInputWithFixedValue = () => <input value={'it-incubator'}/>

export const ControlledInput = () => {
    const [parentValue, setParentValue] = useState('')

    return <input value={parentValue} onChange={(e) => setParentValue(e.currentTarget.value)}/>
}

export const ControlledCheckbox = () => {
    const [parentValue, setParentValue] = useState(true)

    return <input type='checkbox' checked={parentValue} onChange={(e) => setParentValue(e.currentTarget.checked)}/>
}

export const ControlledSelect = () => {
    const [parentValue, setParentValue] = useState<string | undefined>(undefined)

    return <select value={parentValue} onChange={(e) => setParentValue(e.currentTarget.value)}>
        <option>none</option>
        <option value="1">Moscow</option>
        <option value="2">Yaroslavl'</option>
        <option value="3">Saint-P</option>
    </select>
}

