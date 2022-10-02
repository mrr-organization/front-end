<template>
  <div class="flex items-center justify-center min-h-screen">
    <div class="flex flex-col w-full mx-10 mb-10 h-96">
      <!-- basic login-->
      <div class="flex flex-col items-center justify-center">
        <div class="text-2xl font-bold" style="color: #312a21">
          ยินดีต้อนรับสู่ MRR
        </div>
        <Form @submit="handleLogin" :validation-schema="schema">
          <div class="flex flex-col mt-10 space-y-5 item-center w-60">
            <div class="form-group">
              <Field
                name="username"
                type="text"
                class="form-control ring-1 ring-black"
                placeholder="username"
              />
              <ErrorMessage
                name="username"
                class="font-semibold text-red-500 error-feedback"
              />
            </div>
            <div class="form-group">
              <Field
                name="password"
                type="password"
                class="form-control ring-1 ring-black"
                placeholder="Password"
              />
              <ErrorMessage
                name="password"
                class="font-semibold text-red-500 error-feedback"
              />
            </div>
            <div class="form-group">
              <button
                class="btn btn-block"
                style="background-color: #384bb1"
                :disabled="loading"
              >
                <span
                  v-show="loading"
                  class="spinner-border spinner-border-sm"
                ></span>
                <span class="text-xl font-semibold" style="color: #ffffff">
                  เข้าสู่ระบบ
                </span>
              </button>
            </div>
            <div class="form-group">
              <div v-if="message" class="alert alert-danger" role="alert">
                {{ message }}
              </div>
            </div>
          </div>
        </Form>
      </div>
      <!-- or div-->
      <div
        class="flex items-center justify-center mx-auto font-semibold w-60"
        style="color: #312a21"
      >
        <span class="w-1/2 h-0.5 bg-black mx-2" />
        <div class="px-2">or</div>
        <span class="w-1/2 h-0.5 bg-black mx-2" />
      </div>
      <!-- another login-->
      <div class="flex flex-col items-center justify-center">
        <div class="flex flex-col mt-10 space-y-5 item-center w-60">
          <div id="google-signin-button"></div>
          <GoogleSignup></GoogleSignup>
          <ButtonCom
            @click="redirectToRegisterPage"
            msg="สมัครใช้งาน"
            class="w-56 p-3"
            style="background-color: #faf0ef; color: #312a21"
          ></ButtonCom>
        </div>
      </div>
    </div>
  </div>
</template>


<script>
import ButtonCom from "@/components/BasicButton.vue";
import GoogleSignup from "@/components/GoogleSignup.vue";

import { Form, Field, ErrorMessage } from "vee-validate";
import * as yup from "yup";
export default {
  name: "SignIn",
  components: { ButtonCom, Form, Field, ErrorMessage, GoogleSignup },
  data() {
    const schema = yup.object().shape({
      username: yup.string().required("Username is required!"),
      password: yup.string().required("Password is required!"),
    });
    return {
      loading: false,
      message: "",
      schema,
    };
  },
  computed: {
    loggedIn() {
      return this.$store.state.auth.status.loggedIn;
    },
  },
  created() {
    if (this.loggedIn) {
      this.$router.push("/userlogin");
    }
  },
  mounted() {},
  methods: {
    redirectToRegisterPage() {
      this.$router.push("/register");
    },
    handleLogin(user) {
      this.loading = true;
      this.$store.dispatch("auth/login", user).then(
        () => {
          this.$router.push("/mainuser");
        },
        (error) => {
          this.loading = false;
          this.message =
            (error.response &&
              error.response.data &&
              error.response.data.message) ||
            error.message ||
            error.toString();
        }
      );
    },
  },
};
</script>

<style>
</style>