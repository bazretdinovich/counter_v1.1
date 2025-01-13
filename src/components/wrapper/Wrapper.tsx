import React from 'react';
import styles from "./Wrapper.module.css";

type Props = {
    classStyle: string
    children: React.ReactNode
}

export const Wrapper = ({children, classStyle}: Props) => {

    return (
        <div className={classStyle === 'wrapperSettingsInput'
                        ? styles.wrapperSettingsInput
                        : classStyle === 'wrapperSettingsButton'
                        ? styles.wrapperSettingsButton
                        : classStyle === 'wrapperDisplayCounter'
                        ? styles.wrapperDisplayCounter
                        : classStyle === 'wrapperButtonCounter'
                        ? styles.wrapperButtonCounter
                        : ''}>
            {children}
        </div>
    );
};

