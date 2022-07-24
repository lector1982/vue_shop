<template>
	<div class="cart">
		<h3 class="text-center font-bold text-2xl">Cart</h3>
		<cart-item
		v-for="(product, index) in cart"
		:key="product.article"
		:cart_prod="product"
		@deleteFromCart="deleteFromCart(index)" />
	</div>
</template>

<script>
import CartItem from '@/components/CartItem'
import {mapActions} from 'vuex'


export default {
	components: {
		CartItem
	},
	props: {
		cart: {
			type: Array,
			default() {
				return []
			}
		}
	},

	methods: {
		...mapActions([
			'DELETE_FROM_CART'
		]),
		deleteFromCart(index) {
			console.log(index);
			this.DELETE_FROM_CART(index);
		}
	}
}
</script>

<style>

</style>