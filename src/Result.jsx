
import './App.scss';

function Result({ setShow, allTooWells, error }) {

    function hideResult() {
        setShow(false);
    }

    return (
        <>
            {error
                ?
                <>
                    <p className="result-text">You have to add some times :( </p>
                    <button className="button-link" onClick={hideResult}>Calculate again</button>
                </>
                :
                <>
                    <p className="result-text">You can play All Too Well <span className="result">{allTooWells}</span> times</p>
                    <div className="song-link">
                        <a className="button" href="https://open.spotify.com/track/5enxwA8aAbwZbf5qCHORXi" target="_blank" rel="noreferrer">Want to start now?</a>
                    </div>
                    <button className="button-link" onClick={hideResult}>Calculate again</button>
                </>
            }
        </>
    );
}

export default Result;