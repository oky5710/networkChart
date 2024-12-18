export type RolesType = {
  id: string;
  type: string;
  permissions?: string[];
  writePermission?: boolean;
  children?: RolesType[];
}
export type SidePopupType = {
  type: string;
  id: string;
  users?: string[];
  roles?: string[];
  policies?: string[];
  permissions?: string[];
}
