import { useContext, useState } from 'react';
import { LangContext } from './App';
import './App.scss';
import Result from './Result';
import Switch from './Switch';

function InputCard() {

  const contextValue = useContext(LangContext);

  const [allTooWells, setAllTooWells] = useState(0);
  const [request, setRequest] = useState({days: 0, hours: 0, minutes: 0});
  const [show, setShow] = useState(false);
  const [error, setError] = useState(true);
  const [enterTime, setEnterTime] = useState(true)

  function setFormData (event) {
    const {name, value} = event.target;
    setRequest(prevRequest => ({
      ...prevRequest,
      [name]: value
    }));
  }

  function convertInAllTooWell () {
    if (request.days === 0 && request.hours === 0 && request.minutes === 0 ) {
      setError(true);
    } else {
      setError(false);
      const minutesInDay = request.days * 1440;
      const minutesInHour = request.hours * 60;
      const totalMinutes = minutesInDay + minutesInHour + parseInt(request.minutes);
      setAllTooWells(totalMinutes / 10); 
    }
    setShow(true);
  } 
  
  function changeMode () {
    console.log(enterTime)
    setEnterTime(enterTime => !enterTime);
}
  return (
    <div className={'container' + (show ? ' expanded' : ' folded')}>
      <Switch enterTime={enterTime} changeMode={changeMode} />
      <h3 className={enterTime ? ' ' : ' hidden'}>{contextValue.dictionary.time_explanation}</h3>
      <h3 className={enterTime ? ' hidden' : ' '}>{contextValue.dictionary.date_explanation}</h3>
      <div className={'inputs' + (enterTime === true ? ' ' : ' hidden')}>
        <input className="input" type="number" placeholder={contextValue.dictionary.days} name="days" onChange={setFormData} />
        <input className="input" type="number" placeholder={contextValue.dictionary.hours} name="hours" onChange={setFormData}/>
        <input className="input" type="number" placeholder={contextValue.dictionary.minutes} name="minutes" onChange={setFormData}/>
      </div>
      <div className={'inputs' + (enterTime ? ' hidden' : ' ')}>
        <input className="input inputDate" type="date" placeholder="Select a date" name="date" onChange={setFormData} />
      </div>
      <input type="submit" value={contextValue.dictionary.calculate} className={'button' + (!enterTime  ? ' inputDate' : ' ')} onClick={convertInAllTooWell} />
      <div className={(show ? '' : 'hidden')}>
        <Result setShow={setShow} allTooWells={allTooWells} error={error} />
      </div>
    </div>
  );
}

export default InputCard;