import React, {useEffect, useState} from 'react';
import styles from './Screen.module.css';
import {Input} from "../input/Input";
import {Wrapper} from "../wrapper/Wrapper";
import {Button} from "../button/Button";


type Props = {
    maxValue: number
    startValue: number
    callbackSet: (startValue: number, maxValue: number) => void
    setMode: boolean
    setModeCallback: (value: boolean) => void
}

export const ScreenSettings = (props: Props) => {

    const [maxValue, setMaxValue] = useState<number>(0)
    const [startValue, setStartValue] = useState<number>(0)

    useEffect(() => {
        setMaxValue(props.maxValue)
        setStartValue(props.startValue)
    }, []);

    const selMaximumValue = (value: number) => {
        setMaxValue(value)
        props.setModeCallback(true)
    }

    const selStartVal = (value: number) => {
        setStartValue(value)
        props.setModeCallback(true)
    }

    const setMaxAndStartValueHandler = () => {
        props.callbackSet(startValue, maxValue)
    }

    return (
        <div className={styles.screen}>

                    <Wrapper classStyle={'wrapperSettingsInput'}>
                        <Input callback={selMaximumValue} title='max value: ' value={maxValue} typeOfInput={'number'}/>
                        <Input callback={selStartVal} title='start value: ' value={startValue}  typeOfInput={'number'}/>
                    </Wrapper>
                    <Wrapper classStyle={'wrapperSettingsButton'}>
                        <Button title={'set'} callback={setMaxAndStartValueHandler} setMode={props.setMode}/>
                    </Wrapper>

        </div>
    );
};

