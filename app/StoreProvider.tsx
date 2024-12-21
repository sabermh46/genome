"use client";
import { useRef } from "react";
import { Provider } from "react-redux";
import { makeStore, AppStore } from "./lib/store";
import  initializeCount  from "./redux/features/counterSlice";

export default function StoreProvider({
  count,
  children,
}: {
  count: number;
  children: React.ReactNode;
}) {
  const storeRef = useRef<AppStore | null>(null);
  if (!storeRef.current) {
    storeRef.current = makeStore();
    storeRef.current.dispatch(initializeCount(count)); // Ensure initializeCount is an exported action
  }

  return <Provider store={storeRef.current}>{children}</Provider>;
}
