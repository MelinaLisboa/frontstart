<template>
  <div class="item-rest">
    <div class="item-rest--tag" v-if="itemRest.offer">Oferta</div>
    <img class="item-rest--img" src="../assets/images/burguer.png">
    <h2 class="item-rest--name">{{ itemRest.name }}</h2>
    <p class="item-rest--description">{{ itemRest.description }}</p>
    <p class="item-rest--price">{{ itemRest.price | currency}}</p>
  </div>
</template>

<script>
export default {
  name: "ItemRest",
  filters: {
    currency(value) {
      return `R$ ${value.toLocaleString('pt-br', {minimumFractionDigits: 2})}`;
    }
  },
  props: {
    //vai receber informações do item pai
    itemRest: {},
  },
};
</script>
<style lang="less" scoped>
  .item-rest {
    width: 215.95px;
    height: 290px;
    border-radius: 8px;
    background: white;
    position: relative;
    margin: 20px;
    padding: 20px;

    &--tag {
      position: absolute;
      background: @pink;
      border-radius: 8px;
      color: white;
      top: 15px;
      right: 15px;
      font-weight: 500px;
      font-size: 12px;
      padding: 3px 8px;
    }

    &--img {
      display: block;
      margin: 20px auto 0px;
    }

    &--name {
      font-weight: 600;
      font-size: 18px;
      margin: 8px auto;
    }

    &--description {
      color: @dark-grey;
      font-weight: 300;
      font-size: 12px;
      margin: 0;
    }

    &--price {
      font-weight: 600;
      font-size: 18px;
      color: @yellow;
      margin: 8px auto;
    }
  }
</style>
