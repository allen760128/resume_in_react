import React from 'react';
import {HashRouter,Route,Routes} from 'react-router-dom';
import FirstPage from './firstPage';

const App=(props)=>{
  return(
    <HashRouter>
      <Routes>
        <Route path='/' exact element={<FirstPage/>}></Route>
      </Routes>
    </HashRouter>
  );
}


export default App;
