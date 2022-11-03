<template>
  <div class="relative">
    <div
      class="fixed top-0 left-0 right-0 flex flex-row bg-white"
    >
      <!-- bars -->
      <div class="w-1/3 flex justify-start">
        <div v-show="loggedIn">
          <!-- Menu -->
          <!-- onClick = false -->
          <div @click="onClick" v-if="!statusClick">
            <button >
              <font-awesome-icon icon="bars" size="2xl" class="mt-2 ml-4 pb-2"/>
            </button>
          </div>
          <div @click="onClick" v-if="statusClick">
            <button class="mt-2 ml-4 text-xl font-bold uppercase">
              <font-awesome-icon icon="xmark" size="2xl" /> close
            </button>
          </div>

          <!-- onClick = true -->
          <div
            @click="onClick"
            v-if="statusClick"
            class="fixed bottom-0 bg-white w-[350px] top-12 border-t-2 border-t-black"
          >
            <div
              v-if="user.userType === menuType[0]"
              class="mt-6 space-y-5 space-x-9"
            >
              <router-link
                to="/admin/profile"
                class="flex text-xl font-semibold text-black hover:text-black hover:no-underline ml-9"
              >
                <img src="../assets/Usernav.svg" />
                <span class="self-center ml-4">บัญชี</span>
              </router-link>
              <button
                @click="handleClickNoti"
                class="flex text-xl font-semibold text-black hover:text-black hover:no-underline"
              >
                <img src="../assets/ring.svg" />
                <span class="self-center ml-4">การแจ้งเตือน</span>
              </button>
              <router-link
                to="/dashboard"
                class="flex text-xl font-semibold text-black hover:text-black hover:no-underline"
              >
                <img src="../assets/dashboard.svg" />
                <span class="self-center ml-4">แดชบอร์ด</span>
              </router-link>
              <router-link
                to="/admin/manage-member"
                class="flex text-xl font-semibold text-black hover:text-black hover:no-underline"
              >
                <img src="../assets/manageacc.svg" />
                <span class="self-center ml-4">จัดการบัญชี</span>
              </router-link>
              <router-link
                to="/admin/repair-list"
                class="flex text-xl font-semibold text-black hover:text-black hover:no-underline"
              >
                <img src="../assets/statusrepair.svg" />
                <span class="self-center ml-4">อัพเดทหน่วยงาน</span>
              </router-link>
            </div>
            <div
              v-if="user.userType === menuType[1]"
              class="mt-6 space-y-5 space-x-9"
            >
              <router-link
                to="/admin/profile"
                class="flex text-xl font-semibold text-black ml-9 hover:text-black hover:no-underline"
              >
                <img src="../assets/Usernav.svg" />
                <span class="self-center ml-4">บัญชี</span>
              </router-link>
              <button
                @click="handleClickNoti"
                class="flex text-xl font-semibold text-black hover:text-black hover:no-underline"
              >
                <img src="../assets/ring.svg" />
                <span class="self-center ml-4">การแจ้งเตือน</span>
              </button>
              <router-link
                to="/dashboard"
                class="flex text-xl font-semibold text-black hover:text-black hover:no-underline"
              >
                <img src="../assets/dashboard.svg" />
                <span class="self-center ml-4">แดชบอร์ด</span>
              </router-link>
              <router-link
                to="/admin/repair-list/department"
                class="flex text-xl font-semibold text-black hover:text-black hover:no-underline"
              >
                <img src="../assets/notirepair.svg" />
                <span class="self-center ml-4">รายการแจ้งซ่อม</span>
              </router-link>
              <router-link
                to="/admin/edit/repair-status"
                class="flex text-xl font-semibold text-black hover:text-black hover:no-underline"
              >
                <img src="../assets/statusrepair.svg" />
                <span class="self-center ml-4">สถานะแจ้งซ่อม</span>
              </router-link>
            </div>
            <div
              v-if="
                user.userType === menuType[2] || user.userType === menuType[3]
              "
              class="mt-6 space-y-8 space-x-9"
            >
              <router-link
                to="/user/profile"
                class="flex text-xl font-semibold text-black hover:text-black hover:no-underline ml-9"
              >
                <img src="../assets/Usernav.svg" />
                <span class="self-center ml-4">บัญชี</span>
              </router-link>
              <button
                @click="handleClickNoti"
                class="flex text-xl font-semibold text-black hover:text-black hover:no-underline"
              >
                <img src="../assets/ring.svg" />
                <span class="self-center ml-4">การแจ้งเตือน</span>
              </button>
              <router-link
                to="/dashboard"
                class="flex text-xl font-semibold text-black hover:text-black hover:no-underline"
              >
                <img src="../assets/dashboard.svg" />
                <span class="self-center ml-4">แดชบอร์ด</span>
              </router-link>
              <router-link
                to="/user/repair-notification"
                class="flex text-xl font-semibold text-black hover:text-black hover:no-underline"
              >
                <img src="../assets/notirepair.svg" />
                <span class="self-center ml-4">แจ้งซ่อม</span>
              </router-link>
              <router-link
                to="/user/track-repair"
                class="flex text-xl font-semibold text-black hover:text-black hover:no-underline"
              >
                <img src="../assets/track.svg" />
                <span class="self-center ml-4">ติดตามสถานะ</span>
              </router-link>
            </div>
          </div>
        </div>
      </div>
      <div class="w-1/3 flex justify-center">
        <button
        @click="redirectToHomePage"
        class="flex justify-center text-2xl font-semibold uppercase items-center"
        style="color: #384bb1"
      >
        MRR
      </button>
      </div>

      <!-- loggedIn = true -->
      <div class="w-1/3 flex justify-end items-center">
        <div
        v-if="loggedIn"
        class="p-1 my-1 text-base font-semibold rounded sm:p-2 right-4"
      >
        <button
          @click="handleLogout"
          class="btn btn-block"
          style="background-color: #384bb1"
        >
          <span
            class="p-1 my-1 mt-1 text-base font-semibold rounded sm:p-2 right-4"
            style="color: #ffffff; background-color: #384bb1"
            >ออกจากระบบ</span
          >
        </button>
      </div>
      <!-- loggedIn = false -->
      <div
        v-else
        class="p-1 my-1 text-base font-semibold rounded sm:p-2 right-4 items-center"
      >
        <router-link
          to="/login-service"
          class="p-1 my-1 text-base font-semibold rounded sm:p-2 right-4"
          style="color: #ffffff; background-color: #384bb1"
          >เข้าสู่ระบบ</router-link
        >
      </div>
      </div>
      
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      statusClick: false,
      menuType: ["ADMIN", "MODERATOR", "STUDENT", "PERSONNEL"],
    };
  },
  computed: {
    loggedIn() {
      return this.$store.state.auth.status.loggedIn;
    },
    user() {
      return this.$store.state.auth.user;
    },
  },
  methods: {
    redirectToHomePage() {
      if (this.user) {
        if (this.user.userType === "ADMIN") {
          this.$router.push("/admin-service");
        }
        if (this.user.userType === "MODERATOR") {
          this.$router.push("/moderator-service");
        }
        if (
          this.user.userType === "STUDENT" ||
          this.user.userType === "PERSONNEL"
        ) {
          this.$router.push("/user-service");
        }
      }else{
        this.$router.push("/");
      }
    },
    handleLogout() {
      this.$store.dispatch("auth/logout").then(
        () => {
          this.$router.push("/");
        },
        (error) => {
          this.message =
            (error.response &&
              error.response.data &&
              error.response.data.message) ||
            error.message ||
            error.toString();
        }
      );
    },
    onClick() {
      console.log(this.user);
      if (this.statusClick) {
        this.statusClick = false;
      } else {
        this.statusClick = true;
      }
    },
    handleClickNoti() {
      this.$router.push("/notification");
    },
  },
};
</script>
