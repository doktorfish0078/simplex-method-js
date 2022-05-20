import {BrowserRouter, Route, Routes} from 'react-router-dom'

import './App.css';
import Header from './components/Header';
import Choose_calculator from './components/Choose_calculator';
import Simplex_method from './components/Simplex_method';

function App() {
  return(
    <BrowserRouter>
      <Header/>
      <Routes>
        <Route path='/' element={ <Choose_calculator/> }/>
        <Route path='/simplex_method' element={ <Simplex_method/> }/>
      </Routes>
      

    </BrowserRouter>

  )
}

export default App;
