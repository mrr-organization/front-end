<template>
  <div class="mx-auto mt-20 rounded max-w-7xl sm:max-w-7xl main-content">
    <div class="flex justify-between filter-bar">
      <div class="mt-2 search">
        <input
          @change="findByUsername"
          class="block p-2 py-2 pr-3 m-2 text-sm border rounded-full shadow-sm pl-7 w-36 sm:w-full placeholder:italic placeholder:text-slate-400 border-slate-300 sm:pl-9 focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm icon backgroud"
          type="text"
          v-model="search"
          placeholder="ค้นหาชื่อผู้ใช้..."
        />
      </div>
      <div
        class="flex p-0.5 px-1 py-1 sm:px-3 my-3 mt-5 mr-2 sm:mt-2 bg-white rounded-full button"
      >
        <button
          @click="showUser"
          class="p-0.5 m-0.5 sm:p-1 sm:m-2 rounded-md hover:bg-[#FAF0EF] active:bg-[#FF9817] focus:outline-none text-xs sm:text-sm font-semibold transition"
        >
          <p>ผู้ใช้งาน</p>
        </button>
        <div class="border border-black"></div>
        <button
          @click="showModerator"
          class="p-0.5 m-0.5 sm:p-1 sm:m-2 rounded-md hover:bg-[#FAF0EF] active:bg-[#FF9817] focus:outline-none text-xs sm:text-sm font-semibold transition"
        >
          <p>หน่วยงาน</p>
        </button>
      </div>
    </div>
    <div class="mt-5 bg-[#FAF0EF]  overflow-auto rounded-lg">
      <div class=" list-content">
        <table
          class="w-full text-xs border border-collapse border-slate-400 sm:text-xl text-[#312A21] table-fixed"
        >
          <thead>
            <tr class="bg-white">
              <th class="border border-slate-300">ชื่อผู้ใช้</th>
              <th class="border border-slate-300">ชื่อ นามสกุล</th>
              <th class="border border-slate-300">อีเมล์</th>
              <th class="border border-slate-300">วันที่/เวลาสมัคร</th>
              <th class="border border-slate-300">จำนวนวันที่เป็นสมาชิก</th>
              <th class="border border-slate-300">ระงับผู้ใช้งาน</th>
            </tr>
          </thead>
          <tbody v-for="item in listUser" :key="item.id">
            <tr>
              <td class="break-all border username border-slate-300">
                <button>
                  <p>{{ item.username }}</p>
                </button>
              </td>
              <td class="break-all border full-name border-slate-300">
                <button>
                  <p>{{ item.userFullName }}</p>
                </button>
              </td>
              <td class="break-all border email border-slate-300">
                <button>
                  <p >{{ item.userEmail }}</p>
                </button>
              </td>
              <td class="break-all border register-date border-slate-300">
                <button>
                  <p>{{ item.createDate }}</p>
                </button>
              </td>
              <td class="break-all border count-register-date border-slate-300">
                <button>{{ timeToWords(item.createDate) }}</button>
              </td>
              <td class="border count-register-date border-slate-300">
                <button
                  @click="deleteUser(item.username)"
                  class="p-1 bg-[#FF0000] rounded-lg hover:bg-[#02B072] hover:transition-all border border-slate-300"
                >
                  ระงับ
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
    <button
      @click="alertDisplay"
      class="flex ml-auto mt-2 max-w-screen-2xl p-1 bg-[#FFFFFF] rounded-lg hover:bg-[#02B072] hover:transition-all border border-slate-300"
    >
     เพิ่มหน่วยงานที่รับเรื่อง
    </button>
    <VSPagination :totalPages="totalPages" @page-number="getListUserPage">
    </VSPagination>
  </div>
</template>

<script>
import VSPagination from "@/components/VSPagination.vue";
import AuthService from "@/services/auth.service";
import UserService from "@/services/user.service";

export default {
  components: {
    VSPagination,
  },
  data() {
    return {
      search: "",
      type: "USER",
      totalPages: 0,
      pageNumber: 0,
      listUser: [],
      moderator: {
        username: "",
        fname: "",
        lname: "",
        email: "",
        password: "",
        phone: "",
        deptId: "",
      },
    };
  },
  created() {
    this.getListUser(this.userType, this.pageNumber);
  },
  computed: {
    userType() {
      return this.type;
    },
  },
  methods: {
    deleteUser(username) {
      this.$swal
        .fire({
          title: "Are you sure?",
          text: `You won't delete ${username}`,
          icon: "warning",
          showCancelButton: true,
          confirmButtonColor: "#3085d6",
          cancelButtonColor: "#d33",
          confirmButtonText: "Yes, delete it!",
        })
        .then((result) => {
          if (result.isConfirmed) {
            this.$swal.fire(
              "Deleted!",
              `${username} has been deleted.`,
              "success"
            ).then(function () {
              window.location.reload();
            });
          }
        });
    },
    showUser() {
      this.type = "USER";
      this.search = "";
      this.getListUser(this.userType, this.pageNumber);
    },
    showModerator() {
      this.type = "MODERATOR";
      this.search = "";
      this.getListUser(this.userType, this.pageNumber);
    },
    registerModerator(moderator) {
      AuthService.registerModerator(moderator);
    },
    getListUserPage(pageNumber) {
      this.pageNumber = pageNumber;
      this.getListUser(this.userType, pageNumber);
    },
    getListUser(userType, pageNumber) {
      UserService.getListUserByUserTypeForAdmin(userType, pageNumber).then(
        (response) => {
          this.listUser = response.data.responseData.content;
          this.totalPages = response.data.responseData.totalPages;
        }
      );
    },
    timeToWords(time, lang) {
      lang = lang || {
        postfixes: {
          "<": "",
          ">": "from now",
        },
        1000: {
          singular: "a few moments",
          plural: "a few moments",
        },
        60000: {
          singular: "about a minute",
          plural: "# minutes",
        },
        3600000: {
          singular: "about an hour",
          plural: "# hours",
        },
        86400000: {
          singular: "a day",
          plural: "# days",
        },
        31540000000: {
          singular: "a year",
          plural: "# years",
        },
      };

      var timespans = [1000, 60000, 3600000, 86400000, 31540000000];
      var parsedTime = Date.parse(time);

      if (parsedTime && Date.now) {
        var timeAgo = parsedTime - Date.now();
        var diff = Math.abs(timeAgo);
        var postfix = lang.postfixes[timeAgo < 0 ? "<" : ">"];
        var timespan = timespans[0];

        for (var i = 1; i < timespans.length; i++) {
          if (diff > timespans[i]) {
            timespan = timespans[i];
          }
        }

        var n = Math.round(diff / timespan);

        return (
          lang[timespan][n > 1 ? "plural" : "singular"].replace("#", n) +
          postfix
        );
      }
    },
    findByUsername() {
      UserService.findUserByUsername(this.search, this.userType, 0).then(
        (response) => {
          this.listUser = response.data.responseData.content;
          this.totalPages = response.data.responseData.totalPages;
        }
      );
    },
    async alertDisplay() {
      const { value: formValues } = await this.$swal.fire({
        title: "เพิ่มหน่วยงาน",
        html:
          "<div>" +
          '<label for="swal-input1">ชื่อผู้ใช้</label> <br>' +
          `<input id="swal-input1" class=" swal2-input" placeholder="ชื่อผู้ใช้"> <br>` +
          '<label for="swal-input2">ชื่อจริง</label> <br>' +
          '<input id="swal-input2" class="swal2-input" placeholder="ชื่อจริง"> <br>' +
          '<label for="swal-input3">นามสกุล</label> <br>' +
          '<input id="swal-input3" class="swal2-input" placeholder="นามสกุล"> <br>' +
          '<label for="swal-input4">อีเมล์</label> <br>' +
          '<input id="swal-input4" class="swal2-input" placeholder="อีเมล์"> <br>' +
          '<label for="swal-input5">รหัสผ่าน</label> <br>' +
          '<input id="swal-input5" class="swal2-input" placeholder="รหัสผ่าน"> <br>' +
          '<label for="swal-input6">เบอร์ติดต่อ</label> <br>' +
          '<input id="swal-input6" class="swal2-input" placeholder="เบอร์ติดต่อ"> <br>' +
          ' <label for="swal-input7">รหัสหน่วยงาน</label> <br>' +
          '<input id="swal-input7" class="swal2-input" placeholder="รหัสหน่วยงาน"> <br>' +
          "</div>",
        focusConfirm: false,
        showCancelButton: true,
        preConfirm: () => {
          return [
            document.getElementById("swal-input1").value,
            document.getElementById("swal-input2").value,
            document.getElementById("swal-input3").value,
            document.getElementById("swal-input4").value,
            document.getElementById("swal-input5").value,
            document.getElementById("swal-input6").value,
            document.getElementById("swal-input7").value,
          ];
        },
      });

      if (formValues) {
        this.moderator.username = formValues[0];
        this.moderator.fname = formValues[1];
        this.moderator.lname = formValues[2];
        this.moderator.email = formValues[3];
        this.moderator.password = formValues[4];
        this.moderator.phone = formValues[5];
        this.moderator.deptId = formValues[6];
        this.registerModerator(this.moderator);
        this.$swal
          .fire({
            icon: "success",
            title: "Add moderator",
            text: "successful!",
          })
          .then(function () {
            window.location.reload();
          });
      }
    },
  },
};
</script>

<style>
.icon {
  background: url("../assets/search.png") no-repeat left scroll;
  background-size: 20px;
  background-position-x: 7px;
}
.backgroud {
  background-color: white;
}
</style>
