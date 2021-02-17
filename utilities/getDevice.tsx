import { useEffect, useState, useRef } from "react";

function getDevice() {
  const windowWidth =
    window.innerWidth ||
    document.documentElement.clientWidth ||
    document.body.clientWidth;

  if (windowWidth <= 767) {
    return "mobile";
  } else if (windowWidth <= 1023) {
    return "tablet";
  }
  return "desktop";
}

/*
    useDevice() - Hook to get the device type
*/

export function useDevice() {
  const [device, setDevice] = useState("");
  const [currentDevice, setCurrentDevice]: any = useState(null);

  const timer: any = useRef(false);

  useEffect(() => {
    setDevice(getDevice());
  }, []);

  useEffect(() => {
    const onResize = () => {
      clearTimeout(timer.current);
      timer.current = setTimeout(() => {
        setDevice(getDevice());
      }, 300);
    };

    window.addEventListener("resize", onResize);

    return () => window.removeEventListener("resize", onResize);
  }, [setDevice]);

  useEffect(() => {
    if (device !== currentDevice) {
      setCurrentDevice(device);
    }
  }, [device]);

  return currentDevice;
}

export default useDevice;
