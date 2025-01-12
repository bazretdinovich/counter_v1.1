import React from 'react';

type TypeOfInput = 'text' | 'number'

type Props = {
    title: string
    typeOfInput: TypeOfInput
}
export const Input = (props: Props) => {
    return (
        <>
            <label>{props.title}<input type="number"/></label>
        </>
    );
};

