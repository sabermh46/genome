
import { TypedUseSelectorHook,useDispatch, useSelector, useStore } from 'react-redux'
import type { AppDispatch, AppStore, RootState } from './store'//Module '"./store"' has no exported member 'RootState'.


export const useAppDispatch : ()=> AppDispatch = useDispatch
export const useAppSelector:TypedUseSelectorHook<RootState> = useSelector
export const useAppStore = useStore as ()=> AppStore