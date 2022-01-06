import { useContext } from 'react';
import { LangContext } from './App';
import './App.scss';

function Switch({enterTime, changeMode}) {

  const contextValue = useContext(LangContext);

  return (
    <div className="switch">
        <button className={'switcher-left' + (enterTime === true ? ' active' : '')} onClick={changeMode} >{contextValue.dictionary.switch1}</button>
        <button className={'switcher-right' + (enterTime === true ? ' ' : ' active')} onClick={changeMode}>{contextValue.dictionary.switch2}</button>
    </div>
  );
}

export default Switch;