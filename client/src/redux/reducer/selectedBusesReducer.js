import actionTypes from "../actionType/actionType";

const initialState = {
  selectedBuses : []
}

const selectedBusReducer = (state = initialState , action) => {
  switch (action.type) {
    case actionTypes.SELECTED_BUS_SUCCESS:
      return {
        ...state,
        selectedBuses: action.payload,
      };

    case actionTypes.SELECTED_BUS_ERROR:
      return state;

    default:
      return state;
  }
};

export default selectedBusReducer;
