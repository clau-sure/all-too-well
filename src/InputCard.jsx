import './App.scss';

function InputCard() {
  return (
    <div className="container">
      <input className="input" type="text" placeholder="Enter your time"/>
      <button className="button">Calculate</button>
    </div>
  );
}

export default InputCard;