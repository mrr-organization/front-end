<template>
    <div class="flex flex-col items-center justify-center h-screen">
      <Form @submit="sendEmailForgetPassword" :validation-schema="schema">
        <div class="flex flex-col p-2 mt-10 space-y-5 bg-white bg-opacity-75 rounded w-72 h-72 item-center">
          <div>
            <h1 class="text-lg font-bold text-[#312A21]">รีเซ็ตรหัสผ่าน</h1>
          </div>
            <div class="flex flex-col form-group">
            <Field
              name="password"
              type="password"
              class="p-2 rounded form-control ring-1 ring-black"
              placeholder="รหัสผ่านใหม่"
            />
            <ErrorMessage name="password" class="text-sm font-semibold text-red-500 error-feedback sm:text-lg" />
          </div>
          <div class="flex flex-col form-group">
            <Field
              name="comfirmPassword"
              type="password"
              class="p-2 rounded form-control ring-1 ring-black"
              placeholder="ยืนยันรหัสผ่านใหม่"
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
        .required("ต้องการรหัสผ่าน!")
        .min(6, "ต้องมีตัวอักษรอย่างน้อย 6 ตัว!")
        .max(40, "ต้องมีความยาวไม่เกิน 40 อักษร!"),
      comfirmPassword: yup
        .string()
        .required("ต้องยืนยันรหัสผ่าน!")
        .min(6, "ต้องมีตัวอักษรอย่างน้อย 6 ตัว!")
        .oneOf([yup.ref('password')], 'รหัสผ่านไม่ตรงกัน')
      });
      return {
        loading: false,
        message: "",
        schema,
      };
    },
    methods: {
      sendResetPassword (password) {
          AuthService.resetPassword(this.$route.params.code, password).then(
            this.$router.push('/user-login')
        );
      }
    }
  };
  </script>
  