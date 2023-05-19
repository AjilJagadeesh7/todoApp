import { signal } from "@preact/signals-react";

export const alert = signal({
  message: "",
  type: "",
});

export const showAlert = signal(false);

export const toggleAlert = (bool) => {
  showAlert.value = bool;
};

export const changeAlert = (alertItem) => {
  if (alertItem) {
    alert.value = alertItem;
  }
};
