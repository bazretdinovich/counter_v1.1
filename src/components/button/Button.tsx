import React from 'react';
import S from './Button.module.css'

type Props = {
    title: string
    callback: () => void
    setMode: boolean
}
export const Button = ({title, callback, setMode}: Props) => {
    return (
        <div>
            <button className={S.button} disabled={!setMode} onClick={callback}>{title}</button>
        </div>
    );
};

