import React from 'react';
import Create from './components/Create';
import Read from './components/Read';
import Update from './components/Update';
import { BrowserRouter,Route,Routes } from 'react-router-dom';

const App = () => {
  return (
    <center>
      <BrowserRouter>

      <Routes>
      
<Route path='/' element={<Create/>}/>
<Route path='/read' element={<Read/>}/>
  
    

<Route path='/update' element={<Update/>}/>
</Routes>
</BrowserRouter>
    </center>
  );
};

export default App;