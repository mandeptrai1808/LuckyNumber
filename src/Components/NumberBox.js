import React, {useEffect, useState} from 'react'
import RandomRoll from './RandomRoll'
import { useSelector } from 'react-redux'

export default function NumberBox(props) {
  const {startRoll} = useSelector(state => state.DataNumberReducer);
  return (
    <div className={`w-40 h-40 shadow-lg flex justify-center items-center mx-5 relative 
    ${(props.num === "") ? "bg-slatevintage" : "bg-whitevintage" }`}>
        <div className={`absolute top-0 left-0 ${(props.show && startRoll) ? '' : 'hidden'}`}>
        <RandomRoll/>
        </div>
        <p className='text-8xl m-0'>{(props.num === "") ? "?" : props.num}</p>
    </div>
  )
}
