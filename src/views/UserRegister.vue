<template>
    <div class="flex flex-col items-center justify-center max-w-6xl mt-16 sm:max-w-full sm:mt-28">
      <h1 class="text-3xl font-semibold " style="color: #312a21">
        สมัครใช้งาน MMR
      </h1>
    <div class="flex flex-col justify-center mt-10 sm:flex-row item-center ">
      <Form @submit="handleRegister" :validation-schema="schema">
        <div v-if="!successful" class="flex flex-col justify-between " >
          <div class="flex flex-col space-x-8 sm:space-x-72 sm:flex-row ">
          <div class="flex flex-col items-center justify-center gap-4 ">
           <div class="flex flex-col form-group">
            <Field
              name="username"
              type="username"
              class="p-2 rounded form-control ring-1 ring-black"
              placeholder="ชื่อผู้ใช้"
            />
            <ErrorMessage name="username" class="text-sm font-semibold text-red-500 sm:text-lg error-feedback " />
          </div>
          <div class="flex flex-col form-group">
            <Field
              name="email"
              type="email"
              class="p-2 rounded form-control ring-1 ring-black"
              placeholder="email@mail.kmutt.ac.th"
            />
            <ErrorMessage name="email" class="text-sm font-semibold text-red-500 error-feedback sm:text-lg" />
          </div>
          <div class="flex flex-col form-group">
            <Field
              name="fname"
              type="fname"
              class="p-2 rounded form-control ring-1 ring-black"
              placeholder="ชื่อจริง"
            />
            <ErrorMessage name="fname" class="text-sm font-semibold text-red-500 error-feedback sm:text-lg" />
          </div>
            <div class="flex flex-col form-group">
            <Field
              name="lname"
              type="lname"
              class="p-2 rounded form-control ring-1 ring-black"
              placeholder="นามสกุล"
            />
            <ErrorMessage name="lname" class="text-sm font-semibold text-red-500 error-feedback sm:text-lg" />
          </div>
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
          <div class="flex flex-col form-group">
            <Field
              name="phone"
              type="text"
              class="p-2 rounded form-control ring-1 ring-black"
              placeholder="เบอร์ติดต่อ"
            />
            <ErrorMessage name="phone" class="text-sm font-semibold text-red-500 error-feedback sm:text-lg" />
          </div>
        </div>
          <div class="flex flex-col justify-center w-full mt-12 sm:mt-2">
            <div class="w-80 p-3 bg-[#FAF0EF]  h-32 rounded">
              <input
                class="text-xl "
                type="checkbox"
                id="dept"
                v-model="triggerDept"
                :disabled="triggerFaculty"
              />
              <label for="dept" class="ml-2 font-bold">หน่วยงานที่สังกัด</label>
              <div v-show="triggerDept">
                <div class=" form-group -1">
                <Field class="w-64 rounded-sm form-control ring-1 ring-black" v-model="deptId" name="deptId" as="select">
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
            <div class="w-80 p-3 bg-[#FAF0EF] form-group h-32 mt-9 rounded ">
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
                  <div class=" form-group">
                  <Field class="rounded-sm form-control ring-1 ring-black" v-model="facultyId" name="facultyId" as="select">
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
                <label for="major" class="ml-2 font-bold">ภาควิชา / สาขา</label>
                <div class="form-group">
                  <Field  class="w-64 rounded-sm form-control ring-1 ring-black" name="majorId" as="select">
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
            <div class="flex flex-row justify-center mt-16 space-x-12 item-center">
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
                ><button
                class="bg-[#FC2525] px-10 py-1 rounded"
              >
                <span class="text-xl font-semibold" style="color: #ffffff"
                  >ยกเลิก</span
                >
              </button>
                </router-link>
            </div>
        </div>
      </Form>
    </div>
  </div>
    <div
      v-if="message"
      class="alert"
      :class="successful ? 'alert-success' : 'alert-danger'"
    >
      {{ message }}
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
        .required("ต้องระบุชื่อผู้ใช้!")
        .min(6, "ต้องมีตัวอักษรอย่างน้อย 6 ตัว!")
        .max(255, "มีความยาวสูงสุดได้แค่ 255 อักษร!"),
      email: yup
        .string()
        .required("จำเป็นต้องใช้อีเมล!")
        .email("อีเมลไม่ถูกต้อง!")
        .min(3, "ต้องมีตัวอักษรอย่างน้อย 3 ตัว!")
        .max(255, "มีความยาวสูงสุดได้แค่ 255 อักษร!"),
      fname: yup
        .string()
        .required("ต้องระบุชื่อ!")
        .min(3, "ต้องมีตัวอักษรอย่างน้อย 3 ตัว!")
        .max(255, "มีความยาวสูงสุดได้แค่ 255 อักษร!"),  
      lname: yup
        .string()
        .required("ต้องระบุนามสกุล!")
        .min(3, "ต้องมีตัวอักษรอย่างน้อย 3 ตัว!")
        .max(255, "มีความยาวสูงสุดได้แค่ 255 อักษร!"),  
      password: yup
        .string()
        .required("ต้องการรหัสผ่าน!")
        .min(6, "ต้องมีตัวอักษรอย่างน้อย 6 ตัว!")
        .max(40, "มีความยาวสูงสุดได้แค่ 40 อักษร!"),
      comfirmPassword: yup
        .string()
        .required("ต้องยืนยันรหัสผ่าน!")
        .min(6, "ต้องมีตัวอักษรอย่างน้อย 6 ตัว!")
        .oneOf([yup.ref('password')], 'รหัสผ่านไม่ตรงกัน'),
      phone: yup
        .string()
        .required("ต้องระบุหมายเลขโทรศัพท์!")
        .min(10, "ต้องมีหมายเลขโทรศัพท์อย่างน้อย 9 ตัว!")
        .max(10, "ต้องไม่เกิน 10 หมายเลขโทรศัพท์!"),
    });
    return {
      successful: false,
      facultyId: 0,
      deptId: 0,
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
    },
    user() {
      return this.$store.state.auth.user;
    }
  },
  created() {
    if (this.loggedIn) {
      if (this.user.userType === 'ADMIN'){
        this.$router.push("/admin-service");
      }
      if (this.user.userType === 'MODERATOR'){
        this.$router.push("/moderator-service");
      }
      if (this.user.userType === 'STUDENT' || this.user.userType === 'PERSONNEL') {
        this.$router.push("/user-service");
      }
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
          console.log(data)
          this.message = data.responseData.message;
          if (data.responseCode == "200") {
            this.successful = true;
            this.$router.push("/user-login");
          }
          console.log(this.message)
          console.log(this.successful)
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