
import { useContext } from 'react';
import { LangContext } from './App';
import './App.scss';

function Result({ setShow, allTooWells, error }) {

    function hideResult() {
        setShow(false);
    }

    const contextValue = useContext(LangContext);

    return (
        <>
            {error
                ?
                <>
                    <p className="result-text">{contextValue.dictionary.error}</p>
                    <button className="button-link" onClick={hideResult}>{contextValue.dictionary.replay}</button>
                </>
                :
                <>
                    <p className="result-text">{contextValue.dictionary.result1} <span className="result">{allTooWells}</span>{contextValue.dictionary.result2}</p>
                    <div className="song-link">
                        <a className="button" href="https://open.spotify.com/track/5enxwA8aAbwZbf5qCHORXi" target="_blank" rel="noreferrer">{contextValue.dictionary.start}</a>
                    </div>
                    <button className="button-link" onClick={hideResult}>{contextValue.dictionary.replay}</button>
                </>
            }
        </>
    );
}

export default Result;