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
    selectedCategory() {
        return this.$store.state.selectedCategory;
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
      }, 1000); //1 segundo
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
  width: 100%;
  margin: 50px;
  display: flex;
  flex-wrap: wrap;

  @media @tablets {
    flex-wrap: wrap; //quebrar a linha
    margin: 0;
    padding: 20px;
  }
}
</style>
