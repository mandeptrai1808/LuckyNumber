import { Button } from 'antd'
import React, {useState, useEffect} from 'react'
import NumberBox from './NumberBox'
import { useDispatch, useSelector } from 'react-redux'

export default function RollNumber() {
  let dataGame = localStorage.getItem("dataGame");
    dataGame = dataGame && JSON.parse(dataGame);

    if(!dataGame){
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
      }
    }

  const dispatch = useDispatch();
  const {startRoll} = useSelector(state => state.DataNumberReducer);

  const [realNums, setRealNums] = useState([]);
    const [nums, setNums] = useState({data: [], size: 1})
    console.log("render")

    const startButton = () => {
      dispatch({type: "START_ROLL"});
    }
 

    const rollButton = () => {
       if(nums.size <= realNums.length) {
        dispatch({type: "START_ROLL"})
        var temp = nums.data;
        console.log(temp)
        temp[nums.size-1] =realNums[nums.size-1];
        setNums({
            data: temp,
            size: nums.size+1
        });
       }
       else dispatch({type: "END_ROLL"})
    }
    const boxNumberContent = nums.data.map((item, index) => {
      return <NumberBox show={(index == nums.size-1) ? true : false} key={index} num = {item}/>
    })

    useEffect(() => {
      var rnd = Math.floor(Math.random() * dataGame.sizeOfList);
      console.log(dataGame.data[rnd])
      var digit = dataGame.data[rnd].toString().split('');
      var temp = [];
      for(var i = 1; i <= dataGame.numberOfNum; i++) temp.push("");

      // realNums = digit.map(Number);
      // console.log(realNums)
      setRealNums(digit.map(Number))
      setNums({
        data: temp,
        size: 1
      })
    }, [])
  return (
    <div>
        <div className="flex justify-center">
        {boxNumberContent}
        </div>
        <div className='text-center my-10'>
          {(!startRoll) ?
          
          <button type="danger" className="duration-200 hover:scale-110 bg-brownvintage py-2 px-10 text-white shadow-md rounded-md" onClick={() => {
            startButton()
         }}>START</button>

          : 
          
          <button disabled={nums.size == realNums.length+1} className="duration-200 hover:scale-110 bg-brownvintage py-2 px-10 text-white shadow-md rounded-md" onClick={() => {
             rollButton()
          }}>ROLL</button>
          }
          <br></br>
          {(nums.size == realNums.length+1) ? 
             <button className=" my-5 duration-200 hover:scale-110 bg-orangevintage py-2 px-10 text-white shadow-md rounded-md" onClick={() => {
              window.location.reload();
           }}>RESET</button>
          :
           ""
        }
        </div>
    </div>
  )
}
