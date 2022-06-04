<template>
    <div class="cart-rest">
        <h2 class="cart-rest--title">Seu Pedido</h2>
        <CartItem 
            v-for="item in cartList" 
            :key="item.id"
            :item="item" />
    </div>
</template>

<script>
import CartItem from './CartItem';

export default {
    name: 'CartRest',
    components: {
        CartItem
    },
    computed: {
        cartList() {
            return this.$store.state.cartList;
        }
    }    
}
</script>
<style lang="less" scoped>
    .cart-rest {
        background: white;
        width: 643px;
        min-width: 643px;
        padding: 50px;

        &--title {
            font-weight: 600;
            font-size: 24px;

        }
    }    
</style>