import React from "react";

const defaultVal = {
  arrUsers: [],
  loginUserIndex: -1,
};

const GlobalContext = React.createContext(defaultVal);
export default GlobalContext;
