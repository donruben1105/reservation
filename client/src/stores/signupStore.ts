import { defineStore } from "pinia";
import axios from "axios";
import router from "@/router";

export interface Signup {
  name: string;
  email: string;
  password: string;
  password_confirmation: string;
}
export interface SignupStore {
  getUserData: () => Promise<void>;
  addUser: (user: Signup) => Promise<void>;
}

export const useSignupStore = defineStore("signupStore", {
  state: () => ({
    users: [] as Signup[],
    display_name: '',
    profiles: [] as Signup[],
  }),
  actions: {
    async getToken(): Promise<void> {
      try {
        await axios.get("/sanctum/csrf-cookie");
      } catch (error) {
        console.error("Error getting CSRF token", error);
      }
    },

    async getUserData(): Promise<void> {
      try {
        const response = await axios.get('/api/user');
        const userData = response.data;
        console.log('API Response:', userData);
      } catch (e) {
        console.error('Error getting user data', e);
        throw e;
      }
    },
    
    async addUser(user: Signup): Promise<void> {
      try {
        if (user.password !== user.password_confirmation) {
          console.log("Password confirmation does not match");
          return;
        }

        const response = await axios.post("/register", user, {
          headers: {
            "X-CSRF-TOKEN": document.head.querySelector(
              'meta[name="csrf-token"]'
            )?.getAttribute("content") || "",
          },
        });

        console.log("User registered successfully:", response.data);
        router.push("/dashboard");
      } catch (error:any) {
        if (axios.isAxiosError(error)) {
          const response = error.response;
          if (response) {
            console.log("Response status:", response.status);
            console.log("Response data:", response.data);
          }
        } else {
          console.log("Error message:", error.message);
        }
      }
    }, // This will use to register the admin
  },
});
