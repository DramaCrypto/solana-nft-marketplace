import { toast } from "react-toastify";

export const errorAlert = (text) => {
  toast.error(text, {
    position: "bottom-center",
    className: "toast-message",
    autoClose: 5000,
    hideProgressBar: true,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    theme: "colored",
  });
};

export const errorAlertCenter = (text) => {
  toast.error(text, {
    position: "bottom-center",
    className: "toast-message",
    autoClose: 5000,
    hideProgressBar: true,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    theme: "colored",
  });
};

export const warningAlert = (text) => {
  toast.warning(text, {
    position: "bottom-center",
    className: "toast-message",
    autoClose: 5000,
    hideProgressBar: true,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    theme: "colored",
  });
};

export const successAlert = (text, state) => {
  if (state) {
    toast.success(text, {
      position: "bottom-center",
      className: "toast-message",
      autoClose: false,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      theme: "dark",
    });
  } else {
    toast.success(text, {
      position: "bottom-center",
      className: "toast-message",
      autoClose: 5000,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      theme: "dark",
    });
  }
};

export const infoAlert = (text) => {
  toast.info(text, {
    position: "bottom-center",
    autoClose: 5000,
    hideProgressBar: true,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    theme: "colored",
  });
};
