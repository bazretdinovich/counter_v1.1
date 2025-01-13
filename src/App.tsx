import React, {useEffect, useState} from 'react';
import './App.css';
import {ScreenSettings} from "./components/screen/ScreenSettings";
import {ScreenCounter} from "./components/screen/ScreenCounter";

function App() {

    const [error, setError] = useState<boolean>(false)
    const [counterMaxValue, setCounterMaxValue] = useState<boolean>(false)

    const [counter, setCounter] = useState<number>(() => {
        let valueStartAsString = localStorage.getItem('startValue')
        return valueStartAsString ? JSON.parse(valueStartAsString) : 0
    })

    const [setMode, setSetMode] = useState<boolean>(false)

    const [maxValueGlob, setMaxValueGlob] = useState<number>(() => {
        let valueMaxAsString = localStorage.getItem('maxValue')
        return valueMaxAsString ? JSON.parse(valueMaxAsString) : 0
    })

    const [startValueGlob, setStartValueGglob] = useState<number>(() => {
        let valueStartAsString = localStorage.getItem('startValue')
        return valueStartAsString ? JSON.parse(valueStartAsString) : 0
    })

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
        setCounterMaxValue(false)
    }

    const setCounterMax = () => {
        if (counter >= maxValueGlob) {
            setCounterMaxValue(true)
        }
    }

    const incCount = () => {
        if (counter < maxValueGlob) {
            setCounter(counter + 1)
        }
        if (counter + 1 >= maxValueGlob) {
            setCounterMaxValue(true)
        }
    }

    const resCount = () => {
        setCounter(startValueGlob)
        setCounterMaxValue(false)
    }

    function setModeStatus(value: boolean) {
        setSetMode(value)
    }

    return (
    <div className="App">
      <ScreenSettings callbackSet={setValueToState}
                      startValue={startValueGlob}
                      maxValue={maxValueGlob}
                      setMode={setMode}
                      setModeCallback={setModeStatus}
                      setErrorCallback={setError}
                      errorMode={error}
      />
      <ScreenCounter maxValue={maxValueGlob}
                     value={counter}
                     callbackInc={incCount}
                     callbackRes={resCount}
                     setMode={setMode}
                     errorMode={error}
                     counterMaxValue={counterMaxValue}
      />
    </div>
  );
}

export default App;
