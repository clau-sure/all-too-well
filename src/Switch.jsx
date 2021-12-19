import { useState } from 'react';
import './App.scss';

function Switch() {
    const [time, setTime] = useState(true)

    function changeMode () {
        setTime(time => !time);
    }

  return (
    <div className="switch">
        <button className={'switcher-left' + (time === true ? ' active' : '')} onClick={changeMode} >Enter a time</button>
        <button className={'switcher-right' + (time === true ? ' ' : ' active')} onClick={changeMode}>Enter a date</button>
    </div>
  );
}

export default Switch;