<template>
  <div class="item-rest" @click="addToCart">
    <div class="container">
      <div class="item-rest--tag" v-if="itemRest.offer">Oferta</div>
      <img class="item-rest--img" :src="imagePath" />
    </div>
    <div class="content">
      <h2 class="item-rest--name">{{ itemRest.name }}</h2>
      <p class="item-rest--description">{{ itemRest.description }}</p>
      <p class="item-rest--price">{{ itemRest.price | currency }}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "ItemRest",
  filters: {
    currency(value) {
      return `R$ ${value.toLocaleString("pt-br", {
        minimumFractionDigits: 2,
      })}`;
    },
  },
  props: {
    //vai receber informações do item pai
    itemRest: {},
  },
  computed: {
    imagePath() {
      return require(`../assets/images/${this.itemRest.id}.png`);
    },
  },
  methods: {
    addToCart() {
      this.$store.dispatch('addToCart', this.itemRest);
    }
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

  display: flex;
  flex-direction: column;

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
    margin: auto;
    width: 100%;
  }

  &--name {
    font-weight: 600;
    font-size: 18px;
    margin: 0;
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
    margin: 0;
  }

  .content {
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    margin-top: 10px;
  }

  @media @tablets {
    width: 100%;
    height: fit-content;
    border: 1px solid @light-grey;
    display: flex;
    flex-direction: row;
    margin: 10px 0;
    padding: 10px 20px;

    &--img {
      width: 86px;
      order: 0;
      margin: 0 0 10px 0;
    }

    &--price {
      text-align: right;
      margin: 5px 0 0 auto;
    }

    &--tag {
      position: static;
      order: 1;
      width: fit-content;
    }

    .content {
      flex-grow: 1;
    }

    .container {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      margin-right: 10px;
    }
  }
}
</style>
