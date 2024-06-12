import React from 'react'
import { Outlet } from 'react-router-dom';
import Navbar from '../components/Navbar';
import '../App.css';
export const Main = () => {
  return (
    <div>
        <Navbar/>
        <Outlet/>

    </div>
  )
}
