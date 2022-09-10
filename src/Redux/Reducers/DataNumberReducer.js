var temp = [];
        for(var i = 1; i < 100; i++){
            let num = (1808*123*i) % Math.pow(10, 4);
            if (num < Math.pow(10, 4-1)) num += Math.pow(10, 4-1);
            temp.push(num);
        }

const stateDefault = {
    dataGame: {
      hash: 123,
      numberOfNum: 4,
      sizeOfList: 100,
      data: temp
    },
    vipNums: [],
    test: "hehe",
    startRoll: false,
    showModel: false
}

export const DataNumberReducer = (state = stateDefault, action) => {
  switch (action.type) {
    case "START_ROLL":{
      state.startRoll = true;
      return {...state}
    }
    case "END_ROLL":{
      state.startRoll = false;
      return {...state}
    }    
    case "OPEN_MODEL":{
      state.showModel = true;
      return {...state};
    }
    case "CLOSE_MODEL":{
      state.showModel = false;
      return {...state}
    }

    case "GET_DATAGAME":{
      state.dataGame = action.content;
      return {...state}
    }
    default:
       return {...state}
  }
}