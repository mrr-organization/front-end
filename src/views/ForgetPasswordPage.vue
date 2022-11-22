<template>
  <div class="flex flex-col items-center justify-center h-screen ">
    <Form @submit="sendEmailForgetPassword" :validation-schema="schema">
      <div class="flex flex-col w-64 mt-10 space-y-5 bg-white bg-opacity-75 rounded h-54 item-center">
        <div>
            <h1 class="text-lg font-bold text-[#312A21] mt-2">รีเซ็ตรหัสผ่าน</h1>
          </div>
        <div class="form-group">
          <Field
            name="username"
            type="text"
            class="p-2 rounded form-control ring-1 ring-black"
            placeholder="ชื่อผู้ใช้หรืออีเมล"
          /><br>
          <ErrorMessage
            name="username"
            class="font-semibold text-red-500 error-feedback "
          />
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
            <span class="text-xl font-semibold " style="color: #ffffff">
              ส่งยืนยันตัวตน
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
      username: yup
        .string()
        .required("ต้องระบุชื่อผู้ใช้หรืออีเมล!")
        .max(255, "ต้องมีความยาวไม่เกิน 255 อักษร!"),
    });
    return {
      loading: false,
      message: "",
      schema,
    };
  },
  methods: {
    sendEmailForgetPassword (username) {
        AuthService.forgetPassword(username);
    }
  }
};
</script>
