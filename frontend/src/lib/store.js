import { create } from "zustand";
import { persist } from "zustand/middleware";
import { db } from "./firebase";
import { getDoc } from "firebase/firestore";

const customStorage = {
  getItem: (name) => {
    const item = localStorage.getItem(name);
    return item ? JSON.parse(item) : null;
  },

  setItem: (name, value) => {
    localStorage.setItem(name, JSON.stringify(value));
  },
  removeItem: (name) => {
    localStorage.removeItem(name);
  },
};

export const store = create()(
  persist(
    (set) => ({
      currentUser: null,
      isLoading: false,
      cartProduct: [],
      favoriteProduct: [],

      getUserInfo: async (uid) => {
        if (!uid) return set({ currentUser: null, isLoading: false });

        const docRef = doc(db, "users", uid);
        const docSnap = await getDoc(docRef);

        try {
          if (docSnap.exists()) {
            set({ currentUser: docSnap.data(), isLoading: false });
          }
        } catch (error) {
          console.log("getUserInfo error", error);
          set({ currentUser: null, isLoading: false });
        }
      },

          addToCart: (product){
          return new Promise
      }
    }),
    {
      name: "e-shop-storage",
      storage: customStorage,
    }
  )
);
