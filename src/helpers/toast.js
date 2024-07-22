import toast from "react-hot-toast";

export const successToast = (message) =>
  toast.success(message, {
    position: "top-right",
    style: {
      padding: "12px",
      background: "#F7F7F7",
      color: "#242424",
    },
  });

export const errorToast = (message) =>
  toast.error(message, {
    position: "top-right",
    style: {
      padding: "12px",
      background: "#E44848",
      color: "#242424",
    },
  });
