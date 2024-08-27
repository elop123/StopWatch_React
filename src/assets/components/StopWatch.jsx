import { useEffect, useState } from 'react';
import style from '../style/StopWatch.module.scss'

function StopWatch() {
    const [time, setTime] = useState(0);
    const [isActive, setIsActive] = useState(false);
    const [isPaused, setIsPaused] = useState(true);

    useEffect(() => {
        let interval = null;

        if (isActive === true && isPaused === false) {
            interval = setInterval(() => {
                setTime((time) => time + 1);
            }, 100);
        } else {
            clearInterval(interval);
        }
        return () => {
            clearInterval(interval);
        };
    }, [isActive, isPaused]);

    const handleStart = () => {
        setIsActive(true);
        setIsPaused(false);
    };

    const handlePause = () => {
        setIsPaused(!isPaused);
    };

    const handleReset = () => {
        setIsActive(false);
        setIsPaused(true);
        setTime(0);
    };

    return (
        <div className={style.stop_watch}>
            <div>
                StopWatch: {time}
            </div>
            <div className={style.buttonContainer}>
            <button onClick={handleStart}>Start</button>
            <button onClick={handlePause}>Stop</button>
            <button onClick={handleReset}>Reset</button>
            </div>
            
        </div>
    );
}

export default StopWatch;
