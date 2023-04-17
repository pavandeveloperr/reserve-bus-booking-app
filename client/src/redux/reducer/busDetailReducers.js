import actionTypes from "../actionType/actionType";

const initialState = {
  BusDetail:[]
};
const busDetailReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.BUSDETAIL_API_SUCCESS:
      return {
        ...state,
        BusDetail: action.payload,
      };

    case actionTypes.BUSDETAIL_API_ERROR:
      return state;

    default:
      return state;
  }
};

export default busDetailReducer;
