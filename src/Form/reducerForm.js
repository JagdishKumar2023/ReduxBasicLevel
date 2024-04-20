const initialState = {
  formData: {
    name: "",
    email: "",
  },
};

function reducerForm(state = initialState, action) {
  switch (action.type) {
    case "UPDATE_FORM":
      return {
        ...state,
        formData: action.payload,
      };
    default:
      return state;
  }
}

export default reducerForm;
