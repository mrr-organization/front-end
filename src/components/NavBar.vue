<template>
<div class="relative">
    
    <div class="fixed top-0 left-0 right-0 flex flex-row bg-white">
    <!-- bars -->
    <div>
      <div v-show="loggedIn">
        <!-- Menu -->
        <!-- onClick = false -->
        <div @click="onClick" v-if="!statusClick">
          <button><font-awesome-icon icon="bars"/></button>
        </div>
         <!-- onClick = true -->
        <div @click="onClick" v-if="statusClick" class="fixed bottom-0 bg-white w-[350px] top-14">
          <button ><font-awesome-icon icon="xmark"/> ปิด</button>
          <div v-if="levelRole === 1">
            <router-link to="/admin/profile" class="flex text-xl font-semibold text-black hover:text-black hover:no-underline ">
              <img src="../assets/Usernav.svg" /> <span class="self-center ml-4">บัญชี</span>
            </router-link>
            <router-link to="/notification" class="flex text-xl font-semibold text-black hover:text-black hover:no-underline ">
              <img src="../assets/Usernav.svg" /> <span class="self-center ml-4">การแจ้งเตือน</span>
            </router-link>
            <router-link to="/dashboard" class="flex text-xl font-semibold text-black hover:text-black hover:no-underline ">
              <img src="../assets/Usernav.svg" /> <span class="self-center ml-4">แดชบอร์ด</span>
            </router-link>
            <router-link to="/admin/manage-member" class="flex text-xl font-semibold text-black hover:text-black hover:no-underline ">
              <img src="../assets/Usernav.svg" /> <span class="self-center ml-4">จัดการบัญชี</span>
            </router-link>
            <router-link to="/admin/manage-member" class="flex text-xl font-semibold text-black hover:text-black hover:no-underline ">
              <img src="../assets/Usernav.svg" /> <span class="self-center ml-4">อัพเดทหน่วยงาน</span>
            </router-link>
          </div>
          <div v-if="levelRole === 2">
            <router-link to="/admin/profile" class="flex text-xl font-semibold text-black hover:text-black hover:no-underline ">
              <img src="../assets/Usernav.svg" /> <span class="self-center ml-4">บัญชี</span>
            </router-link>
            <router-link to="/notification" class="flex text-xl font-semibold text-black hover:text-black hover:no-underline ">
              <img src="../assets/Usernav.svg" /> <span class="self-center ml-4">การแจ้งเตือน</span>
            </router-link>
            <router-link to="/dashboard" class="flex text-xl font-semibold text-black hover:text-black hover:no-underline ">
              <img src="../assets/Usernav.svg" /> <span class="self-center ml-4">แดชบอร์ด</span>
            </router-link>
            <router-link to="/admin/repair-list/department" class="flex text-xl font-semibold text-black hover:text-black hover:no-underline ">
              <img src="../assets/Usernav.svg" /> <span class="self-center ml-4">รายการแจ้งซ่อม</span>
            </router-link>
            <router-link to="/admin/edit/repair-status" class="flex text-xl font-semibold text-black hover:text-black hover:no-underline ">
              <img src="../assets/Usernav.svg" /> <span class="self-center ml-4">สถานะแจ้งซ่อม</span>
            </router-link>
          </div>
          <div v-if="levelRole === 3">
            <router-link to="/user/profile" class="flex text-xl font-semibold text-black hover:text-black hover:no-underline ">
              <img src="../assets/Usernav.svg" /> <span class="self-center ml-4">บัญชี</span>
            </router-link>
            <router-link to="/notification" class="flex text-xl font-semibold text-black hover:text-black hover:no-underline ">
              <img src="../assets/Usernav.svg" /> <span class="self-center ml-4">การแจ้งเตือน</span>
            </router-link>
            <router-link to="/dashboard" class="flex text-xl font-semibold text-black hover:text-black hover:no-underline ">
              <img src="../assets/Usernav.svg" /> <span class="self-center ml-4">แดชบอร์ด</span>
            </router-link>
            <router-link to="/user/repair-notification" class="flex text-xl font-semibold text-black hover:text-black hover:no-underline ">
              <img src="../assets/Usernav.svg" /> <span class="self-center ml-4">แจ้งซ่อม</span>
            </router-link>
            <router-link to="/user/track-repair" class="flex text-xl font-semibold text-black hover:text-black hover:no-underline ">
              <img src="../assets/Usernav.svg" /> <span class="self-center ml-4">ติดตามสถานะ</span>
            </router-link>
          </div>
        </div>
      </div>
    </div>

    <router-link to="/" 
    class="p-2 text-2xl font-semibold uppercase rounded-lg " 
    style="color: #384bb1">MRR</router-link>
    <!-- loggedIn = true -->
    <div v-if="loggedIn" class="p-1 my-1 text-base font-semibold rounded sm:p-2 right-4">
      <button @click="handleLogout" class="btn btn-block" style="background-color: #384bb1">
      <span class="p-1 my-1 text-base font-semibold rounded sm:p-2 right-4" 
    style="color: #ffffff; background-color: #384bb1">ออกจากระบบ</span>
      </button>
    </div>
    <!-- loggedIn = false -->
    <div v-else class="p-1 my-1 text-base font-semibold rounded sm:p-2 right-4">
    <router-link to="/about" 
    class="p-1 my-1 text-base font-semibold rounded sm:p-2 right-4" 
    style="color: #ffffff; background-color: #384bb1">เกี่ยวกับ</router-link>
    </div>

  </div>
</div>
</template>

<script>
export default {
  data() {
    return {
      statusClick: false,
      levelRole: 2
    }
  },
  computed: {
    loggedIn() {
      return this.$store.state.auth.status.loggedIn;
    }
  },
  methods: {
    handleLogout (){
      this.$store.dispatch("auth/logout").then(
        () => {
          this.$router.push("/") 
        },
        (error) => {
          this.message =
            (error.response &&
              error.response.data &&
              error.response.data.message) ||
            error.message ||
            error.toString();
        }
      )
    },
    onClick (){
      if (this.statusClick) {
        this.statusClick = false
      }else {
        this.statusClick = true
      }
    }
  }
};
</script>