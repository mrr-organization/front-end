<template>
  <div class="flex flex-col items-center justify-center h-screen">
    <div class="flex items-center justify-center p-5">
      <h1 class="text-3xl font-semibold" style="color: #312a21">
        Register MRR
      </h1>
    </div>
    <div class="flex flex-col space-y-8 item-center w-72">
      <Form @submit="handleRegister" :validation-schema="schema">
        <div v-if="!successful">
          <div class="form-group">
            <Field
              name="email"
              type="email"
              class="form-control ring-1 ring-black"
              placeholder="email@mail.kmutt.ac.th"
            />
            <ErrorMessage name="email" class="error-feedback" />
          </div>
          <div class="form-group">
            <Field
              name="password"
              type="password"
              class="form-control ring-1 ring-black"
              placeholder="Password"
            />
            <ErrorMessage name="password" class="error-feedback" />
          </div>
          <div class="form-group">
            <Field
              name="comfirmPassword"
              type="password"
              class="form-control ring-1 ring-black"
              placeholder="Confirm password"
            />
            <ErrorMessage name="comfirmPassword" class="error-feedback" />
          </div>
          <div class="form-group">
            <Field
              name="phone"
              type="text"
              class="form-control ring-1 ring-black"
              placeholder="Phone number"
            />
            <ErrorMessage name="phone" class="error-feedback" />
          </div>
          <div class="form-group">
            <div class="flex flex-row w-64 mt-5 space-x-16 item-center">
              <button
                class="btn btn-block"
                style="background-color: #fef1e6"
                :disabled="loading"
              >
                <span
                  v-show="loading"
                  class="spinner-border spinner-border-sm"
                ></span>
                <span class="text-xl font-semibold" style="color: #312a21"
                  >Register</span
                >
              </button>
              <router-link to="/UserLogin"
                ><ButtonCom
                  msg="Cancel"
                  class="p-3 text-white"
                  style="background-color: #f25f54"
                ></ButtonCom
              ></router-link>
            </div>
          </div>
        </div>
      </Form>
    </div>
    <div
      v-if="message"
      class="alert"
      :class="successful ? 'alert-success' : 'alert-danger'"
    >
      {{ message }}
    </div>
  </div>
</template>

<script>
import ButtonCom from "@/components/ButtonCom.vue";
import { Form, Field, ErrorMessage } from "vee-validate";
import * as yup from "yup";
export default {
  name: "RegisterUser",
  components: { ButtonCom, Form, Field, ErrorMessage },
  data() {
    const schema = yup.object().shape({
      email: yup
        .string()
        .required("Email is required!")
        .email("Email is invalid!")
        .min(3, "Must be at least 3 characters!")
        .max(20, "Must be maximum 20 characters!"),
      password: yup
        .string()
        .required("Password is required!")
        .max(50, "Must be maximum 50 characters!"),
      comfirmPassword: yup
        .string()
        .required("Confirm password is required!")
        .min(6, "Must be at least 6 characters!")
        .max(40, "Must be maximum 40 characters!"),
      phone: yup
        .string()
        .required("Phone number is required!")
        .min(4, "Must be at least 4 number!")
        .max(10, "Must be maximum 10 number!"),
    });
    return {
      successful: false,
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
  mounted() {
    if (this.loggedIn) {
      this.$router.push("/register");
    }
  },
  methods: {
    handleRegister(user) {
      this.message = "";
      this.successful = false;
      this.loading = true;
      this.$store.dispatch("auth/register", user).then(
        (data) => {
          this.message = data.message;
          this.successful = true;
          this.loading = false;
        },
        (error) => {
          this.message =
            (error.response &&
              error.response.data &&
              error.response.data.message) ||
            error.message ||
            error.toString();
          this.successful = false;
          this.loading = false;
        }
      );
    },
  },
};
</script>

<style>
</style>