import { createContext, useState } from 'react';
import './App.scss';
import es from './Lang/es.json';
import en from './Lang/en.json';
import Footer from './Footer';
import InputCard from './InputCard';
import Nav from './Nav';

export const LangContext = createContext({ userLang: 'es', dictionary: es})

function App() {

  const [lang, setLang] = useState('es')

  return (
    <>
    <LangContext.Provider value={{ userLang: lang, dictionary: lang === 'es' ? es : en }}>
      <Nav />
      <div className="content">
        <InputCard />
      </div>
      <Footer />
    </LangContext.Provider>
    </>
  );
}

export default App;
