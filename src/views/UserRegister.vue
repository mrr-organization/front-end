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
              v-model="state.username"
            />
            <span v-if="v$.username.$error" class="font-semibold text-red-500 error-feedback" >
            {{ v$.username.$errors[0].$message }}
            </span>
          </div>
          <div class="flex flex-col form-group">
            <Field
              name="email"
              type="email"
              class="p-2 rounded form-control ring-1 ring-black"
              placeholder="Kmutt Email"
              v-model="state.email"
            />
           <span v-if="v$.email.$error" class="font-semibold text-red-500 error-feedback" >
            {{ v$.email.$errors[0].$message }}
            </span>
            
          </div>
          <div class="flex flex-col form-group">
            <Field
              name="fname"
              type="fname"
              class="p-2 rounded form-control ring-1 ring-black"
              placeholder="Firstname"
              v-model="state.fname"
            />
            <span v-if="v$.fname.$error" class="font-semibold text-red-500 error-feedback" >
            {{ v$.fname.$errors[0].$message }}
            </span>
          </div>
                    <div class="flex flex-col form-group">
            <Field
              name="lname"
              type="lname"
              class="p-2 rounded form-control ring-1 ring-black"
              placeholder="Lastname"
              v-model="state.lname"
            />
            <span v-if="v$.lname.$error" class="font-semibold text-red-500 error-feedback" >
            {{ v$.lname.$errors[0].$message }}
            </span>
          </div>
          <div class="flex flex-col form-group">
            <Field
              name="password"
              type="password"
              class="p-2 rounded form-control ring-1 ring-black"
              placeholder="Password"
              v-model="state.password.password"
            />
            <span v-if="v$.password.password.$error" class="font-semibold text-red-500 error-feedback" >
            {{ v$.password.password.$errors[0].$message }}
            </span>
          </div>
          <div class="flex flex-col form-group">
            <Field
              name="comfirmPassword"
              type="password"
              class="p-2 rounded form-control ring-1 ring-black"
              placeholder="Confirm password"
              v-model="state.password.comfirm"
            />
            <span v-if="v$.password.comfirm.$error" class="font-semibold text-red-500 error-feedback" >
            {{ v$.password.comfirm.$errors[0].$message }}
            </span>
          </div>
          <div class="flex flex-col form-group">
            <Field
              name="phone"
              type="text"
              class="p-2 rounded form-control ring-1 ring-black"
              placeholder="Phone number"
              v-model="state.phone"
            />
            <span v-if="v$.phone.$error" class="font-semibold text-red-500 error-feedback" >
            {{ v$.phone.$errors[0].$message }}
            </span>
          </div>        
        </div>
        <!-- สมัคร / ยกเลิก -->
        <div class="absolute left-0 right-0 flex flex-row justify-center mt-16 space-x-16 item-center">
              <button @click="submitForm"
                class="bg-[#384BB1] px-10 py-1 rounded"
              >
              <!-- :disabled="loading" -->
                <!-- <span
                  v-show="loading"
                  class="spinner-border spinner-border-sm"
                ></span> -->
                <span  class="text-xl font-semibold" style="color: #ffffff"
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

import { Form, Field } from "vee-validate";
import useValidate from '@vuelidate/core'
import {required, email, minLength, sameAs, helpers} from '@vuelidate/validators'
import {reactive, computed} from 'vue'
// import * as yup from "yup";
export default {
  name: "RegisterUser",
  components: { Form, Field },
  setup(){
    const state = reactive ({
      username: '',
      email: '',
      fname: '',
      lname: '',
      password: {
        password: '',
        comfirm: '',
      },
      phone: '',
    })
    
    const mustBekmuttmail = (value) => value.includes ('mail.kmutt.ac.th') 
 
    const rules = computed(() => {
      return {
        username: { required } ,
      email: { required, email, mustBekmuttmail: helpers.withMessage('Must be Kmutt Mail',mustBekmuttmail) },
      fname: { required },
      lname: { required },
      password: {
        password: { required, minLength:minLength(6) },
        comfirm: { required, sameAs: sameAs(state.password.password) },
      },
      phone: { required,minLength:minLength(9) },
      }
    })

    const v$ = useValidate(rules, state)

    return{
      state,
      v$,
    }
  },

 
  // data() {
  //   const schema = yup.object().shape({
  //     username: yup
  //       .string()
  //       .required("Username is required!")
  //       .min(6, "Must be at least 6 characters!")
  //       .max(255, "Must be maximum 255 characters!"),
  //     email: yup
  //       .string()
  //       .required("Email is required!")
  //       .email("Email is invalid!")
  //       .min(3, "Must be at least 3 characters!")
  //       .max(255, "Must be maximum 255 characters!"),
  //     fname: yup
  //       .string()
  //       .required("Firstname is required!")
  //       .min(3, "Must be at least 3 characters!")
  //       .max(255, "Must be maximum 255 characters!"),  
  //     lname: yup
  //       .string()
  //       .required("Lastname is required!")
  //       .min(3, "Must be at least 3 characters!")
  //       .max(255, "Must be maximum 255 characters!"),  
  //     password: yup
  //       .string()
  //       .required("Password is required!")
  //       .min(6, "Must be at least 6 characters!")
  //       .max(40, "Must be maximum 40 characters!"),
  //     comfirmPassword: yup
  //       .string()
  //       .required("Confirm password is required!")
  //       .min(6, "Must be at least 6 characters!")
  //       .max(40, "Must be maximum 40 characters!"),
  //     phone: yup
  //       .string()
  //       .required("Phone number is required!")
  //       .min(4, "Must be at least 4 number!")
  //       .max(10, "Must be maximum 10 number!"),
  //   });
  //   return {
  //     successful: false,
  //     loading: false,
  //     message: "",
  //     schema,
  //   };
  // },
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
    submitForm() {
      this.v$.$validate()
      if(!this.v$.$error){
        alert('Form successfully subyo')
      } else {
      alert('Form failed wa')
     }
    },
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