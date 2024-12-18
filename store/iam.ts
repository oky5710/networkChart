import {create} from "zustand";
import {RolesType} from "@/types/type";
import roles from "@/public/json/roles";

type PositionType = {
  x: number;
  y: number;
}
export const useRolesStore = create<{
  selectedData: RolesType;
  zoom: number;
  setRoles: (field: string, value: RolesType | string | number | PositionType) => void;
  clicked: string | null;
}>((set) => (
  {
    selectedData: roles,
    zoom: 100,
    clicked: null,
    setRoles: (field, value) => {
      set(state => ({...state, [field]: value}))
    },
  }))
