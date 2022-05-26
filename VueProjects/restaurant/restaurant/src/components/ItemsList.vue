<template>
  <div class="items-list">
    <ItemRest v-for="itemRest in itemsList" :key="itemRest.id" :itemRest="itemRest" />
  </div>
</template>
<script>
import axios from "axios";
import ItemRest from "./ItemRest";

export default {
  name: "ItemsList",
  components: {
    ItemRest,
  },
  data() {
    return {
      itemsList: [],
    };
  },
  created() {
    axios.get("http://localhost:3000/burguers").then((response) => {
      this.itemsList = response.data;
    });
  },
};
</script>
<style lang="less" scoped>
    .items-list {
        margin: 50px;
        display: flex;

        @media @tablets {
          flex-wrap: wrap;
          margin: 20px;
        }
    }
</style>
