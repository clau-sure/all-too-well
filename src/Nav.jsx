import { useContext } from 'react';
import { LangContext } from './App';
import './App.scss';

function Nav() {

  const contextValue = useContext(LangContext);

  return (
    <div className="nav">
      <h1>{contextValue.dictionary.title}</h1>
    </div>
  );
}

export default Nav;