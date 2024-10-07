import type { Meta, StoryObj } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { Accordion } from './Accordion';
import React, {useState} from "react";

const meta: Meta<typeof Accordion> = {
    component: Accordion,
};

export default meta;
type Story = StoryObj<typeof Accordion>;

export const FirstStory: Story = {
    args: {
        titleValue: 'hello',
        collapsed: false,
        onChange: () => {},
        items: [{title: 'Varya', value: 1}, {title: 'Alina', value: 2}, {title: 'Vika', value: 3}, {title: 'Vita', value: 4}],
        onClick: (value: any) => {}
    },
};

const onChangeHandler = action('onChange')

export const CollapsedAccordion = () => {
    return <Accordion titleValue={'Collapsed Accordion'} collapsed={true} onChange={onChangeHandler} items={[]} onClick={action('some item was clicked')}/>
};

export const OpenedAccordion = () => {
    return <Accordion titleValue={'Opened Accordion'} collapsed={false} onChange={() => {}} items={[{title: 'Varya', value: 1}, {title: 'Alina', value: 2}, {title: 'Vika', value: 3}, {title: 'Vita', value: 4}]} onClick={action('some item was clicked')}/>
};

export const AccordionDemo = () => {
    const [collapsed, setCollapsed] = useState(false)
    return <Accordion titleValue={'AccordionDemo'} collapsed={collapsed} onChange={() => {setCollapsed(!collapsed)}} items={[{title: 'Varya', value: 1}, {title: 'Alina', value: 2}, {title: 'Vika', value: 3}, {title: 'Vita', value: 4}]} onClick={(value) => alert(`user with value ${value} will be happy`)}/>
};