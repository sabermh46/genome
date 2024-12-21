"use client"; // This is a client component

import { useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { AppState } from "../lib/store";
import "../globals.css";

const LoadingOverlay = () => {
  const status = useSelector((state: AppState) => state.counter.status);
  const isLoading = status === "loading";
  const [show, setShow] = useState(false);

  useEffect(() => {
    if (isLoading) {
      setShow(true);
    } else {
      setTimeout(() => setShow(false), 500); // Smooth fade-out transition
    }
  }, [isLoading]);

  return (
    show && (
      <div className={`loading-overlay ${isLoading ? "fade-in" : "fade-out"}`}>
        Loading...
      </div>
    )
  );
};

export default LoadingOverlay;
