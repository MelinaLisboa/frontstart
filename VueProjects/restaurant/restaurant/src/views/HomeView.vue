<template>
  <div class="home">
    <CategoryMenu />
    <ItemsList />
    <CartRest v-if="isDesktop()"/>
  </div>
</template>

<script>
// @ is an alias to /src
import CategoryMenu from "@/components/CategoryMenu.vue";
import ItemsList from "@/components/ItemsList.vue";
import CartRest from "@/components/CartRest.vue";
import Mixin from "@/mixins/mixins.js"

export default {
  name: "HomeView",
  components: {
    CategoryMenu,
    ItemsList,
    CartRest
},
mixins: [Mixin]
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
