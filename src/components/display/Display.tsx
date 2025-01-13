import React from 'react';
import S from './Display.module.css';

type Props = {
    value: number
    settingsMode: boolean
    maxValue: number
    error: boolean


}

export const Display = (props: Props) => {

    const title: string = props.error ? 'incorrect value!' : 'enter values and press \'set\''

    return (
        <div>
            {props.settingsMode
                ? (<span className={S.setMode} style={props.error ? { color: 'red'}: {}}>{title}</span>)
                : (<span className={S.counter} style={props.value === props.maxValue ?{ color: 'red'}: {}}>{props.value}</span>)
            }
        </div>
    );
};

