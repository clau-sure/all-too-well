import './App.scss';
import Footer from './Footer';
import InputCard from './InputCard';
import Nav from './Nav';

function App() {
  return (
    <>
      <Nav />
      <div className="content">
      <InputCard />
      </div>
      <Footer />
    </>
  );
}

export default App;
