import { useState } from "react";
import constate from "constate";

const useAlert = () => {
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

  return { showAlert, alert, toggleAlert, changeAlert };
};

export const [AlertConstateProvider, useAlertConstate] = constate(useAlert);
