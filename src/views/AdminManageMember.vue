<template>
  <div class="main-content mt-20 w-3/5 bg-white m-auto">
    <div class="filter-bar flex justify-between">
      <div class="search">
        <label class="relative block">
          <span class="absolute inset-y-0 left-0 flex items-center pl-2 ml-2">
            <img src="../assets/search.png" class="h-5 w-5 fill-slate-300" />
          </span>
          <input
            class="p-2 m-2 placeholder:italic placeholder:text-slate-400 block bg-white w-full border border-slate-300 rounded-md py-2 pl-9 pr-3 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm"
            type="text"
            v-model="search"
            placeholder="search anything..."
          />
        </label>
      </div>
      <div class="button flex">
        <button
          class="p-2 m-2 bg-red-400 hover:bg-red-600 active:bg-red-700 focus:outline-none focus:ring focus:ring-red-400 rounded-md"
        >
          <p>user</p>
        </button>
        <button
          class="p-2 m-2 bg-red-400 hover:bg-red-600 active:bg-red-700 focus:outline-none focus:ring focus:ring-red-400 rounded-md"
        >
          <p>moderator</p>
        </button>
      </div>
    </div>
    <div class="list-content mt-5">
      <table class="table-fixed border-collapse border border-slate-400 w-full">
        <thead>
          <tr class="bg-white">
            <th class="border border-slate-300">username</th>
            <th class="border border-slate-300">ชื่อ</th>
            <th class="border border-slate-300">eamil</th>
            <th class="border border-slate-300">วันที่สมัคร</th>
            <th class="border border-slate-300">จำนวนวันที่เป็นสมาชิก</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td class="username border border-slate-300">
              <button><p>bazukaaa</p></button>
            </td>
            <td class="full-name border border-slate-300">
              <button><p>poramet mongkhonmasoo</p></button>
            </td>
            <td class="email border border-slate-300">
              <button><p>email.er@gmail.com</p></button>
            </td>
            <td class="register-date border border-slate-300">
              <button><p>2022-10-2 18:20:30</p></button>
            </td>
            <td class="count-register-date border border-slate-300">
              <button><time>{{timeToWords('2022-11-1 18:20:30')}}</time></button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
    <VSPagination
      :totalPages="totalPages"
      @page-number="getListRepairNotificationByStatus"
    >
    </VSPagination>
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

<style></style>
