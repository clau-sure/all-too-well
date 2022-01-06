import { useContext } from 'react';
import { LangContext } from './App';
import './App.scss';

function Nav({setLang}) {

  const contextValue = useContext(LangContext);

  function changeLang(event) {
    setLang(event.target.value)
  }

  return (
    <div className="nav">
      <h1>{contextValue.dictionary.title}</h1>
      <select className="lang" onChange={changeLang} >
        <option value="es">Español</option>
        <option value="en">English</option>
      </select>
    </div>
  );
}

export default Nav;