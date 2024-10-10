import React, {useState} from 'react';
import styles from './Select.module.css'

type ItemType = {
    title: string
    value: any
}

type SelectPropsType = {
    value?: any
    onClick: (value: any) => void
    items: ItemType[]
}

export const Select = (props: SelectPropsType) => {

    const [display, setDisplay] = useState(false)
    const [hoveredElement, setHoveredElement] = useState(props.value)

    const currentItem = props.items.find(el => el.value === props.value)

    const onItemClick = (value: any) => {
        props.onClick(value)
        setDisplay(!display)
    }

    return (
        <div className={styles.select}>
            <div className={styles.main} onClick={() => {
                setDisplay(!display)
            }}>{currentItem?.title}</div>

            {display && <div className={styles.items}>
                {props.items.map(el => <div key={el.value}
                                            className={hoveredElement === el.value ? styles.itemSelected : ''}
                                            onMouseEnter={() => setHoveredElement(el.value)}
                                            onClick={() => onItemClick(el.value)}>
                    {el.title}
                </div>)
                }
            </div>}
        </div>
    );
};