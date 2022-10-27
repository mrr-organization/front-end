<template>
  <div>
    <div class="pagination-row">
      <button
        class="pagination-button hover:bg-[#FAF0EF] hover:transition-all"
        @click="previous"
      >
        Previous
      </button>
      <span v-for="(item, index) in totalPages" :key="index">
        <button class="pagination-button hover:bg-[#FAF0EF] hover:transition-all" @click="currentPage(index)">
          {{ index + 1 }}
        </button>
      </span>
      <button
        class="pagination-button hover:bg-[#FAF0EF] hover:transition-all"
        @click="next"
      >
        Next
      </button>
    </div>
    <slot />
  </div>
</template>

<script>
export default {
  props: {
    totalPages: Number,
  },
  data() {
    return {
      pageNumber: 0,
    };
  },
  methods: {
    currentPage(index) {
      this.pageNumber = index;
      this.$emit("page-number", this.pageNumber);
      console.log(this.pageNumber);
    },
    previous() {
      if (this.pageNumber > 0) this.pageNumber = this.pageNumber - 1;
      this.$emit("page-number", this.pageNumber);
      console.log(this.pageNumber);
    },
    next() {
      if (this.pageNumber < this.totalPages)
        this.pageNumber = this.pageNumber + 1;
      if (this.pageNumber == this.totalPages)
        this.pageNumber = this.pageNumber + -1;
      this.$emit("page-number", this.pageNumber);
      console.log(this.pageNumber);
    },
  },
};
</script>

<style lang="css" scope>
.pagination-button {
  background: #f9d5a7;
  width: 80px;
  height: 50px;
  padding: 4px;
  margin: 4px;
  margin-top: 10px;
  border-radius: 10px;
  font-size: 1em;
  cursor: pointer;
}

.pagination-row {
  pad: 5px;
}
</style>
