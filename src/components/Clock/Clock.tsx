import React, {useEffect, useState} from 'react';
import styles from './Clock.module.css'

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

    const secondsStyle = {
        transform: `rotate(${date.getSeconds() * 6}deg)`
    };
    const minutesStyle = {
        transform: `rotate(${date.getMinutes() * 6}deg)`
    };
    const hoursStyle = {
        transform: `rotate(${date.getHours() * 30}deg)`
    };

    return <>
        {props.mode === "digital"
            ? `${get2digitsString(date.getHours())}:${get2digitsString(date.getMinutes())}:${get2digitsString(date.getSeconds())}`
            : <div className={styles.clock}>
                <div className={styles['analog-clock']}>
                    <div className={`${styles.dial} ${styles.seconds}`} style={secondsStyle}/>
                    <div className={`${styles.dial} ${styles.minutes}`} style={minutesStyle}/>
                    <div className={`${styles.dial} ${styles.hours}`} style={hoursStyle}/>
                </div>
            </div>
        }
    </>
};