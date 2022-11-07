<template>
  <div class="mx-auto mt-20 rounded max-w-7xl sm:max-w-7xl main-content">
    <div class="flex justify-between filter-bar">
      <div class="mt-2 search">
        <input
          class="block p-2 py-2 pr-3 m-2 text-sm border rounded-full shadow-sm pl-7 w-36 sm:w-full placeholder:italic placeholder:text-slate-400 border-slate-300 sm:pl-9 focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm icon backgroud"
          type="text"
          v-model="search"
          placeholder="search anything..."
        />
      </div>
      <div
        class="flex p-0.5 px-1 py-1 sm:px-3 my-3 mt-5 mr-2 sm:mt-2 bg-white rounded-full button"
      >
        <button
          class="p-0.5 m-0.5 sm:p-1 sm:m-2 rounded-md hover:bg-[#FAF0EF] active:bg-[#FF9817] focus:outline-none texst-xs sm:text-sm font-semibold transition"
        >
          <p>USER</p>
        </button>
        <div class="border border-black"></div>
        <button
          class="p-0.5 m-0.5 sm:p-1 sm:m-2 rounded-md hover:bg-[#FAF0EF] active:bg-[#FF9817] focus:outline-none text-xs sm:text-sm font-semibold transition"
        >
          <p>MODERATOR</p>
        </button>
      </div>
    </div>
    <div class="mt-5 bg-[#FAF0EF] rounded overflow-auto">
      <div class="list-content">
        <table
          class="w-full text-xs border border-collapse border-slate-400 sm:text-xl text-[#312A21] table-auto xl:table-fixed"
        >
          <thead>
            <tr class="bg-white">
              <th class="border border-slate-300">username</th>
              <th class="border border-slate-300">ชื่อ</th>
              <th class="border border-slate-300">eamil</th>
              <th class="border border-slate-300">วันที่สมัคร</th>
              <th class="border border-slate-300">จำนวนวันที่เป็นสมาชิก</th>
              <th class="border border-slate-300">ลบผู้ใช้งาน</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td class="border username border-slate-300">
                <button><p>bazukaaa</p></button>
              </td>
              <td class="border full-name border-slate-300">
                <button><p>poramet mongkhonmasoo</p></button>
              </td>
              <td class="border email border-slate-300">
                <button><p>email.er@mail.kmutt.ac.th</p></button>
              </td>
              <td class="border register-date border-slate-300">
                <button><p>2022-10-2 18:20:30</p></button>
              </td>
              <td class="count-register-date border border-slate-300">
                <button>{{ timeToWords("2022-11-1 18:20:30") }}</button>
              </td>
              <td class="count-register-date border border-slate-300">
                <button
                  class="p-1 bg-[#FF0000] rounded-lg hover:bg-[#02B072] hover:transition-all border border-slate-300"
                >
                  delete
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
    <VSPagination
      :totalPages="totalPages"
      @page-number="getListRepairNotificationByStatus"
    >
    </VSPagination>
    <button
      class="p-1 mt-1 bg-[#FFFFFF] rounded-lg hover:bg-[#02B072] hover:transition-all border border-slate-300"
    >
      Add moderator
    </button>
  </div>
</template>

<script>
import VSPagination from "@/components/VSPagination.vue";
export default {
  components: {
    VSPagination,
  },
  data() {
    return {
      search: "",
    };
  },
  methods: {
    timeToWords(time, lang) {
      lang = lang || {
        postfixes: {
          "<": " ago",
          ">": " from now",
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
