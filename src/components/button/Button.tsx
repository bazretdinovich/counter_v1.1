import React from 'react';
import S from './Button.module.css'

type Props = {
    title: string
    callback: () => void
    setMode: boolean
    errorMode: boolean
    counterMaxValue?: boolean
}
export const Button = ({title, callback, setMode, errorMode, counterMaxValue}: Props) => {
    return (
        <div>
            <button className={S.button} disabled={!setMode || errorMode || counterMaxValue} onClick={callback}>{title}</button>
        </div>
    );
};

