import React, { createContext, useState, useMemo } from "react";
import PropTypes from "prop-types";

const LoginContext = createContext();

function LoginProvider({ children }) {
  const [loginData, setLoginData] = useState(
    JSON.parse(localStorage.getItem("loginData")) || {
      isLogged: false,
      info: {
        id: "",
        email: "",
        userName: "",
        secondName: "",
        token: "",
      },
    }
  );

  const loadData = (data) => {
    setLoginData(data);
    window.localStorage.setItem("loginData", JSON.stringify(data));
  };

  // Memo to prevent re-render on context provider, so it's wrapped
  const loginInformation = useMemo(
    () => ({
      loginData,
      loadData,
    }),
    [loginData]
  );

  return (
    <LoginContext.Provider value={loginInformation}>
      {children}
    </LoginContext.Provider>
  );
}

export { LoginProvider };
export default LoginContext;

LoginProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
