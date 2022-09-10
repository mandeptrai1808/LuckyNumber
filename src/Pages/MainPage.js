import { Button, Input, Popover  } from 'antd';
import React, {useState} from 'react'
import {useSelector} from 'react-redux'
import DigitRoll from '../Components/DigitRoll';
import RandomRoll from '../Components/RandomRoll';
import RollNumber from '../Components/RollNumber';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
export default function MainPage() {
  let dataGame = localStorage.getItem("dataGame");
  dataGame = dataGame && JSON.parse(dataGame);

    const navigate = useNavigate();
    const dispatch = useDispatch();
    const [vipData, setVipData] = useState({
      tiLe: 10,
      maVe: 1234
    })

    const [showPop, setShowPop] = useState(false)

    const addVipButton = () => {
      let tempArray = dataGame;
      for(var i = 1; i <= (dataGame.sizeOfList * vipData.tiLe / 100); i++){
        tempArray.data.push(vipData.maVe);
      }
      tempArray.sizeOfList = tempArray.data.length;
      localStorage.setItem(
        "dataGame",
        JSON.stringify(tempArray)
      );
    }

    const contentPopup = () => {
      return <div>
        <p className='m-0'>Tỉ lệ thắng cộng thêm: </p>
        <Input type='number' value={vipData.tiLe} onChange={(e) => {
          setVipData({
            ...vipData,
            tiLe: e.target.value
          })
        }} min={10} max={50}></Input>
        <p className='m-0'>Mã vé: </p>
        <Input  type='number' value={vipData.maVe} onChange={(e) => {
          setVipData({
            ...vipData,
            maVe: e.target.value
          })
        }}></Input>
       <div className='flex justify-between mt-5'>
       <Button type='primary' onClick={() => {
          console.log(vipData)
          setShowPop(false);
          addVipButton();
        }}>Add</Button>
        <Button onClick={() => {
          setShowPop(false)
        }}>Cancel</Button>
       </div>
      </div>
    }

  return (
    <div className='bg-redvintage h-screen'>
        <h1 className='text-6xl bg-brownvintage text-whitevintage text-center py-5 mb-20 shadow-md'>Wheel Of Fortune</h1>
        <RollNumber/>
        <div className='pl-10 fixed bottom-10 left-0'>
          <button
           onClick={() => {
             dispatch({type: "OPEN_MODEL"})
           }}
           className='duration-200 bg-brownvintage py-2 px-5 text-white shadow-md rounded-md hover:scale-110 mb-5'>Setting</button>
          <br></br>
          <Popover open={showPop} content={contentPopup} trigger="click" placement='topRight'>
          <button 
          onClick={() => {
            setShowPop(true)
          }}
          className='duration-200 bg-orangevintage py-2 px-5 text-white shadow-md rounded-md hover:scale-110 mb-5'>
            Add VIP ticket</button>
          </Popover>

            <br></br>
          <button 
          onClick={() => {
            navigate('/numbers')
          }}
          className='duration-200 bg-orangevintage py-2 px-5 text-white shadow-md rounded-md hover:scale-110 mb-5'>
            View list of tickets</button>
        </div>
        {/* <RandomRoll/> */}
        {/* <DigitRoll/> */}

        <p className='text-right fixed bottom-10 right-10 w-fit text-whitevintage'>Made by ECCIT</p>
    </div>
  )
}
