// eslint-disable-next-line no-unused-vars
import React from 'react'
import logo from  '../assets/Images/logo.png'
import user from '../assets/Images/user.png'
import { HiHome, HiMagnifyingGlass,HiStar,HiPlayCircle,HiTv } from "react-icons/hi2";
import {HiPlus,HiDotsVertical}from "react-icons/hi";
import HeaderItem from './HeaderItem';
import { useState } from 'react';

function Header() {
    let[toggle,setToggle]=useState(false)
    const menu=[
        {
        name:'HOME',
        icon:HiHome
    },
    {
        name:'SEARCH',
            icon:HiMagnifyingGlass
        },
        {
            name:'WATCH LIST',
            icon:HiPlus
        },
        {
            name:'ORIGINALS',
            icon:HiStar
        },
        {
            name:'MOVIES',
            icon:HiPlayCircle
        },
        {
            name:'SERIES',
            icon:HiTv
        }]
  return (
   <>
   <div className='flex items-center justify-between p-5'>
     
     <div className='flex  items-center gap-8'>

      <img src={logo} alt="disney-logo" className='w-[80px] md:w-[115px] object-cover '  /> 
       <div className=' hidden md:flex gap-8'>
     {menu.map((item,index)=>(
        <HeaderItem  key={index} names={item.name} Icon={item.icon}/>
     ))}
     </div>

       <div className='flex md:hidden gap-5'>
     {menu.map((item,index)=> index<3&&(
        <HeaderItem key={index} names={""} Icon={item.icon}/>
     ))}
     </div>
     
       <div className=' md:hidden' onClick={()=>setToggle(!toggle)}>
        <HeaderItem key={""} names={""} Icon={HiDotsVertical}/>
     {toggle?<div className=' absolute mt-3 bg-[#121212] border-[1px] p-3 border-gray-400
       px-5 py-4 mobiles:p-1 mobiles:px-2' >
     {menu.map((item,index)=> index>2&&(
        <HeaderItem key={index} names={item.name} Icon={item.icon}/>
     ))}</div>:null}
     </div>
     
     </div>

     <img src={user} alt="user-login" className='w-[25px] md:w-[40px]  rounded-full hover:border border-gray-400 hover:scale-110 transition-all duration-150 ease-in-out' />
    
    </div>
    </> 
  )
}

export default Header
