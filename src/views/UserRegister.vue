<template>
  <div class="items-center justify-center">
    <div class="flex items-center justify-center p-4 mt-16">
      <h1 class="text-3xl font-semibold" style="color: #312a21">
        สมัครใช้งาน MMR
      </h1>
    </div>
    <div class="mt-10 mx-96">
      <Form @submit="handleRegister" :validation-schema="schema">
        <div v-if="!successful" class="flex flex-row justify-between">
          <div class="grid grid-rows-7 grid-col-2 gap-4 m-10 w-3/4">
            <div class="form-group">
              <Field
                name="username"
                type="username"
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
                name="email"
                type="email"
                class="p-2 rounded form-control ring-1 ring-black"
                placeholder="your email"
              />
              <ErrorMessage
                name="email"
                class="font-semibold text-red-500 error-feedback"
              />
            </div>
            <div class="form-group">
              <Field
                name="fname"
                type="fname"
                class="p-2 rounded form-control ring-1 ring-black"
                placeholder="first name"
              />
              <ErrorMessage
                name="fname"
                class="font-semibold text-red-500 error-feedback"
              />
            </div>
            <div class="form-group">
              <Field
                name="lname"
                type="lname"
                class="p-2 rounded form-control ring-1 ring-black"
                placeholder="last name"
              />
              <ErrorMessage
                name="lname"
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
              <Field
                name="comfirmPassword"
                type="comfirmPassword"
                class="p-2 rounded form-control ring-1 ring-black"
                placeholder="Confirm password"
              />
              <ErrorMessage
                name="comfirmPassword"
                class="font-semibold text-red-500 error-feedback"
              />
            </div>
            <div class="form-group">
              <Field
                name="phone"
                type="phone"
                class="p-2 rounded form-control ring-1 ring-black"
                placeholder="Phone number"
              />
              <ErrorMessage
                name="phone"
                class="font-semibold text-red-500 error-feedback"
              />
            </div>
          </div>

          <div class="flex-row w-3/4 h-72 m-10">
            <div class="w-3/4 h-3/5 bg-white opacity-50 m-auto">
              <div class="form-group">
              <input
                class="text-xl"
                type="checkbox"
                id="dept"
                v-model="triggerDept"
                :disabled="triggerFaculty"
              />
              <label for="dept">หน่วยงานที่สังกัด</label>
              <div v-show="triggerDept">
                  <Field name="deptId" as="select">
                    <option value="" disabled>Select a department</option>
                    <option
                      v-for="item in deptRegisList"
                      :key="item.deptId"
                      :value="item.deptId"
                    >
                      {{ item.deptName }}
                    </option>
                  </Field>
              </div>
            </div>
            </div>
            <div class="w-3/4 h-3/5 bg-white opacity-50 m-auto mt-9">
              <div class="form-group">
              <div>
                <input
                  class="text-xl"
                  type="checkbox"
                  id="faculty"
                  v-model="triggerFaculty"
                  :disabled="triggerDept"
                />
                <label for="faculty">คณะ</label>
                <div v-show="triggerFaculty">
                    <Field v-model="facultyId" name="facultyId" as="select">
                      <option value="" disabled>Select a faculty</option>
                      <option
                        v-for="item in facultyRegisList"
                        :key="item.facultyId"
                        :value="item.facultyId"
                      >
                        {{ item.facultyName }}
                      </option>
                    </Field>
                </div>
              </div>
              <div v-show="triggerFaculty && facultyId != 0">
                <label for="major">ภาควิชา / สาขา</label>
                  <Field name="majorId" as="select">
                    <option value="" disabled>Select a major</option>
                    <option
                      v-for="item in majorFilter"
                      :key="item.majorId"
                      :value="item.majorId"
                    >
                      {{ item.majorName }}
                    </option>
                  </Field>

              </div>
            </div>
            </div>
          </div>
        </div>
        <!-- สมัคร / ยกเลิก -->
        <div class="flex flex-row justify-between mt-5 item-center">
          <button type="submit" class="bg-[#384BB1] px-10 py-1 rounded" :disabled="loading">
            <span
              v-show="loading"
              class="spinner-border spinner-border-sm"
            ></span>
            <span class="text-xl font-semibold" style="color: #ffffff"
              >สมัคร</span
            >
          </button>
          <router-link to="/user-login"
            ><button class="bg-[#FC2525] px-10 py-1 rounded">
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
import MajorService from "@/services/major.service";
import FacultyService from "@/services/faculty.service";
import DepartmentService from "@/services/dept.service";
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
      deptId : yup
        .string()
        .required("Phone number is required!")
        .min(4, "Must be at least 4 number!")
        .max(10, "Must be maximum 10 number!"),
      facultyId : yup
        .string()
        .required("Phone number is required!")
        .min(4, "Must be at least 4 number!")
        .max(10, "Must be maximum 10 number!"),
      majorId : yup
        .string()
        .required("Phone number is required!")
        .min(4, "Must be at least 4 number!")
        .max(10, "Must be maximum 10 number!"),
    });

    return {
      facultyId: 0,
      loading: false,
      triggerDept: false,
      triggerFaculty: false,

      message: "",
      schema,
      deptRegisList: [],
      facultyRegisList: [],
      majorRegisList: [],
    };
  },
  computed: {
    loggedIn() {
      return this.$store.state.auth.status.loggedIn;
    },
    majorFilter() {
      return this.majorRegisList.filter((item) => {
        return item.facultyId == this.facultyId;
      });
    },
  },
  created() {
    if (this.loggedIn) {
      this.$router.push("/user-register");
    }
    this.getFaculty();
    this.getDepartment();
    this.getMajor();
  },
  methods: {
    async getFaculty() {
      await FacultyService.getAllFaculty().then((response) => {
        this.facultyRegisList = response.data.responseData;
      });
    },
    async getMajor() {
      await MajorService.getAllMajor().then((response) => {
        this.majorRegisList = response.data.responseData;
      });
    },
    getDepartment() {
      DepartmentService.getAllDepartments().then((response) => {
        this.deptRegisList = response.data.responseData;
      });
    },
    handleRegister(user) {
      if (this.triggerFaculty) {
        user.userType = "STUDENT";
        user.deptId = 0;
        console.log(user.deptId);
      }
      if (this.triggerDept) {
        user.facultyId = 0;
        user.majorId = 0;
        user.userType = "PERSONNEL";
        console.log(user.facultyId);
      }
      console.log(user);
      this.message = "";
      this.successful = false;
      this.loading = true;
      this.$store.dispatch("auth/register", user).then(
        () => {
          this.$router.push("/user-loin");
        },
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

<style></style>
