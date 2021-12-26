import { useState } from 'react';
import './App.scss';

function Switch({enterTime, changeMode}) {

  return (
    <div className="switch">
        <button className={'switcher-left' + (enterTime === true ? ' active' : '')} onClick={changeMode} >Enter a time</button>
        <button className={'switcher-right' + (enterTime === true ? ' ' : ' active')} onClick={changeMode}>Enter a date</button>
    </div>
  );
}

export default Switch;