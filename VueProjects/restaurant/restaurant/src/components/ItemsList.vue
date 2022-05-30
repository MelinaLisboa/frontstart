<template>
  <div class="items-list">
    <LoadingPage v-if="isLoading"/>
    <ItemRest
      v-for="itemRest in itemsList"
      :key="itemRest.id"
      :itemRest="itemRest"
    />
  </div>
</template>
<script>
import axios from "axios";
import ItemRest from "./ItemRest";
import LoadingPage from "./LoadingPage";

export default {
  name: "ItemsList",
  components: {
    ItemRest,
    LoadingPage
  },
  data() {
    return {
      itemsList: [],
      isLoading: false
    };
  },
  created() {},
  computed: {
    selectedCategory: {
      get() {
        return this.$store.state.selectedCategory;
      },
    },
  },
  methods: {
    getItemsList() {
      this.isLoading = true;
      this.itemsList = [];

      setTimeout(() => {//simular uma request que leva um tempo maior para carregar dados
      axios
        .get(`http://localhost:3000/${this.selectedCategory}`)
        .then((response) => {
          this.itemsList = response.data;
          this.isLoading = false;
        });
      }, 2000); //2 segundos
    }
  },
  watch: {
    selectedCategory() {
      this.getItemsList();
    }
  }
};
</script>
<style lang="less" scoped>
.items-list {
  margin: 50px;
  display: flex;
  width: 100%;

  @media @tablets {
    flex-wrap: wrap;
    margin: 20px;
  }
}
</style>
