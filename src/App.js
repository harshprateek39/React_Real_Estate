
import './App.css';
import Footer from './components/Footer';
import Header from './components/Header';
import { Outlet } from 'react-router-dom';
function App() {
  return (
    <div className=" bg-slate-50  min-h-screen flex flex-col   w-">
    <Header/>
    <main className='  bg-slate-50   '>
      <Outlet/>
    </main>
      <Footer/>
    </div>
  );
}

export default App;
