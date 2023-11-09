import { defineStore } from "pinia";
import axios from "axios";
import router from "@/router";

export interface Login {
  email: string;
  password: string;
}

export const useLoginStore = defineStore("loginStore", {
  state: () => ({
    users: <Login[]>[],
  }),
  actions: {
    async getToken(): Promise<void> {
      try {
        await axios.get("/sanctum/csrf-cookie");
      } catch (error) {
        console.error("Error getting CSRF token", error);
      }
    },

    async handleLogin(formData: { email: string; password: string; }): Promise<void> {
      try {
        await this.getToken()
        await axios.post('/login', {
          email: formData.email,
          password: formData.password
        })
        router.push('/dashboard')
      } catch (error:any) {
        // Handle the error
        console.log('Invalid credentials. Please try again.', error)
      }
    },
  },
});
