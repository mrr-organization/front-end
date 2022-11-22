<template>
    <div class="flex flex-col items-center justify-center h-screen">
      <Form @submit="sendEmailForgetPassword" :validation-schema="schema">
        <div class="flex flex-col mt-10 space-y-5 item-center w-60">
            <div class="flex flex-col form-group">
            <Field
              name="password"
              type="password"
              class="p-2 rounded form-control ring-1 ring-black"
              placeholder="รหัสผ่าน"
            />
            <ErrorMessage name="password" class="text-sm font-semibold text-red-500 error-feedback sm:text-lg" />
          </div>
          <div class="flex flex-col form-group">
            <Field
              name="comfirmPassword"
              type="password"
              class="p-2 rounded form-control ring-1 ring-black"
              placeholder="ยืนยันรหัสผ่าน"
            />
            <ErrorMessage name="comfirmPassword" class="text-sm font-semibold text-red-500 error-feedback sm:text-lg" />
          </div>
          <div class="form-group">
            <button
              class="p-2 rounded btn btn-block"
              style="background-color: #384bb1"
              :disabled="loading"
            >
              <span
                v-show="loading"
                class="spinner-border spinner-border-sm"
              ></span>
              <span class="text-xl font-semibold" style="color: #ffffff">
                ยืนยันเปลี่ยนรหัสผ่าน
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
  </template>
  <script>
  import { Form, Field, ErrorMessage } from "vee-validate";
  import * as yup from "yup";
  import AuthService from "@/services/auth.service";
  export default {
    components: { Form, Field, ErrorMessage },
    data() {
      const schema = yup.object().shape({
        password: yup
        .string()
        .required("Password is required!")
        .min(6, "Must be at least 6 characters!")
        .max(40, "Must be maximum 40 characters!"),
      comfirmPassword: yup
        .string()
        .required("ConfirmPassword is required!")
        .min(6, "Must be at least 6 characters!")
        .oneOf([yup.ref('password')], 'Passwords do not match')
      });
      return {
        loading: false,
        message: "",
        schema,
      };
    },
    methods: {
      sendResetPassword (schema) {
          AuthService.resetPassword(this.$route.params.code, schema);
      }
    }
  };
  </script>
  