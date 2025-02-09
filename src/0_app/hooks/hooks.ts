import {TypedUseSelectorHook, useDispatch, useSelector} from "react-redux";
import {RootState, AppDispatch} from "/src/0_app/provider/Store/config/store.ts";

export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
