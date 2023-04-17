import actionTypes from "../actionType/actionType";

const initialState = {
  formValue : []
}

const busFormReducer = (state = initialState , action) => {
  switch (action.type) {
    case actionTypes.FORM_SUCCESS:
      return {
        ...state,
        formValue: action.payload,
      };

    case actionTypes.FORM_ERROR:
      return state;

    default:
      return state;
  }
};

export default busFormReducer;