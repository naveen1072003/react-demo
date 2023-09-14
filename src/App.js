import Login from './components/Login';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Table from './components/Table';

function App() {
  return (
    <BrowserRouter>
    <Routes>
    <Route path='/' element={<Login/>} />
    <Route path='/Table' element={<Table/>} />
    </Routes>
    </BrowserRouter>
  );
}

export default App;
