<template>
  <div class="home">
    <CategoryMenu />
    <ItemsList />
    <CartRest />
  </div>
</template>

<script>
// @ is an alias to /src
import CategoryMenu from "@/components/CategoryMenu.vue";
import ItemsList from "@/components/ItemsList.vue";
import CartRest from "@/components/CartRest.vue"

export default {
  name: "HomeView",
  components: {
    CategoryMenu,
    ItemsList,
    CartRest
},
};
</script>

<style scoped lang="less">
  .home {
    display: flex;

    @media @tablets {
      flex-direction: column;
    }
  }
</style>
