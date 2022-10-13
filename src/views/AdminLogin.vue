<template>
  <div class="flex flex-col items-center justify-center h-screen">
    <div class="flex flex-row justify-around w-full mt-10 item-center">
      <h1 class="text-3xl font-semibold" style="color: #312a21">
        หน่วยงาน / ผู้ดูแลระบบ
      </h1>
    </div>
    <Form @submit="handleLogin" :validation-schema="schema">
      <div class="flex flex-col mt-10 space-y-4 item-center w-72">
        <div class="form-group">
          <Field
            name="username"
            type="text"
            class="form-control ring-1 ring-black"
            placeholder="Email"
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
            <span class="text-xl font-semibold" style="color: #ffffff"
              >เข้าสู่ระบบ</span
            >
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
</template>

<script>
import { Form, Field, ErrorMessage } from "vee-validate";
import * as yup from "yup";
export default {
  components: { Form, Field, ErrorMessage },
  data() {
    const schema = yup.object().shape({
      username: yup.string().required("Email is required!"),
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
      this.$router.push("/adminlogin");
    }
  },
  methods: {
    handleLogin(user) {
      this.loading = true;
      this.$store.dispatch("auth/login", user).then(
        () => {
          this.$router.push("/mainadmin");
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