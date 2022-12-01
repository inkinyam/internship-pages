import './App.scss';

import React from 'react';
import { Route, Routes} from 'react-router-dom';
import Cursor from '../Cursor/Cursor';
import Main from '../Main/Main';
import NotFound from '../NotFound/NotFound';



function App() {
  return (
    <div className="App">
    <Cursor />
    <Routes>
      <Route path = "*" element  = {<NotFound />} />
      <Route path="/" element={<Main />} />

    </Routes>
    </div>
  );
}

export default App;
