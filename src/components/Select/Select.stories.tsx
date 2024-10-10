import React, {useState} from 'react';
import {Select} from "./Select";
import {action} from "@storybook/addon-actions";

export default {
    title: 'Select',
    component: Select
}

export const SelectWithValue = () => {
    const [selectValue, setSelectValue] = useState('1')

    return <Select value={selectValue}
                   items={[{title: 'Москва', value: '1'}, {title: 'Ярославль', value: '2'}, {title: 'Ростов', value: '3'}]}
                   onClick={setSelectValue}/>
}

export const SelectWithoutValue = () => {

    const [selectValue, setSelectValue] = useState(null)

    return <Select value={selectValue}
                   items={[{title: 'Москва', value: '1'}, {title: 'Ярославль', value: '2'}, {title: 'Ростов', value: '3'}]}
                   onClick={setSelectValue}/>
}