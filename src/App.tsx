import React, {useEffect, useState} from 'react';
import './App.css';
import {ScreenSettings} from "./components/screen/ScreenSettings";
import {ScreenCounter} from "./components/screen/ScreenCounter";

function App() {

    const [counter, setCounter] = useState<number>(0)
    const [maxValueGlob, setMaxValueGlob] = useState<number>(0)
    const [startValueGlob, setStartValueGglob] = useState<number>(0)
    const [setMode, setSetMode] = useState<boolean>(false)

    useEffect(() => {
        let valueMaxAsString = localStorage.getItem('maxValue')
        let valueStartAsString = localStorage.getItem('startValue')

        if (valueMaxAsString) {
            setMaxValueGlob(JSON.parse(valueMaxAsString))
        }

        if (valueStartAsString) {
            setStartValueGglob(JSON.parse(valueStartAsString))
        }
    }, [])

    useEffect(() => {
        localStorage.setItem('maxValue', JSON.stringify(maxValueGlob))
    }, [maxValueGlob]);
    useEffect(() => {
        localStorage.setItem('startValue', JSON.stringify(startValueGlob))
    }, [startValueGlob]);

    const setValueToState = (startValue: number, maxValue: number) => {
        setMaxValueGlob(maxValue)
        setStartValueGglob(startValue)
        setCounter(startValue)
        setModeStatus(false)
    }

    const incCount = () => {
        if (counter < maxValueGlob) {
            setCounter(counter + 1)
        }

    }

    const resCount = () => {
        setCounter(startValueGlob)
    }

    function setModeStatus(value: boolean) {
        setSetMode(value)
    }

    return (
    <div className="App">
      <ScreenSettings callbackSet={setValueToState} startValue={startValueGlob} maxValue={maxValueGlob} setMode={setMode} setModeCallback={setModeStatus}/>
      <ScreenCounter value={counter} callbackInc={incCount} callbackRes={resCount} setMode={setMode}/>
    </div>
  );
}

export default App;
