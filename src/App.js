import logo from './logo.svg';
import './App.css';
import Available from './components/Available';
import NotAvailabale from './components/NotAvailabale';
import ComingSoon from './components/ComingSoon';
import Suggest from './components/Suggest';
import BookNavbar from './components/BookNavbar';
import { BrowserRouter, Route, Routes } from 'react-router-dom';


function App() {
  return (
   <BrowserRouter>
   
   <Routes>
<Route path='/' element={<Available/>}/>
<Route path='/not' element={<NotAvailabale/>}/>
<Route path='/coming' element={<ComingSoon/>}/>
<Route path='/suggest' element={<Suggest/>} />



   </Routes>
   
   </BrowserRouter>
  )

}

export default App;
