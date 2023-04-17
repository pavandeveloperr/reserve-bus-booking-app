import actionTypes from "../actionType/actionType";

const initialState = {
  singleBusDetails : []
}

const singleBusDetailsReducer = (state = initialState , action) => {
  switch (action.type) {
    case actionTypes.SINGLBUSDETAIL_SUCCESS:
      return {
        ...state,
        singleBusDetails: action.payload,
      };

    case actionTypes.SINGLBUSDETAIL_ERROR:
      return state;

    default:
      return state;
  }
};

export default singleBusDetailsReducer;