import { createContext, useState } from "react";

export const AlertContext = createContext({
  showAlert: false,
  alert: {
    message: "",
    type: "",
  },
  toggleAlert: () => {},
  changeAlertMessage: () => {},
});

const AlertProvider = ({ children }) => {
  const [showAlert, setShowAlert] = useState(false);
  const [alert, setAlert] = useState({
    message: "",
    type: "",
  });

  const toggleAlert = (bool) => {
    setShowAlert(bool);
  };

  const changeAlert = (alertItem) => {
    if (alertItem) {
      setAlert(alertItem);
    }
  };

  const value = {
    showAlert,
    alert,
    toggleAlert,
    changeAlert,
  };
  return (
    <AlertContext.Provider value={value}>{children}</AlertContext.Provider>
  );
};

export default AlertProvider;
