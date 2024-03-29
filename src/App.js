import React, { useContext } from "react";
import { AuthContext } from "./components/context/auth-context";
import Ingredients from "./components/Ingredients/Ingredients";
import Auth from "./components/Auth";
//import AuthContextProvider from "./components/context/auth-context";
const App = props => {

  const authContext = useContext(AuthContext);
  let content = <Auth />;
  if (authContext.isAuth) {
    content = <Ingredients />;
  }

  return content;
};

export default App;
