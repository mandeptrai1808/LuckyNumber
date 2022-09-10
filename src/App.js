import { Button } from 'antd';
import Wheel from './Components/Wheel';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import {useState} from 'react';
import MainPage from './Pages/MainPage';
import ListNum from './Pages/ListNum';
import ModelTemplate from './Templates/ModelTemplate';

function App() {

  let dataGame = localStorage.getItem("dataGame");
  dataGame = dataGame && JSON.parse(dataGame);

  if(!dataGame) 
 { 
  let tempList = [];
  for(var i = 1; i < 100; i++){
    let num = (1808*123*i) % Math.pow(10, 4);
    if (num < Math.pow(10, 4-1)) num += Math.pow(10, 4-1);
    tempList.push(num);
}
  let tempData = {
      hash: 123,
      numberOfNum: 4,
      sizeOfList: 100,
      data: tempList
    }
    localStorage.setItem(
      "dataGame",
      JSON.stringify((tempData))
    );
  }


  const [data, setData] = useState(['helo', 'haha']);

  return (
     <div className="App">
      <ModelTemplate/>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<MainPage/>}/>
          <Route path="/numbers" element={<ListNum/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
