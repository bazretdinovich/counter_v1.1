import React, {ChangeEvent} from 'react';
import S from './Input.module.css';

type TypeOfInput = 'text' | 'number'

type Props = {
    title: string
    typeOfInput: TypeOfInput
    value: number
    callback: (value: number) => void
}
export const Input = (props: Props) => {

    function onchangeHandler (e: ChangeEvent<HTMLInputElement>){
        props.callback(JSON.parse(e.currentTarget.value))
    }

    return (
        <>
            <label className={S.label}>{props.title}<input className={S.input} onChange={onchangeHandler} value={props.value} type="number"/></label>
        </>
    );
};

