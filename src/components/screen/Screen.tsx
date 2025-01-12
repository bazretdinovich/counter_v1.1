import React from 'react';
import styles from './Screen.module.css';
import {Input} from "../input/Input";
import {Display} from "../display/Display";
import {Wrapper} from "../wrapper/Wrapper";

type typeScreen = 'counter' | 'settings'

type ScreenConfigProps = {
    type: typeScreen
}

export const Screen = (props: ScreenConfigProps) => {
    return (
        <div className={styles.screen}>
            {props.type === 'settings' ? (
                <>
                    <Wrapper direction={'column'}>
                        <Input title='max value: ' typeOfInput={'number'}/>
                        <Input title='start value: ' typeOfInput={'number'}/>
                    </Wrapper>
                    <Wrapper direction={'column'}>
                        <button>set</button>
                    </Wrapper>


                </>
            ) : (
                <>
                    <Display value={'11'}/>
                    <Wrapper direction={'row'}>
                        <button>set</button>
                        <button>set</button>
                    </Wrapper>
                </>
            )}


        </div>
    );
};

