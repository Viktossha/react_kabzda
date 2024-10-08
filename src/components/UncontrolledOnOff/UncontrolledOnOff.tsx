import React, {useState} from 'react';

type OnOffPropsType = {
    //on: boolean
}

export const UncontrolledOnOff = (props: OnOffPropsType) => {

    let [on, setOn] = useState(false)

    const onStyle = {
        border: '1px solid black',
        width: '40px',
        height: '20px',
        backgroundColor: on ? 'green' : ''
    }

    const offStyle = {
        border: '1px solid black',
        width: '40px',
        height: '20px',
        backgroundColor: !on ? 'red' : ''
    }

    const indicatorStyle = {
        border: '1px solid black',
        width: '10px',
        height: '10px',
        marginLeft: '10px',
        borderRadius: '50%',
        backgroundColor: on ? 'green' : 'red'
    }

    const onClicked = () => {
        setOn(!on)
    }

    const offClicked = () => {
        setOn(!on)
    }

    return (
        <div style={{display: 'flex', alignItems: 'center', marginTop: '50px'}}>
            <div style={onStyle} onClick={onClicked}>on</div>
            <div style={offStyle} onClick={offClicked}>off</div>
            <div style={indicatorStyle}></div>
        </div>
    );
};