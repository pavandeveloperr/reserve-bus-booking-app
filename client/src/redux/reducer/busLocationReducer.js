import actionTypes from "../actionType/actionType";

const initialState = {
  busLocation : []
}

const buslocationReducer = (state = initialState , action) => {
  switch (action.type) {
    case actionTypes.LOCTION_SUCCESS:
      return {
        ...state,
        busLocation: action.payload,
      };

    case actionTypes.LOCATION_ERROR:
      return state;

    default:
      return state;
  }
};

export default buslocationReducer;
