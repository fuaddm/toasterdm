import React, { useSyncExternalStore } from "react";
import "./components/toaster.css";
import { toastFD } from "./components/toast";
import SvgSuccess from "./svg/SvgSuccess.jsx";
import SvgError from "./svg/SvgError.jsx";
import SvgWarning from "./svg/SvgWarning.jsx";
import SvgWaiting from "./svg/SvgWaiting.jsx";

const Toaster = ({ position }) => {
  const toasters = useSyncExternalStore(toastFD.subscribe, toastFD.getSnapshot);

  function getLineBackground(type) {
    let lineBackground;

    switch (type) {
      case "success":
        lineBackground = "rgb(46, 204, 113)";
        break;
      case "warning":
        lineBackground = "rgb(255, 165, 0)";
        break;
      case "error":
        lineBackground = "rgb(255, 0, 0)";
        break;
      case "info":
        lineBackground = "rgb(37, 99, 235)";
        break;
      case "waiting":
        lineBackground = "rgb(200, 200, 200)";
        break;
      default:
        lineBackground = "rgb(200, 200, 200)";
        break;
    }

    return lineBackground;
  }

  function getPosition(position) {
    if (
      position == "topLeft" ||
      position == "topCenter" ||
      position == "topRight" ||
      position == "bottomLeft" ||
      position == "bottomCenter" ||
      position == "bottomRight"
    ) {
      return position;
    }
    return "topLeft";
  }

  return (
    <div className={`${getPosition(position)} toasterWrapperFD`}>
      {toasters.map((toast) => {
        const lineBackground = getLineBackground(toast.type);
        return (
          <div
            key={toast.id}
            className={`${toast.isActive ? getPosition(position) : getPosition(position) + "Off"} toasterFD`}>
            {toast.type == "success" && <SvgSuccess width={20} height={20} />}
            {toast.type == "error" && <SvgError width={20} height={20} />}
            {toast.type == "warning" && <SvgWarning fill="orange" width={20} height={20} />}
            {toast.type == "info" && <SvgWarning fill="rgb(37, 99, 235)" width={20} height={20} />}
            {toast.type == "waiting" && <SvgWaiting width={20} height={20} />}
            <span>{toast.msg}</span>
            <div
              className="toasterFDLine"
              style={{
                background: lineBackground,
                animation: `moveOut ${toast.milliseconds}ms linear`,
              }}></div>
            <div className="toasterFDSecondLine"></div>
          </div>
        );
      })}
    </div>
  );
};

export { Toaster, toastFD };
