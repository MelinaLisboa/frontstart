<template>
  <div class="cart-item">
    <div class="cart-item--img-container">
        <img class="cart-item--img" :src="imagePath" />
    </div>
    <div class="content">
      <h3 class="cart-item--name">{{ item.name }}</h3>
      <a class="cart-item--observation">Adicionar Observação</a>
    </div>
    <p class="cart-item--price">{{ item.price | currency}}</p>
  </div>
</template>
<script>
export default {
  name: "CartItem",
  props: {
    item: {},
  },
  filters: {
    currency(value) {
      return `R$ ${value.toLocaleString("pt-br", {
        minimumFractionDigits: 2,
      })}`;
    },
  },
  computed: {
    selectedCategory() {
      return this.$store.state.selectedCategory;
    },
    imagePath() {
      return require(`../assets/images/${this.selectedCategory}/${this.item.id}.png`);
    },
  },
};
</script>

<style lang="less" scoped>
.cart-item {
  display: flex;
  padding: 20px 0;
  border-bottom: 1px solid @light-grey;

  &--img-container {
      border-radius: 8px;
      background: @light-yellow;
      width: 81px;
      height: 66px;
      display: flex;
      align-items: center;
  }

  &--img {
    width: 65px;
    display: block;
    margin: auto    ;
  }

  &--name {
      font-weight: 600;
      font-size: 18px;
      margin: 0;
  }

  &--observation {
      font-weight: 500;
      font-size: 12px;
      color: @dark-grey;
      text-decoration: underline;
  }

  .content {
      flex-grow: 1;
      padding: 0 20px;
  }

  &--price {
      font-weight: 600;
      font-size: 18px;
      line-height: 27px;
      color: @yellow;
  }
}
</style>
