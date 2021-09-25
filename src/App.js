import React from 'react';
import CRUDapp from "./components/CRUD_App";
import Header from './components/header';
import Footer from './components/Footer';

const App = () => {
  return (
    <>
    <Header />
    <CRUDapp />
    <Footer />
    </>
  );
}

export default App;
