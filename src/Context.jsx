import React, { useContext, useReducer } from "react";
import reducer from "./Reducer";

const AppContext = React.createContext();

const initialState = {
  heading: "",
  image: "",
  path: "",
  buttonContent: ""
};

const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const UpdateAboutPage = () => {
    return dispatch({
      type: "ABOUT_UPDATE",
      payload: {
        heading: "TK SHIEKH",
        image: "https://talhawebsite.netlify.app/IMAGES/talha3.png",
        buttonContent: "Contact",
        path: "/contact"
      }
    });
  };

  const UpdateHomePage = () => {
    return dispatch({
      type: "HOME_UPDATE",
      payload: {
        heading: "TALHA SHIEKH",
        image: "https://talhawebsite.netlify.app/IMAGES/talha_remove_background-removebg-preview.png",
        buttonContent: "Hire me",
        path: "/service"
      }
    });
  };

  return (
    <AppContext.Provider value={{ ...state, UpdateHomePage, UpdateAboutPage }}>
      {children}
    </AppContext.Provider>
  );
};

const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppProvider, AppContext, useGlobalContext };
