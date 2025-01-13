import React, {useEffect, useRef, useState} from 'react';
import styles from './Screen.module.css';
import {Input} from "../input/Input";
import {Display} from "../display/Display";
import {Wrapper} from "../wrapper/Wrapper";
import {Button} from "../button/Button";

type typeScreen = 'counter' | 'settings'

type ScreenConfigProps = {
    type: typeScreen
}

export const Screen = (props: ScreenConfigProps) => {

    const [counter, setCounter] = useState<number>(0)
    const [maxValue, setMaxValue] = useState<number>(0)
    const [startValue, setStartValue] = useState<number>(0)
    const [settingsModeOff, setSettingsMode] = useState<boolean>(true)

    useEffect(() => {
        let valueMaxAsString = localStorage.getItem('maxValue')
        let valueStartAsString = localStorage.getItem('startValue')

        if (valueMaxAsString) {
            setMaxValue(JSON.parse(valueMaxAsString))
        }

        if (valueStartAsString) {
            setStartValue(JSON.parse(valueStartAsString))
        }
    }, [])

    const setValueInLocalStore = () => {
        localStorage.setItem('maxValue', JSON.stringify(maxValue))
        localStorage.setItem('startValue', JSON.stringify(startValue))
        setSettingsMode(true)
    }

    const setMaxValueToState = (value: number) => {
        setMaxValue(value)
        setSettingsMode(false)
    }

    const setStartValuetoState = (value: number) => {
        setStartValue(value)
        setSettingsMode(false)
    }

    const incCounter = () => {
        setCounter(counter + 1)
    }

    const resetCounter = () => {
        setCounter(startValue)
    }

    return (
        <div className={styles.screen}>
            {props.type === 'settings' ? (
                <>
                    <Wrapper direction={'column'}>
                        <Input callback={setMaxValueToState} title='max value: ' value={maxValue} typeOfInput={'number'}/>
                        <Input callback={setStartValuetoState} title='start value: ' value={startValue}  typeOfInput={'number'}/>
                    </Wrapper>
                    <Wrapper direction={'column'}>
                        <Button title={'set'} callback={setValueInLocalStore} disabled={settingsModeOff}/>
                    </Wrapper>


                </>
            ) : (
                <>
                <Wrapper direction={'row'}>
                        <Display value={counter} settingsModeOff={settingsModeOff}/>
                </Wrapper>
                    <Wrapper direction={'row'}>
                        <Button title={'inc'} callback={incCounter}/>
                        <Button title={'reset'} callback={resetCounter}/>
                    </Wrapper>
                </>
            )}


        </div>
    );
};

