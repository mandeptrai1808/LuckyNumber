import { Input } from 'antd';
import React, {useState} from 'react'
import { useSelector } from 'react-redux';

export default function ListNum() {

    let dataGame = localStorage.getItem("dataGame");
    dataGame = dataGame && JSON.parse(dataGame);


    if(!dataGame) {
        var temp = [];
        for(var i = 1; i < 100; i++){
            let num = (1808*123*i) % Math.pow(10, 4);
            if (num < Math.pow(10, 4-1)) num += Math.pow(10, 4-1);
            temp.push(num);
        }
        dataGame = {
        hash: 123,
        numberOfNum: 4,
        sizeOfList: 100,
        data: temp
      }}

//    const {dataGame} = useSelector(state => state.DataNumberReducer);

   const content_1 = dataGame.data.map((item, index) => {
     return <p className='text-center col-span-1 m-0 mb-2 pb-2 text-xl border-b' key={index}>{item}</p>
   })


  return (
   <div>
    <h1 className='text-center text-3xl'>LIST OF TICKET</h1>
     <div className='p-5 grid grid-cols-5'>
       
       {content_1}
       
    </div>
   </div>
  )
}
