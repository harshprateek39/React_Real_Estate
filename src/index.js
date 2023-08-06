import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { createBrowserRouter,createRoutesFromElements, Route,RouterProvider } from 'react-router-dom';
import Home from './pages/Home';
import Blog from './pages/Blog'
import Contact from './pages/Contact';
import About from './pages/About';
import Propetries from './pages/Properties';
const router=createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<App/>}>
      <Route index element ={<Home/>}/>
      <Route path='about' element ={<About/>}/>
      <Route path='properties' element ={<Propetries/>}/> 
      <Route path='blog' element ={<Blog/>}/>
      <Route path='contact' element ={<Contact/>}/>
      
      
    </Route>
  )
)
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <RouterProvider router={router} />
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
