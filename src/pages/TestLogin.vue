<template>
  <div>
    <h4>註冊</h4>
    <q-form v-model="valid" @submit.prevent="register" class="row">
      <q-input
        dense
        class="col col-12"
        ref="inputRef"
        v-model="signUpForm.email"
        label="信箱"
        :rules="rules.email"
      />
      <q-input
        dense
        class="col col-12"
        ref="inputRef"
        v-model="signUpForm.account"
        label="帳號名稱"
        :rules="rules.account"
      />
      <q-input
        dense
        class="col col-12"
        ref="inputRef"
        v-model="signUpForm.password"
        :type="isPwd ? 'password' : 'text'"
        label="密碼"
        :rules="rules.password"
      >
        <template v-slot:append>
          <q-icon
            :name="isPwd ? 'visibility_off' : 'visibility'"
            class="cursor-pointer"
            @click="isPwd = !isPwd"
          />
        </template>
      </q-input>

      <q-radio v-model="signUpForm.userRole" val="0" label="設計師" />
      <q-radio v-model="signUpForm.userRole" val="1" label="主管" />

      <q-btn
        dense
        type="submit"
        size="22px"
        class="q-px-xl q-py-xs sign-up col-12"
        color="secondary"
        label="Sign up"
      />
    </q-form>

    <!--  登入 ---------------------------------------------------------------------->
    <h4>登入</h4>
    <q-form @submit.prevent="login" class="column">
      <q-input
        dense
        ref="inputRef"
        v-model="LoginForm.account"
        label="Account"
        :rules="rules.account"
      />
      <q-input
        dense
        ref="inputRef"
        v-model="LoginForm.password"
        :type="isPwd ? 'password' : 'text'"
        label="password"
        :rules="rules.password"
      >
        <template v-slot:append>
          <q-icon
            :name="isPwd ? 'visibility_off' : 'visibility'"
            class="cursor-pointer"
            @click="isPwd = !isPwd"
          />
        </template>
      </q-input>
      <q-btn
        dense
        type="submit"
        size="22px"
        class="q-px-xl q-py-xs"
        color="secondary"
        label="Login"
      />
    </q-form>
  </div>
</template>

<script setup>
import { reactive, ref } from "vue";
import { api } from "../boot/axios.js";
import { useRouter } from "vue-router";
import { isEmail } from "validator";
import { useUserStore } from "../stores/user.js";

const router = useRouter();
// const inputRef = ref(null)

const user = useUserStore();

const signUpForm = reactive({
  account: "",
  password: "",
  email: "",
  userRole: null,
});

const LoginForm = reactive({
  account: "",
  password: "",
});

// const isPwd = ref(true);

const rules = reactive({
  account: [
    (v) => !!v || "請輸入帳號",
    (v) => (v.length >= 4 && v.length <= 20) || "帳號應為4-20個字元",
    (v) => /^[a-zA-Z0-9]+$/.test(v) || "帳號應為英文字元或數字",
  ],
  password: [
    (v) => !!v || "請輸入密碼",
    (v) => (v.length >= 4 && v.length <= 20) || "密碼應為4-20個字元",
    // .test() 把 v 替換成正則表達式出來的元素
    (v) => /^[a-zA-Z0-9]+$/.test(v) || "密碼應為英文字元或數字",
  ],
  email: [
    (v) => !!v || "請輸入信箱",
    (v) => isEmail(v) || "請輸入正確的信箱格式",
  ],
});

const isPwd = ref(true);

/* 註冊------------------------------------------------------------------------ */
const register = async () => {
  try {
    await api.post("/users", signUpForm);
    alert("註冊成功");
    router.push("/");
  } catch (error) {
    alert("註冊失敗");
  }
};
/* 登入------------------------------------------------------------------------ */
const login = () => {
  user.login(LoginForm);
};

// const reset = () => {
//   inputRef.value.resetValidation();
// };
</script>
