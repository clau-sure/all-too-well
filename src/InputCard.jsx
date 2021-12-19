import { useState } from 'react';
import './App.scss';
import Result from './Result';
import Switch from './Switch';

function InputCard() {

  const [allTooWells, setAllTooWells] = useState(0);
  const [show, setShow] = useState(false);
  const [request, setRequest] = useState({days: 0, hours: 0, minutes: 0});
  const [error, setError] = useState(true);

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

  return (
    <div className={'container' + (show === true ? ' expanded' : ' folded')}>
      <Switch />
      <div className="inputs">
        <input className="input" type="number" placeholder="Days" name="days" onChange={setFormData} />
        <input className="input" type="number" placeholder="Hours" name="hours" onChange={setFormData}/>
        <input className="input" type="number" placeholder="Minutes" name="minutes" onChange={setFormData}/>
      </div>
      <input type="submit" value="Calculate" className="button" onClick={convertInAllTooWell} />
      <div className={(show === true ? '' : 'hidden')}>
        <Result setShow={setShow} allTooWells={allTooWells} error={error} />
      </div>
    </div>
  );
}

export default InputCard;