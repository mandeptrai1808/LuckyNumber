import React, {useState, useEffect} from 'react'
import { useSelector } from 'react-redux';
export default function RandomRoll() {

  const {startRoll} = useSelector(state => state.DataNumberReducer);
    
    const [randomNumber, setRandomNumber] = useState({num: 0});
    useEffect(() => {
      if(startRoll)
            setTimeout(() => {
              if(randomNumber.num < 9) setRandomNumber(
                {num: randomNumber.num + 1}
              );
              else setRandomNumber({num: 0})
              // setRandomNumber( Math.floor(Math.random() * 10))
            },20)
        
    }, [randomNumber, startRoll])

  return (
    <div className='w-40 h-40 border flex justify-center items-center bg-red-200'>
        <p className='text-8xl m-0'>{randomNumber.num}</p>
    </div>
  )
}
