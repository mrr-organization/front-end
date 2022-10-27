<template>
  <div class="flex items-center justify-center min-h-screen">
    <div class="flex flex-col w-full gap-3 mb-10 mx-96 h-96 sm:flex-row">
      <!-- basic login-->
      <div class="flex flex-col items-center justify-center">
        <div class="text-3xl font-bold" style="color: #312a21">
          ยินดีต้อนรับสู่ MRR
        </div>
        <Form @submit="handleLogin" :validation-schema="schema">
          <div class="flex flex-col mt-10 space-y-5 item-center w-60">
            <div class="form-group">
              <Field
                name="username"
                type="text"
                class="p-2 rounded form-control ring-1 ring-black"
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
                class="p-2 rounded form-control ring-1 ring-black"
                placeholder="Password"
              />
              <ErrorMessage
                name="password"
                class="font-semibold text-red-500 error-feedback"
              />
            </div>
            <div class="form-group">
              <button
                class="p-2 px-16 rounded btn btn-block"
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
      <div class=" w-72 inline-flex sm:w-0.5 sm:mx-auto bg-black h-96">
        <div class="h-0.5">

        </div>
      </div>
      <!-- another login-->
      <div class="flex flex-col items-center justify-center">
        <div class="flex flex-col mt-10 space-y-5 item-center w-60">
          <GoogleSignup
            class="w-56 p-3"
            style="background-color: #faf0ef; color: #312a21"
          ></GoogleSignup>
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
import * as yup from "yup";
import { Form, Field, ErrorMessage } from "vee-validate";

export default {
  components: { ButtonCom, Form, Field, ErrorMessage, GoogleSignup },
  data() {
    const schema =yup.object().shape({
      username: yup
        .string()
        .required("Username is required!")
        .min(6, "Must be at least 6 characters!")
        .max(255, "Must be maximum 255 characters!"),
      password: yup
      .string()
        .required("Password is required!")
        .min(6, "Must be at least 6 characters!")
        .max(40, "Must be maximum 40 characters!"),
      
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
    user() {
      return this.$store.state.auth.user;
    }
  },
  created() {
    if (this.loggedIn) {
      if (this.user.userType === 'ADMIN'){
        this.$router.push("/admin-service");
      }
      if (this.user.userType === 'MODERATOR'){
        this.$router.push("/moderator-service");
      }
      if (this.user.userType === 'STUDENT' || this.user.userType === 'PERSONNEL') {
        this.$router.push("/user-service");
      }
    }
  },
  mounted() {},
  methods: {
    redirectToRegisterPage() {
      this.$router.push("/user-register");
    },
    handleLogin(user) {
      this.loading = true;
      this.$store.dispatch("auth/login", user).then(
        () => {
          this.$router.push("/user-service");
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

<style></style>
