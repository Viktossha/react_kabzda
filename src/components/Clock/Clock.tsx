import React, {useEffect, useState} from 'react';

type PropsType = {
    mode: 'analog' | 'digital'
}

const get2digitsString = (num: number) => num < 10 ? `0${num}` : num

export const Clock = (props: PropsType) => {

    const [date, setDate] = useState(new Date())

    console.log('Clock')

    useEffect(() => {
        const intervalID = setInterval(() => {
            console.log('tick')
            setDate(new Date())
        }, 1000)

        return () => {
            clearInterval(intervalID)
        }
    }, []);

    return <>
        {props.mode === "digital"
            ? `${get2digitsString(date.getHours())}:${get2digitsString(date.getMinutes())}:${get2digitsString(date.getSeconds())}`
            : ''
        }
    </>
};