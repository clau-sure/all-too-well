import { useContext } from 'react';
import { LangContext } from './App';
import './App.scss';

function Footer() {

  const contextValue = useContext(LangContext);
  return (
    <div className="footer">
      <a className="link" href="https://open.spotify.com/playlist/0UGFY4xQD9tJTAvICvgmxs" target="_blank" rel="noreferrer">{contextValue.dictionary.footer}</a>
    </div>
  );
}

export default Footer;