import React, {useEffect, useState} from 'react';
import './App.css';
import {ScreenSettings} from "./components/screen/ScreenSettings";
import {ScreenCounter} from "./components/screen/ScreenCounter";

function App() {

    const [counter, setCounter] = useState<number>(0)
    const [maxValueG, setMaxValueG] = useState<number>(0)
    const [startValueG, setStartValueG] = useState<number>(0)
    const [setMode, setSetMode] = useState<boolean>(false)

    useEffect(() => {
        let valueMaxAsString = localStorage.getItem('maxValue')
        let valueStartAsString = localStorage.getItem('startValue')

        if (valueMaxAsString) {
            setMaxValueG(JSON.parse(valueMaxAsString))
        }

        if (valueStartAsString) {
            setStartValueG(JSON.parse(valueStartAsString))
        }
    }, [])

    useEffect(() => {
        localStorage.setItem('maxValue', JSON.stringify(maxValueG))
    }, [maxValueG]);
    useEffect(() => {
        localStorage.setItem('startValue', JSON.stringify(startValueG))
    }, [startValueG]);

    const setValueToState = (startValue: number, maxValue: number) => {
        setMaxValueG(maxValue)
        setStartValueG(startValue)
        setCounter(startValue)
        setModeStatus(false)
    }

    const incCount = () => {
        if (counter < maxValueG) {
            setCounter(counter + 1)
        }

    }

    const resCount = () => {
        setCounter(startValueG)
    }

    function setModeStatus(value: boolean) {
        setSetMode(value)
    }

    return (
    <div className="App">
      <ScreenSettings callbackSet={setValueToState} startValue={startValueG} maxValue={maxValueG} setMode={setMode} setModeCallback={setModeStatus}/>
      <ScreenCounter value={counter} callbackInc={incCount} callbackRes={resCount} setMode={setMode}/>
    </div>
  );
}

export default App;
