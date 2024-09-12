import React from 'react';

type OnOffPropsType = {
    on: boolean
}

export const OnOff = (props: OnOffPropsType) => {

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
            <div style={onStyle}>on</div>
            <div style={offStyle}>off</div>
            <div style={indicatorStyle}></div>
        </div>
    );
};