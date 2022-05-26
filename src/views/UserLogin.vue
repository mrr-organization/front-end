<template>
  <div class="flex items-center justify-center min-h-screen ">
      <div class="flex flex-row w-full mx-10 h-96">
          <div class="flex flex-col items-center justify-center w-1/2 border-r-2 border-black ">
         <div class="fixed text-2xl font-bold -mt-60" style="color:#312A21;">MRR</div>
              <Form @submit="handleLogin" :validation-schema="schema">
               
             <div class="flex flex-col mt-10 space-y-5 item-center w-60">
                 <div class="form-group">
                    <Field name="username" type="text" class="form-control ring-1 ring-black" placeholder="Email" />
                     <ErrorMessage name="username" class="error-feedback" />
                 </div>
                <div class="form-group">
                
                    <Field name="password" type="password" class="form-control ring-1 ring-black" placeholder="Password"/>
                    <ErrorMessage name="password" class="error-feedback" />
                </div>
                <div class="form-group">
                <button class="btn btn-block" style="background-color: #FEF1E6;"  :disabled="loading">
                <span
                v-show="loading"
                class="spinner-border spinner-border-sm"
                ></span>
                <span class="text-xl font-semibold" style="color:#312A21;">Sign In</span>
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
          <div class="flex flex-col items-center justify-center w-1/2 "> 
              <div class="flex flex-col mt-10 space-y-5 item-center w-60">
                    <ButtonCom msg = "Sigh in with Google" class="p-3 "></ButtonCom>
                    <div class="flex items-center justify-center w-full font-semibold " style="color:#312A21;"><span class="w-4/5 h-0.5 bg-black mx-2"/> 
                     <div class="px-2"> or </div>
                    <span class="w-4/5 h-0.5 bg-black mx-2 "/></div>
                   <router-link to="/register"><ButtonCom msg = "Register" class="p-3 "></ButtonCom></router-link>
    </div>
              </div>
          
      </div>
      
  </div>
</template>


<script>
import ButtonCom from "@/components/ButtonCom.vue"
import { Form, Field, ErrorMessage } from "vee-validate";
import * as yup from "yup";
export default {
    name: "SignIn",
    components :{  ButtonCom, Form, Field, ErrorMessage},
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
      this.$router.push("/profile");
    }
  },
  methods: {
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
}

</script>

<style>

</style>