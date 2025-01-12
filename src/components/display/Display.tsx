import React from 'react';
import S from './Display.module.css';

type Props = {
    value: string
}

export const Display = (props: Props) => {
    return (
        <div className={S.display}>
            <span>{props.value}</span>
        </div>
    );
};

