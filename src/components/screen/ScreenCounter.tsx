import styles from './Screen.module.css';
import {Display} from "../display/Display";
import {Wrapper} from "../wrapper/Wrapper";
import {Button} from "../button/Button";

type Props = {
    value: number
    callbackInc: () => void
    callbackRes: () => void
    setMode: boolean
}
export const ScreenCounter = (props: Props) => {

       return (
        <div className={styles.screen}>
                    <Wrapper classStyle={'wrapperDisplayCounter'}>
                        <Display value={props.value} settingsMode={props.setMode}/>
                    </Wrapper>
                    <Wrapper classStyle={'wrapperButtonCounter'}>
                        <Button title={'inc'} callback={props.callbackInc} setMode={!props.setMode}/>
                        <Button title={'reset'} callback={props.callbackRes} setMode={!props.setMode}/>
                    </Wrapper>
        </div>
    );
};

