import React from 'react';
import S from './Display.module.css';

type Props = {
    value: number
    settingsMode: boolean

}

export const Display = (props: Props) => {
    return (
        <div>
            {props.settingsMode
                ? (<span className={S.setMode}>enter values and press 'set'</span>)
                : (<span className={S.counter}>{props.value}</span>)
            }
        </div>
    );
};

