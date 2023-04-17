import actionTypes from "../actionType/actionType";

const initialState = {
    busSelectedSeatIds : []
};

const busSeatNumberReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.SEATNUMBER_SUCCESS:
       const busids =  [...state.busSelectedSeatIds]
       const Index =  busids.findIndex((val)=>val===action.payload.seatNo)
      //  console.log("index",Index)
      //  console.log("ids",action.payload.id)
       if (Index===-1) {
         busids.push(action.payload.seatNo)
       } else {
        busids.splice(Index,1)
       }
       return {
        busSelectedSeatIds : busids
       }
    case actionTypes.SEATNUMBER_ERROR:
      return state;
    default:
      return state;
  }
};

export default busSeatNumberReducer;