import { useState } from 'react';
import './App.scss';
import Result from './Result';

function InputCard() {

  const [result, setResult] = useState('97');
  const [show, setShow] = useState(false)

  function showResult () {
    setShow(true);
  }

  return (
    <div className="container">
      <div className="inputs">
        <input className="input" type="text" placeholder="Days"/>
        <input className="input" type="text" placeholder="Hours"/>
        <input className="input" type="text" placeholder="Minutes"/>
      </div>
      <button className="button" onClick={showResult}>Calculate</button>
      <div className={(show === true ? '' : 'hidden')}>
        <Result result={result} setShow={setShow} />
      </div>
    </div>
  );
}

export default InputCard;