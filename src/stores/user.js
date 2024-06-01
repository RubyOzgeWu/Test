import { defineStore } from "pinia";
import { api, apiAuth } from "../boot/axios.js";

export const useUserStore = defineStore({
  id: "user",
  state () {
    return {
      token: "",
      account: "",
      userRole: 0,
    };
  },
  getters: {
    isLogin () {
      return this.token.length !== 0;
    },
    isDirector () {
      console.log("here");
      return this.userRole === 1;
    },
    // avatar () {
    //   return "https://source.boringavatars.com/beam/120/" + this.account;
    // },
  },
  actions: {

    async login (form) {
    //   const router = useRouter()
      try {
        const { data } = await api.post("/users/login", form);
        this.token = data.result.token;
        this.account = data.result.account;
        this.userRole = data.result.userRole;
        this.router.push("/");
        alert("登入成功");
      } catch (error) {
        alert("登入失敗");
      }
    },

    async logout () {
      console.log("action");
      try {
        await apiAuth.delete("/users/logout");
        this.router.push("/");
        alert("登出成功");
      } catch (_) {
      }
      this.token = "";
      this.account = "";
      this.role = 0;
    },
  },

});
