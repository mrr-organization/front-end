<template>
  <div class=" min-h-screen flex items-center justify-center">
      <div class=" w-full h-96 flex flex-row mx-10 ">
          <div class=" w-1/2 flex flex-col items-center justify-center border-r-2 border-black ">
         <div class="font-bold text-2xl fixed -mt-60" style="color:#312A21;">MRR</div>
             <Form @submit="handleLogin" :validation-schema="schema">
                
             <div class=" mt-10 flex flex-col item-center space-y-5 w-60">
                 <div class="form-group">
                    <Field name="username" type="text" class="form-control" placeholder="Email" />
                     <ErrorMessage name="username" class="error-feedback" />
                 </div>
                <div class="form-group">
                
                    <Field name="password" type="password" class="form-control" placeholder="Password"/>
                    <ErrorMessage name="password" class="error-feedback" />
                </div>
                <div class="form-group">
                <button class="btn btn-primary btn-block" :disabled="loading">
                <span
                v-show="loading"
                class="spinner-border spinner-border-sm"
                ></span>
                <span class="">Sign In</span>
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
          <div class=" w-1/2 flex flex-col items-center justify-center"> 
              <div class=" mt-10 flex flex-col item-center space-y-5 w-60">
                    <ButtonCom msg = "Sigh in with Google" class="p-3 "></ButtonCom>
                    <div class="font-semibold w-full flex items-center justify-center " style="color:#312A21;"><span class="w-4/5 h-0.5 bg-black mx-2"/> 
                     <div class="px-2"> or </div>
                    <span class="w-4/5 h-0.5 bg-black mx-2 "/></div>
                    <ButtonCom msg = "Register" class="p-3 "></ButtonCom>
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
          this.$router.push("/profile");
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