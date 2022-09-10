import { Button } from 'antd';
import React, {useState} from 'react'
import {useSelector} from 'react-redux'
import DigitRoll from '../Components/DigitRoll';
import RandomRoll from '../Components/RandomRoll';
import RollNumber from '../Components/RollNumber';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
export default function MainPage() {

    const navigate = useNavigate();
    const dispatch = useDispatch();
    const {test} = useSelector(state => state.DataNumberReducer);

  return (
    <div className='bg-redvintage h-screen'>
        <h1 className='text-6xl bg-brownvintage text-whitevintage text-center py-5 mb-20 shadow-md'>LUCKY NUMBER</h1>
        <RollNumber/>
        <div className='pl-10 fixed bottom-10 left-0'>
          <button
           onClick={() => {
             dispatch({type: "OPEN_MODEL"})
           }}
           className='duration-200 bg-brownvintage py-2 px-5 text-white shadow-md rounded-md hover:scale-110 mb-5'>Setting</button>
          <br></br>
          <button 
          onClick={() => {
            navigate('/numbers')
          }}
          className='duration-200 bg-orangevintage py-2 px-5 text-white shadow-md rounded-md hover:scale-110 mb-5'>View list of tickets</button>
        </div>
        {/* <RandomRoll/> */}
        {/* <DigitRoll/> */}

        <p className='text-right fixed bottom-10 right-10 w-fit text-whitevintage'>Made by ECCIT</p>
    </div>
  )
}
