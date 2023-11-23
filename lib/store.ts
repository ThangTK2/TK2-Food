import { create } from "zustand"; //zustand thư viện quản lý trạng thái

interface ISideBarDrawerStore{
  isSideBarOpen: boolean
  onSideBarOpen: () => void
  onSideBarClose: () => void
}

export const useSideBarDrawer = create<ISideBarDrawerStore>()((set) => ({
  isSideBarOpen: false,
  onSideBarOpen: () => set({ isSideBarOpen: true }),
  onSideBarClose: () => set({ isSideBarOpen: false }),
}));