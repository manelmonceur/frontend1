import { create } from "zustand";
import { persist, devtools, combine } from "zustand/middleware";
import { Child } from "../types/api";


interface ParentState {
  isSelectChildOpen: boolean;
  selectedChild?: Child;
}

const useParentStore = create(
  devtools(
    persist(
      combine(
        {
          isSelectChildOpen: false,
          selectedChild: undefined,
        } as ParentState,
        (set) => ({
          setSelectChild: (selectedChild: Child) => set({ selectedChild }),
          openSelectChildModal: () => set({ isSelectChildOpen: true }),
          hideSelectChildModal: () => set({ isSelectChildOpen: false }),
        })
      ),
      {
        name: "ParentStore",
      } as any
    )
  )
);

export { useParentStore };
