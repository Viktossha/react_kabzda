import React, {useState} from 'react';

type OnOffPropsType = {
    on: boolean
    onChange: (on: boolean) => void
    //on: boolean
}

export const OnOff = (props: OnOffPropsType) => {

    //let [on, setOn] = useState(false)

    const onStyle = {
        border: '1px solid black',
        width: '40px',
        height: '20px',
        backgroundColor: props.on ? 'green' : ''
    }

    const offStyle = {
        border: '1px solid black',
        width: '40px',
        height: '20px',
        backgroundColor: !props.on ? 'red' : ''
    }

    const indicatorStyle = {
        border: '1px solid black',
        width: '10px',
        height: '10px',
        marginLeft: '10px',
        borderRadius: '50%',
        backgroundColor: props.on ? 'green' : 'red'
    }

    return (
        <div style={{display: 'flex', alignItems: 'center', marginTop: '50px'}}>
            <div style={onStyle} onClick={() => props.onChange(true)}>on</div>
            <div style={offStyle} onClick={() => props.onChange(false)}>off</div>
            <div style={indicatorStyle}></div>
        </div>
    );
};