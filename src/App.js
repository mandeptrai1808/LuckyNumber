import { Button } from 'antd';
import Wheel from './Components/Wheel';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import {useState} from 'react';
import MainPage from './Pages/MainPage';
import ListNum from './Pages/ListNum';
import ModelTemplate from './Templates/ModelTemplate';

function App() {

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
