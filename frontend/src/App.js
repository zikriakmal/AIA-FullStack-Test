import './App.css';
import { Routes, Route } from 'react-router-dom'
import Index from './pages/Index';
import 'react-loading-skeleton/dist/skeleton.css'

function App()
{
  return (

    <Routes>
      <Route path="/" element={<Index />}></Route>
    </Routes>
  );
}

export default App;
