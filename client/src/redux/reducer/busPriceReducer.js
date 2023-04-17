import actionTypes from "../actionType/actionType";

const initialState = {
  price : []
}

const busPriceReducer = (state = initialState , action) => {
  switch (action.type) {
    case actionTypes.SETPRICE_SUCCESS:
      return {
        ...state,
        price: action.payload,
      };

    case actionTypes.SETPRICE_ERROR:
      return state;

    default:
      return state;
  }
};

export default busPriceReducer;
