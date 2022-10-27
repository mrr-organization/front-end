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
          <div class="grid w-3/4 gap-4 m-10 grid-rows-7 grid-col-2">
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

          <div class="w-3/4 m-10 sm:flex-row h-72">
            <div class="w-3/4 m-auto bg-[#FAF0EF] h-3/5">
              <input
                class="text-xl "
                type="checkbox"
                id="dept"
                v-model="triggerDept"
                :disabled="triggerFaculty"
              />
              <label for="dept" class="ml-2 font-bold">หน่วยงานที่สังกัด</label>
              <div v-show="triggerDept">
                <div class="form-group ">
                <Field name="deptId" class=" ring-1 ring-black" as="select">
                  <option value=""  disabled>Select a department</option>
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
            <div class="w-3/4 m-auto bg-[#FAF0EF] form-group h-3/5 mt-9">
              <div>
                <input
                  class="text-xl"
                  type="checkbox"
                  id="faculty"
                  v-model="triggerFaculty"
                  :disabled="triggerDept"
                />
                <label for="faculty" class="ml-2 font-bold">คณะ</label>
                <div v-show="triggerFaculty">
                  <div class="form-group">
                  <Field v-model="facultyId" class="ring-1 ring-black" name="facultyId" as="select">
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
              </div>
              <div v-show="triggerFaculty && facultyId != 0">
                <label for="major">ภาควิชา / สาขา</label>
                <div class="form-group">
                  <Field  name="majorId" as="select">
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
        <div class="flex flex-row justify-center mt-5 space-x-14 item-center">  
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
export default {
  name: "RegisterUser",
  components: { Form, Field, ErrorMessage },
  data() {
    const schema = {
      username(value) {
        // validate email value and return messages...
        if (!value) {
          return "need";
        }
        return true;
      },
      password(value) {
        // validate password value and return messages...
        if (!value) {
          return "need";
        }
        return true;
      },
      email(value) {
        // validate password value and return messages...
        if (!value) {
          return "need";
        }
        return true;
      },
      fname(value) {
        // validate password value and return messages...
        if (!value) {
          return "need";
        }
        return true;
      },
      lname(value) {
        // validate password value and return messages...
        if (!value) {
          return "need";
        }
        return true;
      },
      comfirmPassword(value) {
        // validate password value and return messages...
        if (!value) {
          return "need";
        }
        return true;
      },
      phone(value) {
        // validate password value and return messages...
        if (!value) {
          return "need";
        }
        return true;
      },
      deptId(value) {
        // validate password value and return messages...
        if (!value) {
          return "need";
        }
        return true;
      },
      facultyId(value) {

        // validate password value and return messages...
        if (!value) {
          return "need";
        }
        return true;
      },
      majorId(value) {
        // validate password value and return messages...
        if (!value) {
          return "need";
        }
        return true;
      },
    };
    return {
      successful: false,
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
    majorFilter(){
      return this.majorRegisList.filter(item => {
        return item.facultyId == this.facultyId;
      })
    }
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
      if (this.triggerFaculty){
        user.userType = 'STUDENT'
        user.deptId = 0
        console.log(user.deptId)
      }
      if (this.triggerDept){
        user.facultyId = 0
        user.majorId = 0
        user.userType = 'PERSONNEL'
        console.log(user.facultyId)
      }
      console.log(user);
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

<style></style>
