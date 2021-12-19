
import './App.scss';

function Result({result, setShow}) {

    function hideResult() {
        setShow(false);
    }

  return (
    <>
      <p className="result-text">You can play All Too Well {result} times</p>
      <a className="button" href="https://open.spotify.com/track/5enxwA8aAbwZbf5qCHORXi"  target="_blank" rel="noreferrer">Want to start now?</a>
      <button className="link" onClick={hideResult}>Want to try again?</button>
    </>
  );
}

export default Result;