import React from 'react';
import styles from "./Wrapper.module.css";

type Props = {
    direction: 'column' | 'row'
    children: React.ReactNode
}

export const Wrapper = ({children, direction}: Props) => {
    return (
        <div className={styles.wrapper} style={{flexDirection: direction}}>
            {children}
        </div>
    );
};

