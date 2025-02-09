import { defineStore } from "pinia";

export const useAuthStore = defineStore("auth", {
  state: () => ({
    isAuthenticated: false,
  }),

  actions: {
    setAuthenticated(isAuthenticated) {
      this.isAuthenticated = isAuthenticated;
    },
  },
});
