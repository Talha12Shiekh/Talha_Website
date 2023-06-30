const reducer = (state, action) => {
    if (action.type === "HOME_UPDATE") {
      return {
        ...state,
        heading: action.payload.heading,
        image: action.payload.image,
        path: action.payload.path,
        buttonContent: action.payload.buttonContent
      };
    }
    if (action.type === "ABOUT_UPDATE") {
      return {
        ...state,
        heading: action.payload.heading,
        image: action.payload.image,
        path: action.payload.path,
        buttonContent: action.payload.buttonContent
      };
    }
    return state;
  };
  export default reducer;
  