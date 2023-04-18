import { ref } from "vue";
import { defineStore } from "pinia";

export const useToken = defineStore("token", () => {
  const token = ref(sessionStorage.getItem("token"));
  function setToken(value) {
    token.value = value;
    sessionStorage.setItem("token", value)
  }
  return { token, setToken };
});
