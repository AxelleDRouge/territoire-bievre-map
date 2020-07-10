import React from 'react';
import LMap from '../components/map/Map';
import Header from './Header';
import { StoreContextProvider } from '../context/StoreContext';

function App() {
  return (
    <>
      <StoreContextProvider>
        <Header />
        <LMap />
      </StoreContextProvider>
    </>
  );
}

export default App;
