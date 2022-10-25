<template>
  <div class="items-center justify-center ">
    <div class="flex items-center justify-center p-4 mt-16">
      <h1 class="text-3xl font-semibold " style="color: #312a21">
        สมัครใช้งาน MMR
      </h1>
    </div>
    <div class="flex mt-10 mx-96">
      <Form @submit="handleRegister" :validation-schema="schema">
        <div v-if="!successful" class="space-y-5">
        <div class="flex flex-col form-group">
            <Field
              name="username"
              type="username"
              class="p-2 rounded form-control ring-1 ring-black"
              placeholder="Username"
            />
            <ErrorMessage name="username" class="font-semibold text-red-500 error-feedback" />
          </div>
          <div class="flex flex-col form-group">
            <Field
              name="email"
              type="email"
              class="p-2 rounded form-control ring-1 ring-black"
              placeholder="Email@mail.kmutt.ac.th"
            />
            <ErrorMessage name="email" class="font-semibold text-red-500 error-feedback" />
          </div>
          <div class="flex flex-col form-group">
            <Field
              name="fname"
              type="fname"
              class="p-2 rounded form-control ring-1 ring-black"
              placeholder="Firstname"
            />
            <ErrorMessage name="fname" class="font-semibold text-red-500 error-feedback" />
          </div>
                    <div class="flex flex-col form-group">
            <Field
              name="lname"
              type="lname"
              class="p-2 rounded form-control ring-1 ring-black"
              placeholder="Lastname"
            />
            <ErrorMessage name="lname" class="font-semibold text-red-500 error-feedback" />
          </div>
          <div class="flex flex-col form-group">
            <Field
              name="password"
              type="password"
              class="p-2 rounded form-control ring-1 ring-black"
              placeholder="Password"
            />
            <ErrorMessage name="password" class="font-semibold text-red-500 error-feedback" />
          </div>
          <div class="flex flex-col form-group">
            <Field
              name="comfirmPassword"
              type="password"
              class="p-2 rounded form-control ring-1 ring-black"
              placeholder="Confirm password"
            />
            <ErrorMessage name="comfirmPassword" class="font-semibold text-red-500 error-feedback" />
          </div>
          <div class="flex flex-col form-group">
            <Field
              name="phone"
              type="text"
              class="p-2 rounded form-control ring-1 ring-black"
              placeholder="Phone number"
            />
            <ErrorMessage name="phone" class="font-semibold text-red-500 error-feedback" />
          </div>        
        </div>
        <!-- สมัคร / ยกเลิก -->
        <div class="absolute left-0 right-0 flex flex-row justify-center mt-16 space-x-16 item-center">
              <button
                class="bg-[#384BB1] px-10 py-1 rounded"
                :disabled="loading"
              >
                <span
                  v-show="loading"
                  class="spinner-border spinner-border-sm"
                ></span>
                <span class="text-xl font-semibold" style="color: #ffffff"
                  >สมัคร</span
                >
              </button>
              <router-link to="/UserLogin"
                ><button
                class="bg-[#FC2525] px-10 py-1 rounded"
              >
                <span class="text-xl font-semibold" style="color: #ffffff"
                  >ยกเลิก</span
                >
              </button>
                </router-link>
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

import { Form, Field, ErrorMessage } from "vee-validate";
import * as yup from "yup";
export default {
  name: "RegisterUser",
  components: { Form, Field, ErrorMessage },
  data() {
    const schema = yup.object().shape({
      username: yup
        .string()
        .required("Username is required!")
        .min(6, "Must be at least 6 characters!")
        .max(255, "Must be maximum 255 characters!"),
      email: yup
        .string()
        .required("Email is required!")
        .email("Email is invalid!")
        .min(3, "Must be at least 3 characters!")
        .max(255, "Must be maximum 255 characters!"),
      fname: yup
        .string()
        .required("Firstname is required!")
        .min(3, "Must be at least 3 characters!")
        .max(255, "Must be maximum 255 characters!"),  
      lname: yup
        .string()
        .required("Lastname is required!")
        .min(3, "Must be at least 3 characters!")
        .max(255, "Must be maximum 255 characters!"),  
      password: yup
        .string()
        .required("Password is required!")
        .min(6, "Must be at least 6 characters!")
        .max(40, "Must be maximum 40 characters!"),
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
      console.log(user)
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