import React from 'react';
import { Header } from './components/Header';
import { Shop } from './components/Shop';
import { Footer } from './components/Footer';

import { ContextProvider } from './context';

function App() {
  return (
    <div className="App">
      <Header />
      <ContextProvider>
        <Shop />
      </ContextProvider>
      <Footer />
    </div>
  );
}

export default App;
